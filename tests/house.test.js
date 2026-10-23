import test from 'node:test';
import assert from 'node:assert/strict';
import {sampleRooms,buildHouseGeometry} from '../src/house.js';
import {buildMap,direct,indirect,intersect,prepScene,sceneKey} from '../src/photon.js';

const makeScene = (rooms, openings = []) => prepScene({
  room: {w: 12.25, h: 3, d: 9.25},
  wallVis: {left: false, right: false, back: false, floor: false, ceil: false},
  objects: buildHouseGeometry(rooms, .12, true, openings),
  lights: [{id: 1, name: 'Living light', type: 'area', pos: [2.5, 2.85, 2.5], size: 1.2, power: 80, color: [1, 1, 1], on: true}]
});

test('sample home has six actual room footprints and generated floors/walls', () => {
  const rooms = sampleRooms(), geometry = buildHouseGeometry(rooms, .12, true);
  assert.equal(rooms.length, 6);
  assert.ok(geometry.filter(o => o.name.endsWith('floor')).length === 6);
  assert.ok(geometry.some(o => o.name.includes('wall')));
  assert.ok(geometry.some(o => o.name.endsWith('ceiling')));
  const groups = new Map();
  for (const wall of geometry.filter(o => o.wallOrientation)) {
    const axis = wall.wallOrientation === 'x' ? 0 : 2, normal = wall.wallOrientation === 'x' ? 2 : 0;
    const key = [wall.wallOrientation, wall.pos[normal], wall.pos[1], wall.scale[1]].join(':');
    const spans = groups.get(key) || [];
    spans.push([wall.pos[axis] - wall.scale[axis] / 2, wall.pos[axis] + wall.scale[axis] / 2]);
    groups.set(key, spans);
  }
  for (const spans of groups.values()) {
    spans.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < spans.length; i++) assert.ok(spans[i][0] >= spans[i - 1][1] - .015, 'shared wall geometry must not be duplicated');
  }
});

test('shared room edges have a passable doorway and a solid lintel', () => {
  const s = makeScene(sampleRooms());
  const throughDoor = intersect(s, [4.5, 1, 2.5], [1, 0, 0]);
  assert.ok(throughDoor && throughDoor.p[0] > 6, `doorway should let the ray into the next room, got ${throughDoor?.p}`);
  const lintel = intersect(s, [4.5, 2.5, 2.5], [1, 0, 0]);
  assert.ok(lintel && lintel.p[0] < 5.1, `lintel should block above the doorway, got ${lintel?.p}`);
});

test('explicit window opening is cut through real wall geometry', () => {
  const rooms = sampleRooms();
  rooms[0].openings.push({wall: 'back', offset: 2.5, width: 1.4, height: 1, sill: .9, type: 'window'});
  const s = makeScene(rooms);
  assert.equal(intersect(s, [2.5, 1.3, .5], [0, 0, -1]), null);
  assert.ok(intersect(s, [2.5, .5, .5], [0, 0, -1]));
});

test('editable architectural doors cut their selected wall and track position and size', () => {
  const rooms = [{id: 1, name: 'Living', type: 'Living', x: 0, z: 0, w: 4, d: 4, height: 3,
    wallColor: [.8, .8, .8], floorColor: [.8, .8, .8], openings: []}];
  const door = {id: 20, openingType: 'door', roomId: 1, wall: 'front', pos: [1, 1.05, 4], scale: [.9, 2.1, .12], visible: true};
  const s = makeScene(rooms, [door]);
  assert.equal(intersect(s, [1, 1, 3], [0, 0, 1]), null, 'door-sized opening should pass through the wall');
  assert.ok(intersect(s, [1, 2.6, 3], [0, 0, 1]), 'wall above the door remains solid');
  door.pos[0] = 3;
  door.scale[0] = 1.4;
  const moved = makeScene(rooms, [door]);
  assert.ok(intersect(moved, [1, 1, 3], [0, 0, 1]), 'moving the architectural object moves the actual wall cut');
  assert.equal(intersect(moved, [3, 1, 3], [0, 0, 1]), null, 'resized opening uses the updated width');
});

