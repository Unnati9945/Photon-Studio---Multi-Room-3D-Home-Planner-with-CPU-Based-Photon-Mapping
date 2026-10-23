const ROOM_COLORS = {
  Living: [0.78, 0.72, 0.62],
  Bedroom: [0.72, 0.68, 0.58],
  Kitchen: [0.78, 0.78, 0.72],
  Bathroom: [0.7, 0.76, 0.8],
  Dining: [0.76, 0.68, 0.56],
  Hallway: [0.72, 0.72, 0.72]
};

export const sampleRooms = () => [
  {id: 101, name: 'Living room', type: 'Living', x: 0, z: 0, w: 5, d: 5, height: 3, wallColor: [0.78, 0.12, 0.1], floorColor: [0.72, 0.68, 0.58], openings: []},
  {id: 102, name: 'Hallway', type: 'Hallway', x: 5, z: 0, w: 2, d: 5, height: 3, wallColor: [0.78, 0.76, 0.7], floorColor: [0.7, 0.67, 0.58], openings: []},
  {id: 103, name: 'Bedroom', type: 'Bedroom', x: 7, z: 0, w: 5, d: 5, height: 3, wallColor: [0.72, 0.68, 0.58], floorColor: [0.55, 0.42, 0.3], openings: []},
  {id: 104, name: 'Kitchen', type: 'Kitchen', x: 0, z: 5, w: 5, d: 4, height: 3, wallColor: [0.78, 0.78, 0.72], floorColor: [0.72, 0.73, 0.7], openings: []},
  {id: 105, name: 'Dining room', type: 'Dining', x: 5, z: 5, w: 4, d: 4, height: 3, wallColor: [0.76, 0.68, 0.56], floorColor: [0.65, 0.52, 0.38], openings: []},
  {id: 106, name: 'Bathroom', type: 'Bathroom', x: 9, z: 5, w: 3, d: 4, height: 3, wallColor: [0.7, 0.76, 0.8], floorColor: [0.65, 0.7, 0.72], openings: []}
];

function touching(a, b, side, epsilon = 1e-5) {
  const vertical = side === 'left' || side === 'right';
  const coordinateA = side === 'right' ? a.x + a.w : side === 'left' ? a.x : side === 'front' ? a.z + a.d : a.z;
  const oppositeSide = ({left: 'right', right: 'left', front: 'back', back: 'front'})[side];
  const coordinateB = oppositeSide === 'right' ? b.x + b.w : oppositeSide === 'left' ? b.x : oppositeSide === 'front' ? b.z + b.d : b.z;
  if (Math.abs(coordinateA - coordinateB) > epsilon) return null;
  const a0 = vertical ? a.z : a.x, a1 = a0 + (vertical ? a.d : a.w);
  const b0 = vertical ? b.z : b.x, b1 = b0 + (vertical ? b.d : b.w);
  const lo = Math.max(a0, b0), hi = Math.min(a1, b1);
  return hi - lo > 0.05 ? {lo, hi, coordinate: coordinateA} : null;
}

function wallBox(id, name, color, x, y, z, width, height, thickness, horizontal) {
  return {id, name, type: 'box', pos: [x, y, z], rot: [0, 0, 0], scale: horizontal ? [width, height, thickness] : [thickness, height, width], col: [...color], visible: true, architecture: true, wallOrientation: horizontal ? 'x' : 'z'};
}

