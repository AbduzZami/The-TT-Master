# The TT Master

A table tennis course in the browser, from the basic rules to pro-level tricks. Every lesson plays the shot on a 3D table with two animated players.

**Open `index.html` in a browser** — it is a single self-contained page (three.js is loaded from cdnjs).

## What's inside

- **38 lessons in 7 levels:** Rules, Foundations, Spin, Serves, Receiving, Attack & Defence, Pro Tricks. Each has key points, a common mistake and a practice drill.
- **Real ball physics:** gravity, air drag, Magnus curve from spin, and a spin-dependent bounce with friction on a regulation table (2.74 × 1.525 m, net 15.25 cm). Every shot is solved so it lands where the lesson says.
- **Contact physics:** each racket's face angle, speed and direction at contact are solved backwards from the ball it must produce (tangential speed → spin, normal speed → pace).
- **Players:** a rigged 17-bone athlete whose whole body is driven by stroke-specific key poses (hips → shoulders → arm), with a shakehand grip that holds the racket rigidly in the hand.
- **Controls:** orbit/zoom, four camera views, 0.15× / 0.4× / 1× speed, timeline scrubbing, spin view (ring + label), and progress saved per browser.

## Project layout

```
index.html            built site (generated — do not edit by hand)
src/
  template.html       page markup, styles and the scene/UI script
  players.js          stroke motions, grip, kinetic chain, player posing
  sim.js              ball physics and landing solver
  build.js            turns lesson shot specs into timed ball tracks
  lessons.base.js     lessons for levels 1–5 (original set)
  more.js             new lessons, levels, ordering and drills
  gen.js              merges the above into lessons.js
  lessons.js          generated curriculum
  precompute.js       solves serves and launch velocities → solved.json
  validate.js         checks every shot lands legally
  assemble.py         bundles everything into ../index.html
model/
  rig.py              rigs and colours the athlete → athlete.json
  athlete.json        packed skinned mesh used by the page
  source/human_body.glb  original model (CC BY 4.0, see credits)
```

## Build

```bash
cd src
node gen.js           # lessons.base.js + more.js -> lessons.js
node precompute.js    # -> solved.json (takes a minute or two)
node validate.js      # expect: problems 0
python3 assemble.py   # -> ../index.html
```

Re-rig the player only if you change `model/rig.py` (needs NumPy): `python3 model/rig.py`.

## Credits

Player model: [“HUMAN_BODY”](https://sketchfab.com/3d-models/human-body-f022e4a3641943328b2fbfdf0f7c3e1e) by vistaalienprime, licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Rigged and recoloured for this project.
