import test from 'node:test';
import assert from 'node:assert/strict';
import {defaultScene,buildMap,shade,toneMap,luminance,intersect} from '../src/photon.js';
import {sampleRooms,buildHouseGeometry} from '../src/house.js';

const normalize = v => {const n = Math.hypot(...v); return v.map(x => x / n)};
const cross = (a, b) => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];

test('all render modes produce exposed images with one shared camera frame', () => {
  const scene = defaultScene(), params = {count: 60000, k: 80, radius: .8, bounces: 5, exposure: 2.2, gain: 1};
  assert.equal(scene.wallVis.ceil, false, 'the interior demo should not default to a ceiling that blocks elevated views');
  const map = buildMap(scene, params), size = 48, origin = [2.5, 3, 12], forward = normalize([0, 2.5, 2.5].map((v, i) => v - origin[i]));
  const right = normalize(cross(forward, [0, 1, 0])), up = cross(right, forward), tan = Math.tan(Math.PI / 9);
  const modes = {direct: [0, 0, 0], indirect: [0, 0, 0], gi: [0, 0, 0]}, displays = {direct: 0, indirect: 0, gi: 0};
  let differingPixels = 0;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const sx = ((x + .5) / size * 2 - 1) * tan, sy = (1 - (y + .5) / size * 2) * tan;
    const direction = normalize([0, 1, 2].map(i => forward[i] + right[i] * sx + up[i] * sy));
    const colors = ['direct', 'indirect', 'gi'].map(mode => shade(scene, map, params, origin, direction, mode));
    for (let i = 0; i < 3; i++) for (let c = 0; c < 3; c++) modes[['direct', 'indirect', 'gi'][i]][c] += colors[i][c];
    for (const [i, mode] of ['direct', 'indirect', 'gi'].entries()) displays[mode] += luminance(toneMap(colors[i], params.exposure));
    if (colors.some((c, i) => i > 0 && Math.hypot(...c.map((v, k) => v - colors[0][k])) > 1e-5)) differingPixels++;
  }
  const pixels = size * size;
  for (const mode of Object.keys(modes)) {
    const meanLinear = modes[mode].reduce((sum, value) => sum + value, 0) / (pixels * 3);
    assert.ok(meanLinear > 0.005, `${mode} should not render nearly black (mean linear value ${meanLinear})`);
    assert.ok(displays[mode] / pixels > 0.05, `${mode} must remain visible after exposure and tone mapping`);
  }
  const floorDirection = normalize([2.5 - origin[0], -origin[1], 3.5 - origin[2]]);
  assert.equal(intersect(scene, origin, floorDirection)?.id, 'floor');
  const directFloor = shade(scene, map, params, origin, floorDirection, 'direct');
  const indirectFloor = shade(scene, map, params, origin, floorDirection, 'indirect');
  const giFloor = shade(scene, map, params, origin, floorDirection, 'gi');
  for (let c = 0; c < 3; c++) assert.ok(Math.abs(giFloor[c] - directFloor[c] - indirectFloor[c]) < 1e-8, 'GI must sum the actual direct and indirect surface radiance');
  assert.ok(differingPixels > pixels * .15, 'the same camera frame should show real mode-dependent illumination');
});

test('exposure tone mapping preserves colour order and compresses highlights', () => {
  const low = toneMap([.2, .1, .05], 1), high = toneMap([2, 1, .5], 1);
  assert.ok(low[0] > low[1] && low[1] > low[2]);
  assert.ok(high.every(value => value > 0 && value <= 1));
  assert.ok(high[0] < 1, 'highlights should roll off instead of hard-clipping at white');
  assert.ok(toneMap([.2, .1, .05], 2)[0] > low[0], 'exposure must increase displayed radiance');
});

test('top-down multi-room renders show lit interiors without hidden ceilings occluding them', () => {
  const rooms = sampleRooms();
  const objects = buildHouseGeometry(rooms, .12, false);
  assert.equal(objects.some(object => object.name.endsWith('ceiling')), false, 'hidden ceilings must not enter the render geometry');
  const scene = {
    room: {w: 12.25, h: 3, d: 9.25},
    walls: {},
    wallVis: {left: false, right: false, back: false, floor: false, ceil: false},
    rooms,
    wallThickness: .12,
    objects,
    lights: [
      {id: 1, type: 'area', pos: [2.5, 2.85, 2.5], size: 1.2, power: 65, color: [1, .92, .8], on: true},
      {id: 2, type: 'point', pos: [6, 2.6, 2.5], size: 0, power: 35, color: [1, 1, 1], on: true},
      {id: 3, type: 'area', pos: [9.5, 2.85, 2.5], size: 1, power: 55, color: [.82, .88, 1], on: true},
      {id: 4, type: 'point', pos: [2.5, 2.6, 7], size: 0, power: 45, color: [1, 1, 1], on: true},
      {id: 5, type: 'area', pos: [7, 2.85, 7], size: 1, power: 50, color: [1, .88, .72], on: true},
      {id: 6, type: 'point', pos: [10.5, 2.6, 7], size: 0, power: 30, color: [.9, .95, 1], on: true}
    ]
  };
  const params = {count: 80000, k: 60, radius: .8, bounces: 5, exposure: 2.2, gain: 1};
  const map = buildMap(scene, params, 19);
  const size = 30, origin = [6.125, 16, 4.625];
  const displayed = {direct: 0, indirect: 0, gi: 0};
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const direction = normalize([
      ((x + .5) / size * 2 - 1) * .38,
      -1,
      ((y + .5) / size * 2 - 1) * .3
    ]);
    for (const mode of Object.keys(displayed)) {
      displayed[mode] += luminance(toneMap(shade(scene, map, params, origin, direction, mode), params.exposure));
    }
  }
  for (const [mode, total] of Object.entries(displayed)) {
    const mean = total / (size * size);
    assert.ok(mean > .025, `${mode} multi-room preview should remain visibly exposed; mean display luminance=${mean}`);
  }
});