test('window glass transmits tinted direct light while opaque material blocks it', () => {
  const rooms = [{id: 1, name: 'Living', type: 'Living', x: 0, z: 0, w: 4, d: 4, height: 3,
    wallColor: [.8, .8, .8], floorColor: [.8, .8, .8], openings: [{wall: 'front', offset: 2, width: 1.6, height: 1.2, sill: .8, type: 'window'}]}];
  const scene = makeScene(rooms);
  scene.room = {w: 4, h: 3, d: 4};
  scene.objects.push({type: 'box', pos: [2, 1.4, 4], rot: [0, 0, 0], scale: [1.5, 1.1, .05],
    col: [.55, .8, 1], transmission: .9, visible: true});
  prepScene(scene);
  scene.lights = [{id: 2, name: 'Outside light', type: 'point', pos: [2, 2.5, 5], power: 40, color: [1, 1, 1], on: true}];
  const throughGlass = direct(scene, [2, 0, 2], [0, 1, 0], [.8, .8, .8]);
  assert.ok(throughGlass[0] > 0 && throughGlass[2] > throughGlass[0], `glass should transmit tinted direct light: ${throughGlass}`);
  const params = {count: 12000, bounces: 4, k: 40, radius: .8};
  const glassMap = buildMap(scene, params, 17);
  let interiorHits = 0;
  for (let i = 2; i < glassMap.pos.length; i += 3) if (glassMap.pos[i] < 3) interiorHits++;
  assert.ok(interiorHits > 0, 'photons should pass through the glass and deposit energy inside the room');
  scene.objects[scene.objects.length - 1].transmission = 0;
  prepScene(scene);
  assert.deepEqual(direct(scene, [2, 0, 2], [0, 1, 0], [.8, .8, .8]), [0, 0, 0], 'opaque pane blocks direct light');
  const opaqueMap = buildMap(scene, params, 17);
  let opaqueInteriorHits = 0;
  for (let i = 2; i < opaqueMap.pos.length; i += 3) if (opaqueMap.pos[i] < 3) opaqueInteriorHits++;
  assert.ok(interiorHits > opaqueInteriorHits, 'transmissive pane should deposit more photons inside than an opaque pane');
});

test('moving and resizing a room relocates its generated floor and walls', () => {
  const rooms = sampleRooms(), initial = makeScene(rooms);
  assert.ok(intersect(initial, [4.5, 2, 2.5], [0, -1, 0]));
  rooms[0].x = 20;
  rooms[0].w = 3;
  const moved = makeScene(rooms);
  assert.equal(intersect(moved, [4.5, 2, 2.5], [0, -1, 0]), null);
  assert.ok(intersect(moved, [21.5, 2, 2.5], [0, -1, 0]));
});

test('multi-room house state survives the v3 JSON save/load shape', () => {
  const rooms = sampleRooms(), original = {
    version: 3,
    state: {
      room: {w: 12.25, h: 3, d: 9.25},
      wallThickness: .18,
      showHouseWalls: false,
      showCeilings: true,
      rooms,
      objects: [{id: 20, name: 'Bedroom bed', type: 'box', pos: [9.5, .2, 2.5], rot: [0, 0, 0], scale: [2, .4, 2], col: [.6, .5, .4], roomId: 103}],
      lights: [{id: 21, name: 'Bedroom area', type: 'area', pos: [9.5, 2.8, 2.5], size: 1, power: 55, color: [1, .9, .8], on: true}],
      walls: {}, wallVis: {}
    },
    params: {count: 60000, bounces: 5}
  };
  const restored = JSON.parse(JSON.stringify(original));
  assert.deepEqual(restored.state.rooms, rooms);
  assert.deepEqual(restored.state.objects, original.state.objects);
  assert.deepEqual(restored.state.lights, original.state.lights);
  assert.equal(restored.state.wallThickness, .18);
});

