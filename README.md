# PhotonStudio

PhotonStudio is a browser-based 3D home planner with an interactive Three.js viewport and a separate CPU photon-mapping renderer. It supports a single-room demo scene as well as editable multi-room floor plans. Render output and Photon Analysis are generated from the active design.

## Contents

- [Requirements and commands](#requirements-and-commands)
- [Quick start](#quick-start)
- [Features](#features)
- [Interface guide](#interface-guide)
- [Multi-room floor-plan workflow](#multi-room-floor-plan-workflow)
- [Objects, furniture, doors, and windows](#objects-furniture-doors-and-windows)
- [Lighting and photon-mapping renderer](#lighting-and-photon-mapping-renderer)
- [Photon Analysis](#photon-analysis)
- [Saving and loading](#saving-and-loading)
- [Keyboard controls](#keyboard-controls)
- [Project structure and function reference](#project-structure-and-function-reference)
- [Tests](#tests)
- [Current limitations](#current-limitations)

## Requirements and commands

- Node.js 18 or newer
- A WebGL-capable browser (Chrome, Edge, or Firefox)
- npm

From the project directory:

```powershell
npm install
npm run dev
npm test
npm run build
```

Vite prints the local URL after the dev server starts; by default it is `http://localhost:5173/`.

An additional, slower headless render check writes PPM preview images and prints pixel luminance/color-bleed measurements:

```powershell
node tests/render-smoke.mjs .
```

## Quick start

1. Start the app with `npm run dev` and open the Vite URL.
2. Use **File → Load sample home** for the furnished six-room example, or **Reset demo scene** for the single-room scene.
3. Edit the design in **Floor Plan** or **3D Viewport**.
4. Choose **Render GI** for the combined image or **Compare Lighting** to render Direct, Indirect, and combined GI.
5. Open **Photon Analysis** to inspect the photon data associated with the latest completed render.
6. Use **File → Save JSON** to save a scene and **File → Open JSON…** to restore it.

## Features

### Scene editing

- Single-room Cornell-box-style demo with adjustable room dimensions, wall/floor/ceiling colors, and visibility. Ceilings are hidden by default so the interior remains visible from elevated render views.
- Multi-room plan with rectangular living room, bedroom, kitchen, bathroom, dining room, and hallway types.
- Click selection, object outliner, search, object visibility toggles, and context-sensitive properties.
- Move, rotate, and scale gizmos; duplicate, delete, undo, redo, grid snap, and floor snap.
- Three.js perspective viewport with orbit, pan, zoom, orthographic-like top/front/side viewpoints, and wireframe mode.
- 3D visualization of stored photons after a render.
- Keyboard walkthrough for multi-room homes.

### Furniture and library

Library entries are procedural meshes, composed from box, sphere, and cylinder primitives:

- **Seating:** Chair, Sofa, Armchair, Stool
- **Tables:** Dining table, Coffee table, Desk
- **Bedroom:** Bed, Wardrobe, Bedside
- **Living:** TV unit, Shelf, Floor lamp
- **Kitchen:** Counter, Fridge
- **Bathroom:** Bathtub, Washbasin
- **Decor:** Plant, Rug, Column
- **Basic:** Cube, Sphere, Cylinder
- **Architecture:** Door, Window

Furniture can be added from the library, dragged into the viewport, assigned to the active room, transformed, duplicated, deleted, and recolored. Object materials in the CPU renderer are diffuse/Lambertian color values.

### Lighting

- Add multiple point lights and area lights.
- Edit light position, color, power, enabled state, and (for area lights) emitting size.
- Area lights are sampled for direct illumination and emit cosine-distributed photons. Point lights emit photons in uniformly sampled directions.
- Lights can be selected, moved, duplicated, hidden in the viewport, or disabled for lighting.

## Interface guide

### Header

- **File:** New scene, load sample home, open/save JSON, export the current GI render as PNG, and reset the demo scene.
- **Edit:** Undo, redo, duplicate, delete.
- **Add:** Basic cube, sphere, cylinder, point light, or area light.
- **View:** Perspective, top, front, side, wireframe, and 3D photon visibility.
- **Tabs:** 3D Viewport, Floor Plan, Render View, Photon Analysis.
- **Walkthrough:** Enter keyboard-driven navigation in a multi-room house.
- **Render GI:** Render the combined direct-plus-indirect mode.
- **Compare Lighting:** Render Direct Only, Indirect Only, and Direct + Indirect.
- **Save / Load / Export PNG:** Convenient shortcuts for the File menu actions.

### Left panel

Contains Select, Move, Rotate, and Scale tools; duplicate/delete actions; grid snap and floor snap; point/area light buttons; and the furniture/architecture library.

### Right panel

- **Outliner:** Search rooms, objects, and lights; select items; toggle visibility; select a room and its children.
- **Properties:** Edit the selected room, object, architectural opening, or light.
- **Room:** For multi-room homes, toggle viewport walls/ceilings and edit wall thickness. For the single-room demo, edit dimensions, colors, and wall visibility.
- **Photon mapping:** Set render parameters and select Preview or Final presets.

### Render View

Shows three same-sized previews using a shared camera frame and exposure: Direct Only, Indirect Only (with the configured indirect gain), and Direct + Indirect.

## Multi-room floor-plan workflow

1. Select the **Floor Plan** tab. A new plan starts when you choose Draw Room or Add Room.
2. Choose a room type from the selector.
3. Select **Draw Room** and drag on the plan to define its rectangular footprint. With grid snap enabled, positions and dimensions snap to quarter-unit increments. Rooms must be at least 1 by 1 units and may not overlap.
4. Alternatively, use **Add Room** to add a 4-by-4 room beside the active room (or beyond the current plan).
5. In Select / Move / Resize mode, drag inside a room to move it; drag its lower-right orange handle to resize it.
6. Select a room in the plan or outliner to edit its name, position, width, depth, height, wall color, or floor color in Properties.
7. Use **Add Doorway** or **Add Window** to create an editable opening on the selected room. Select the resulting item to edit its room, wall, position, width, height, thickness, and colors. Doors have an Open option; windows have a glass tint.
8. Add furniture and lights while a room is active. Room-assigned objects appear beneath that room in the Outliner.
9. Use the Room panel to adjust wall thickness or show/hide walls and ceilings in the viewport.

Rooms sharing an edge receive a generated doorway around the shared-edge midpoint. The geometry builder creates room floors and wall segments, leaves openings in the wall geometry, and merges adjoining wall intervals. Explicit doors and windows also cut the corresponding wall; window panes transmit tinted light in the CPU renderer.

The sample home contains six rooms, furnished room-by-room, six lights, four doors, and three windows. Its layout is intended as an editable example, not a required render scene.

The viewport wall/ceiling visibility controls are for inspection. Multi-room ceilings are included in rendered geometry only when **Show ceilings** is enabled; the single-room ceiling visibility checkbox controls that surface directly. Keeping ceilings hidden is useful for interior renders from elevated or top-down views, where a ceiling would otherwise occlude the rooms.

## Objects, furniture, doors, and windows

- Standard objects have a transform, color, and visibility. Grouped furniture is made from local primitive parts; object transforms apply to the composite.
- Doors and windows are architectural opening objects attached to a selected room wall. Their openings are cut from the generated wall segments rather than covered by decorative models.
- Door properties include door-open state, frame color, door-leaf color, wall selection, and opening size.
- Window properties include frame color and glass tint. The pane uses partial transmission, so it can filter direct light and photon paths.
- The current renderer supports box, sphere, and cylinder primitives. Furniture groups are flattened into these primitives before tracing.

## Lighting and photon-mapping renderer

The renderer in `src/photon.js` is a CPU ray tracer with a two-pass photon-mapping pipeline; it is not a screenshot, visual overlay, or ordinary-shadow substitute.

### Scene preparation and geometry

- The active design is cloned before rendering. Hidden objects/lights are omitted from the render snapshot.
- Multi-room floors, ceilings, walls, door/window cuts, furniture, and lights are converted into the renderer's scene representation.
- Rays intersect room planes and transformed box, sphere, and cylinder geometry. Composite objects are expanded into their component primitives.
- Window panes have partial transmission and tint. Opaque objects and walls block visibility and photon paths.

### Photon tracing and shading

1. Enabled lights are chosen in proportion to power. Photon RGB flux is derived from the light color and total emitted power divided by the emitted photon count.
2. Area and point photons are sampled using their respective emission distributions and traced through the current scene for the configured bounce count.
3. At diffuse surfaces, Russian roulette based on mean albedo determines continuation, and surviving photon energy is updated by the surface color.
4. Hits after the first bounce are stored with position, flux, direction, and bounce depth. A k-d tree indexes photon positions.
5. Indirect radiance gathers nearby photons, filters them by direction and surface-plane distance, and normalizes their flux over the gather disk.
6. Direct illumination is evaluated separately, with deterministic area-light shadow samples and point-light visibility.
7. The renderer offers `direct`, `indirect`, and `gi` shading modes. Exposure and an ACES-style filmic curve plus gamma are applied consistently for display.

The indirect-gain control scales the computed indirect contribution for viewing; it does not add an artificial wall-color overlay. Changing a wall or object color changes the actual surface albedo used by photon transport and gathering.

### Rendering parameters

The Photon Mapping panel exposes:

- **Photons:** emitted photon count
- **Max bounces:** maximum photon path depth
- **kNN count:** maximum nearby photons considered for a gather
- **Radius:** maximum photon-gather radius
- **Exposure:** display exposure before tone mapping
- **Indirect gain:** display scaling for computed indirect radiance
- **Resolution:** square output image resolution
- **Preview / Final:** convenient parameter presets

The render validates/clamps key values before rendering. Rendering is performed on the main thread in chunks and can be cancelled. Photon tracing itself can temporarily block the UI.

The photon map is reused only when its scene/settings key matches. Geometry, room/wall state, opening geometry/materials, furniture transforms/materials, lights, photon count, or bounce count changes require a different map. Camera framing, exposure, indirect gain, gather radius/count, resolution, and selected display mode do not change the photon transport and can reuse a matching map.

## Photon Analysis

Photon Analysis is populated from the latest completed render. Editing the scene or renderer settings clears the old previews and analysis; changing the design during a render cancels it so stale results are not presented as current.

The analysis view includes:

- Render timestamp and summary of rooms, visible objects, and visible lights.
- Actual emitted, traced, stored, absorbed, and escaped photon counts.
- Stored photon RGB flux totals, traced path-segment counts, path sample stride, tracing time, k-d tree build time, and total render time.
- Stored-hit counts grouped by bounce depth.
- Per-mode linear/display luminance measurements, peak, and lit-pixel count.
- A top-down plot of sampled traced photon paths and stored photon positions, colored by bounce depth.
- A top-down, logarithmic density map binned from all stored photon positions.

The **3D photons** View menu action shows stored photon records from the latest completed render in the viewport. It is hidden or cleared when the current render is invalidated.

## Saving and loading

- **Save JSON** writes `photonstudio-scene.json` with `version: 3`, complete scene state, render parameters, and camera position/target.
- **Open JSON…** accepts PhotonStudio v3 JSON files and restores the scene, supported renderer parameters, and camera.
- **Export render PNG** exports the combined GI preview. Render first; this action does not export the viewport or the Direct/Indirect comparisons.
- Undo/redo history is in-memory for the current browser session.

Scene files from the first PhotonStudio version are not supported by the current loader.

## Keyboard controls

Shortcuts are ignored while typing in an input/select field.

| Key | Action |
| --- | --- |
| `Q` | Select |
| `W` | Move |
| `E` | Rotate |
| `R` | Scale |
| `Delete` | Delete selected item (or selected room when no object is selected) |
| `Ctrl+D` | Duplicate selected object or light |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| Arrow keys in Walkthrough | Move forward/back/left/right |
| Mouse in Walkthrough | Look around |
| Left mouse in viewport | Orbit / select |
| Right mouse in viewport | Pan |
| Mouse wheel | Zoom |

When grid snap is enabled, transform controls snap translation to 0.25 units, rotation to 15 degrees, and scale to 0.1 increments. Floor snap places selected non-light objects on the floor.

## Project structure and function reference

### Application files

- `index.html` — application layout, dark studio styling, panels, controls, and viewport/render/analysis canvases.
- `src/main.js` — application state and UI wiring; Three.js viewport; room-plan editor; furniture and light placement; properties/outliner; serialization; render orchestration; and photon analysis.
- `src/house.js` — room templates and procedural floors, ceilings, walls, shared-edge doorways, explicit door/window cuts, and adjoining wall merging.
- `src/photon.js` — renderer-independent geometry intersection, photon tracing, photon map, direct/indirect shading, and tone mapping.
- `tests/bleed.test.js` — k-d tree, primitive transforms, composite transforms, photon data, and computed color bleeding.
- `tests/house.test.js` — room geometry, room movement/resizing, door/window openings, transmission, save/load shape, and dynamic scene tests.
- `tests/render-modes.test.js` — mode exposure/framing and tone-mapping tests.
- `tests/render-smoke.mjs` — optional headless image-generation and rendered-pixel color-bleed check.

### `src/house.js` exported functions

- `sampleRooms()` — returns the six-room sample layout and its initial room colors.
- `createHouseRoom(type, id, x, z, w, d, height)` — creates a room record with type-based default colors and dimensions.
- `buildHouseGeometry(rooms, wallThickness, ceilingsVisible, openingObjects)` — generates floor/ceiling/wall primitive objects; cuts shared-edge, room-defined, and explicit architectural openings; and merges contiguous wall runs.

### `src/photon.js` exported functions and class

- `rngSeed(seed)` — creates a deterministic pseudo-random generator for repeatable tracing.
- `toneMap(rgb, exposure)` — applies exposure, filmic tone mapping, and gamma to linear RGB values.
- `luminance(rgb)` — computes Rec. 709-style weighted RGB luminance.
- `defaultScene()` — creates the single-room demo with colored walls, one area light, and sphere/box/cylinder objects.
- `sceneKey(scene, params)` — serializes transport-relevant scene state and photon settings for safe photon-map reuse.
- `prepScene(scene)` — prepares object rotation matrices used by ray intersections.
- `intersect(scene, origin, direction)` — returns the closest room/object ray hit.
- `buildMap(scene, params, seed)` — emits/traces photons, records paths and hit data, and builds the k-d tree.
- `indirect(map, point, normal, color, params)` — estimates indirect radiance from valid nearby photon records.
- `direct(scene, point, normal, color)` — computes direct contribution from point and area lights with visibility.
- `flatten(scene)` — expands composite object parts into renderer primitives.
- `shade(scene, map, params, origin, direction, mode)` — evaluates one ray in `direct`, `indirect`, or `gi` mode.
- `KDTree` — spatial index with `query(point, K, radiusSquared)` for nearest stored photons within a radius.

### Important `src/main.js` operations

These are application-internal functions (not a separate public package API):

- `makeOpeningObject()` / `normalizeOpening()` — create and keep door/window objects aligned to selected room walls and cut dimensions.
- `addItem()` / `addLight()` / `addArchitectureOpening()` — add library objects and lights to the active design.
- `buildRoom()` / `sync()` — regenerate Three.js room and object meshes from application state.
- `addRoom()` / `drawPlan()` / `updateHouseBounds()` — create and display floor-plan rooms and their layout.
- `sampleHouse()` — loads the furnished six-room sample and its lights/openings.
- `commit()` / `loadState()` / `undo()` / `redo()` — update scene history and restore application state.
- `toRender()` / `ensureMap()` — create the render snapshot and reuse or rebuild the photon map.
- `renderMode()` / `render()` — draw a selected mode and manage cancellation, progress, and stale-render prevention.
- `analysis()` / `drawPhotonViews()` / `photons()` — show latest-render statistics, path/density plots, and 3D photon points.
- `walkthrough()` — enter room-level keyboard navigation.

## Tests

Run `npm test` to execute the Node test files configured in `package.json`. The suite covers:

- k-d tree results against brute force.
- Ray intersection with primitive and transformed composite objects.
- Photon tracing, stored paths/hits, and changes in measured color bleeding when wall colors change.
- Direct, indirect, and combined render behavior and tone mapping.
- Multi-room floor/wall geometry, shared doorways, room move/resize, and v3 scene shape.
- Actual door/window wall cuts and tinted window transmission.
- Dynamic photon/render inputs when changing floor plans and adding objects.

Use `npm run build` to run the Vite production build. Use the optional headless smoke script for generated image outputs and pixel-level measurements; it is separate from `npm test`.

## Current limitations

- Rooms are axis-aligned rectangles; arbitrary polygon rooms and freehand wall drawing are not implemented.
- Room-to-room doorways are generated at shared-edge midpoints. There is no dedicated alignment tool.
- The hierarchy organizes rooms and room-assigned furniture/lights/openings. Generated wall/floor/ceiling sub-elements are not individually editable/selectable in the outliner.
- Only point and area lights are implemented. Spotlights and directional sunlight are not.
- The renderer uses diffuse/Lambertian surface colors and box, sphere, and cylinder primitives. Roughness controls, metal, emissive materials, textures, glossy/mirror transport, and model import are not implemented.
- Window panes use partial, color-filtering transmission; this is a simplified transmissive model, not a full refractive glass simulation.
- The renderer is CPU-based and runs in the browser's main thread. Image rendering yields in chunks and is cancellable; photon tracing can still cause a short pause.
- Walkthrough is keyboard movement plus mouse look, not collision-tested navigation.
- JSON import currently supports PhotonStudio version 3 scene files.