export function buildHouseGeometry(rooms, wallThickness = 0.12, ceilingsVisible = false, openingObjects = []) {
  const objects = [];
  let id = -1000;
  const sides = ['back', 'front', 'left', 'right'];
  for (const room of rooms) {
    objects.push({id: id--, name: `${room.name} floor`, type: 'box', pos: [room.x + room.w / 2, -0.03, room.z + room.d / 2],
      rot: [0, 0, 0], scale: [room.w, 0.06, room.d], col: [...(room.floorColor || [0.72, 0.72, 0.72])], visible: true, architecture: true});
    if (ceilingsVisible) objects.push({id: id--, name: `${room.name} ceiling`, type: 'box', pos: [room.x + room.w / 2, room.height, room.z + room.d / 2],
      rot: [0, 0, 0], scale: [room.w, 0.06, room.d], col: [...(room.wallColor || [0.8, 0.8, 0.8])], visible: true, architecture: true});

    for (const side of sides) {
      const horizontal = side === 'back' || side === 'front';
      const length = horizontal ? room.w : room.d;
      const start = horizontal ? room.x : room.z;
      const coordinate = side === 'back' ? room.z : side === 'front' ? room.z + room.d : side === 'left' ? room.x : room.x + room.w;
      const opposite = {back: 'front', front: 'back', left: 'right', right: 'left'}[side];
      const neighbors = rooms.filter(other => other.id !== room.id).map(other => {
        const shared = touching(room, other, side);
        if (!shared) return null;
        const customDoor = openingObjects.some(o => o.openingType === 'door' &&
          ((o.roomId === room.id && o.wall === side) || (o.roomId === other.id && o.wall === opposite)) &&
          (horizontal ? o.pos[0] : o.pos[2]) >= shared.lo && (horizontal ? o.pos[0] : o.pos[2]) <= shared.hi);
        return customDoor ? null : shared;
      }).filter(Boolean);
      const centerY = room.height / 2;
      const addSegment = (a, b, y0 = 0, y1 = room.height, suffix = '') => {
        if (b - a <= 0.015 || y1 - y0 <= 0.015) return;
        const center = (a + b) / 2;
        objects.push(wallBox(id--, `${room.name} ${side} wall${suffix}`, room.wallColor || [0.8, 0.8, 0.8],
          horizontal ? center : coordinate, (y0 + y1) / 2, horizontal ? coordinate : center,
          b - a, y1 - y0, wallThickness, horizontal));
      };
      const openings = [];
      for (const neighbor of neighbors) {
        const midpoint = (neighbor.lo + neighbor.hi) / 2;
        openings.push({lo: Math.max(start, midpoint - 0.5), hi: Math.min(start + length, midpoint + 0.5), height: 2.1, type: 'door'});
      }
      for (const opening of room.openings || []) {
        if (opening.wall !== side) continue;
        const center = start + opening.offset;
        openings.push({lo: Math.max(start, center - opening.width / 2), hi: Math.min(start + length, center + opening.width / 2),
          height: opening.height || 2.1, type: opening.type || 'door', sill: opening.sill || 0});
      }
      for (const object of openingObjects) {
        if (object.roomId !== room.id || object.wall !== side || object.visible === false) continue;
        const center = horizontal ? object.pos[0] : object.pos[2];
        const sill = object.openingType === 'window' ? Math.max(0, object.pos[1] - object.scale[1] / 2) : 0;
        openings.push({lo: Math.max(start, center - object.scale[0] / 2), hi: Math.min(start + length, center + object.scale[0] / 2),
          height: object.scale[1], type: object.openingType, sill});
      }
      const sorted = openings.filter(o => o.hi - o.lo > 0.015).sort((a, b) => a.lo - b.lo);
      const cuts = [];
      for (const opening of sorted) {
        const last = cuts[cuts.length - 1];
        if (last && opening.lo <= last.hi) {
          last.hi = Math.max(last.hi, opening.hi);
          last.height = Math.max(last.height, opening.height);
        } else cuts.push({...opening});
      }
      let cursor = start;
      for (const opening of cuts) {
        addSegment(cursor, opening.lo);
        if (opening.type === 'window') addSegment(opening.lo, opening.hi, 0, opening.sill);
        const openingTop = opening.type === 'window' ? (opening.sill || 0) + (opening.height || 1) : (opening.height || 2.1);
        addSegment(opening.lo, opening.hi, openingTop, room.height);
        cursor = Math.max(cursor, opening.hi);
      }
      addSegment(cursor, start + length);
    }
  }
  const mergedWalls = new Map(), result = objects.filter(o => !o.wallOrientation);
  for (const wall of objects.filter(o => o.wallOrientation)) {
    const horizontal = wall.wallOrientation === 'x', axis = horizontal ? 0 : 2, normalAxis = horizontal ? 2 : 0;
    const line = wall.pos[normalAxis], thickness = wall.scale[normalAxis], height = wall.scale[1], y = wall.pos[1];
    const key = [wall.wallOrientation, line, thickness, y, height].map(v => typeof v === 'number' ? v.toFixed(4) : v).join(':');
    const group = mergedWalls.get(key) || {wall, intervals: []};
    group.intervals.push([wall.pos[axis] - wall.scale[axis] / 2, wall.pos[axis] + wall.scale[axis] / 2]);
    mergedWalls.set(key, group);
  }
  for (const {wall, intervals} of mergedWalls.values()) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    for (const interval of intervals) {
      const previous = merged[merged.length - 1];
      if (previous && interval[0] <= previous[1] + 0.015) previous[1] = Math.max(previous[1], interval[1]);
      else merged.push([...interval]);
    }
    for (const [lo, hi] of merged) {
      const horizontal = wall.wallOrientation === 'x', center = (lo + hi) / 2;
      result.push(wallBox(id--, 'House wall', wall.col, horizontal ? center : wall.pos[0], wall.pos[1],
        horizontal ? wall.pos[2] : center, hi - lo, wall.scale[1], wall.scale[horizontal ? 2 : 0], horizontal));
    }
  }
  return result;
}

export function createHouseRoom(type, id, x, z, w = 4, d = 4, height = 3) {
  const color = ROOM_COLORS[type] || ROOM_COLORS.Living;
  return {id, name: `${type} ${id}`, type, x, z, w, d, height, wallColor: [...color], floorColor: [0.72, 0.7, 0.64], openings: []};
}