test('photon mapping uses generated house surfaces and wall albedo for color bleeding', () => {
  const rooms = sampleRooms(), s = makeScene(rooms), params = {count: 30000, bounces: 5, k: 80, radius: 1.2};
  const keyBefore = sceneKey(s, params);
  const red = indirect(buildMap(s, params), [2.5, 0, .55], [0, 1, 0], [.75, .75, .75], params);
  rooms[0].wallColor = [.08, .12, .8];
  const blueScene = makeScene(rooms);
  assert.notEqual(sceneKey(blueScene, params), keyBefore, 'recolored generated walls must invalidate the photon-map cache');
  const blue = indirect(buildMap(blueScene, params), [2.5, 0, .55], [0, 1, 0], [.75, .75, .75], params);
  assert.ok(red[0] > red[2], `expected red spill, got ${red}`);
  assert.ok(blue[2] > blue[0], `expected blue spill, got ${blue}`);
});

test('different floor plans and added furniture produce matching fresh photon data', () => {
  const params = {count: 8000, bounces: 4, k: 60, radius: 1};
  const roomsA = sampleRooms();
  const sceneA = makeScene(roomsA);
  const mapA = buildMap(sceneA, params);

  const roomsB = roomsA.map(room => ({...room, x: room.x + 14, z: room.z - 8}));
  const sceneB = makeScene(roomsB);
  sceneB.lights[0].pos = [16.5, 2.85, -5.5];
  const keyA = sceneKey(sceneA, params), keyB = sceneKey(sceneB, params);
  const mapB = buildMap(sceneB, params);
  assert.notEqual(keyB, keyA, 'a new floor-plan layout must invalidate the previous map');
  assert.ok(mapA.pos.length > 0 && mapB.pos.length === mapA.pos.length);
  assert.ok(Math.abs(mapB.pos[0] - mapA.pos[0] - 14) < .002, 'photon positions should follow the translated layout');
  assert.ok(Math.abs(mapB.pos[2] - mapA.pos[2] + 8) < .002);

  sceneB.objects.push({
    id: 500, name: 'New furniture', type: 'box', pos: [16.5, 1, -5.5],
    rot: [0, 0, 0], scale: [1.5, 1.8, 1.5], col: [.2, .4, .8], visible: true
  });
  const furnishedKey = sceneKey(sceneB, params), furnishedMap = buildMap(sceneB, params);
  assert.notEqual(furnishedKey, keyB, 'adding scene geometry must invalidate the previous map');
  assert.notDeepEqual(furnishedMap.path, mapB.path, 'photon paths must interact with newly added geometry');
});

test('direct illumination respects generated house walls and doorway openings', () => {
  const rooms = [{id: 1, name: 'Room', type: 'Living', x: 0, z: 0, w: 4, d: 4, height: 3,
    wallColor: [.8, .8, .8], floorColor: [.8, .8, .8], openings: []}];
  const scene = makeScene(rooms);
  scene.room = {w: 4, h: 3, d: 4};
  scene.objects = buildHouseGeometry(rooms, .12, false);
  prepScene(scene);
  scene.lights = [{id: 2, name: 'Outside light', type: 'point', pos: [2, 2, 5], power: 40, color: [1, 1, 1], on: true}];
  const blocked = direct(scene, [2, 0, 2], [0, 1, 0], [.8, .8, .8]);
  assert.deepEqual(blocked, [0, 0, 0], 'front wall must block direct light');

  rooms[0].openings.push({wall: 'front', offset: 2, width: 1.2, height: 2.2, type: 'door'});
  scene.objects = buildHouseGeometry(rooms, .12, false);
  prepScene(scene);
  const throughDoor = direct(scene, [2, 0, 2], [0, 1, 0], [.8, .8, .8]);
  assert.ok(throughDoor[0] > 0, 'direct light should pass through the generated doorway');
});
