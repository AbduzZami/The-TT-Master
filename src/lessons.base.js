// Curriculum. Near player stands at x < 0, opponent at x > 0. +z is the near player's right.
const C = { you: '#ff8a1f', opp: '#4fd1ff', alt: '#c6f36b', ghost: '#ff5c8a' };
const LEVELS = [
  { id: 1, name: 'Rules', tag: 'Know the game' },
  { id: 2, name: 'Strokes', tag: 'Build the base' },
  { id: 3, name: 'Spin', tag: 'Make the ball talk' },
  { id: 4, name: 'Receiving', tag: 'Read and return' },
  { id: 5, name: 'Weapons', tag: 'The deadliest moves' },
];

const LESSONS = [
  {
    id: 'table', level: 1, title: 'The table and the ball', view: 'side',
    labels: [{ p: [0, 0.8, 0.82], t: '2.74 m' }, { p: [1.42, 0.8, 0], t: '1.525 m' }, { p: [0, 0.97, -0.95], t: 'Net 15.25 cm' }, { p: [-1.37, 0.4, 0.78], t: 'Top 76 cm high' }],
    lede: 'Everything in table tennis happens inside a very small space. Learn its size before you learn to hit.',
    points: [
      ['Table', '2.74 m long, 1.525 m wide, with the top 76 cm above the floor.'],
      ['Net', '15.25 cm high, and it hangs 15.25 cm past each side of the table.'],
      ['Ball', '40 mm across and 2.7 g. Plastic, white or orange.'],
      ['Lines', 'White edge lines mark the playing surface. The thin centre line only matters in doubles.'],
    ],
    mistake: 'Treating the side of the table as playing surface. Only the top and its top edges count.',
    shots: [
      { label: 'You', color: C.you, from: [-1.75, 0.98, 0.25], spin: { top: 900 }, bounce: [0.85, -0.2], T: 0.46 },
      { label: 'Opponent', color: C.opp, after: 0, at: 1.75, spin: { top: 900 }, bounce: [-0.9, 0.3], T: 0.46 },
      { label: 'You', color: C.you, after: 1, at: -1.75, spin: { top: 900 }, bounce: [0.8, 0.1], T: 0.46 },
    ],
  },
  {
    id: 'serve', level: 1, title: 'The legal serve', view: 'broadcast',
    labels: [{ p: [-1.48, 1.12, 0.2], t: 'Toss ≥ 16 cm' }, { p: [-1.37, 0.78, -0.6], t: 'End line' }],
    lede: 'Every point starts with a serve, and the serve has the strictest rules in the sport.',
    points: [
      ['Open palm', 'The ball rests still on your flat, open free hand, above the table and behind the end line.'],
      ['Toss 16 cm', 'Project it near-vertically upward at least 16 cm. No spin from the hand.'],
      ['Strike on the way down', 'Hit it as it falls, still behind the end line.'],
      ['Two bounces', 'It must bounce once on your half, then clear the net and bounce on your opponent\'s half.'],
      ['Stay visible', 'Your body and free arm must never hide the ball from the receiver.'],
    ],
    mistake: 'Tossing the ball forward or barely tossing it at all. Umpires call this a fault first.',
    shots: [
      { label: 'Serve', color: C.you, toss: true, from: [-1.48, 0.95, 0.2], spin: { top: -300 }, bounce: [-0.75, 0.2], bounce2: [0.85, -0.1] },
    ],
  },
  {
    id: 'scoring', level: 1, title: 'Scoring a game', view: 'broadcast', scoreboard: true,
    lede: 'Games are short and fast. Know exactly who serves next and when the game is over.',
    points: [
      ['First to 11', 'A game is won by the first player to 11 points.'],
      ['Win by two', 'At 10–10 (deuce) play continues until someone leads by 2.'],
      ['Two serves each', 'Service changes every 2 points. From 10–10 it changes after every point.'],
      ['Matches', 'Matches are best of 5 or best of 7 games. Players change ends after each game.'],
    ],
    mistake: 'Forgetting the serve switch at deuce. Use the scoreboard to practise calling it.',
    shots: [
      { label: 'Serve', color: C.you, toss: true, from: [-1.48, 0.95, -0.25], spin: { top: -500 }, bounce: [-0.8, -0.25], bounce2: [0.75, -0.3] },
      { label: 'Return', color: C.opp, after: 0, at: 1.5, spin: { top: -600 }, bounce: [-0.7, 0.25], T: 0.5 },
      { label: 'Attack', color: C.you, after: 1, at: -1.25, spin: { top: 2500 }, bounce: [0.95, 0.5], T: 0.32 },
    ],
  },
  {
    id: 'doubles', level: 1, title: 'Doubles serving', view: 'top',
    labels: [{ p: [-0.7, 0.78, 0.38], t: 'Server\'s right half' }, { p: [0.7, 0.78, -0.38], t: 'Receiver\'s right half' }, { p: [-0.05, 0.78, 0.05], t: 'Centre line' }],
    lede: 'Doubles adds one line and one rule for the serve: it must cross the table diagonally.',
    points: [
      ['Right to right', 'Serve from your right half court to the receiver\'s right half court.'],
      ['Centre line', 'A ball landing on the centre line counts as good.'],
      ['Alternate hits', 'Partners must strike the ball in turn during the rally.'],
      ['Rotation', 'After every 2 points, the receiver becomes the next server.'],
    ],
    mistake: 'Serving straight down the line. In doubles that loses the point.',
    shots: [
      { label: 'Serve', color: C.you, toss: true, from: [-1.48, 0.95, 0.42], spin: { top: -400 }, bounce: [-0.75, 0.35], bounce2: [0.85, -0.4] },
    ],
  },
  {
    id: 'lets', level: 1, title: 'Lets, nets and edges', view: 'side', netCall: 'Net touch on the serve: let, replay the point',
    lede: 'Some contacts replay the point, some win it, some lose it. Learn which is which.',
    points: [
      ['Let serve', 'A serve that clips the net and then lands legally is replayed. No point.'],
      ['Net in rally', 'In a rally, a ball that touches the net and lands over is good. Play on.'],
      ['Edge ball', 'Hitting the top edge of the table is good. Hitting the side is out.'],
      ['Free hand', 'Touching the table with your free hand, or moving it, loses the point.'],
    ],
    mistake: 'Stopping the rally when the ball touches the net. Only on the serve is it a let.',
    shots: [
      { label: 'Let serve', color: C.you, toss: true, from: [-1.48, 0.9, 0.1], spin: { top: 0 }, bounce: [-0.55, 0.1], T: 0.18 },
    ],
  },
  {
    id: 'forehand', level: 2, title: 'Forehand drive', view: 'broadcast',
    lede: 'The forehand drive is your first attacking stroke: a forward swing with a little brush for control.',
    points: [
      ['Grip', 'Shakehand: a relaxed handshake, index finger along the back of the blade, thumb on the front.'],
      ['Stance', 'Feet wider than shoulders, right foot slightly back (right-handers), knees bent.'],
      ['Swing', 'Rotate the waist, swing from below the ball to forehead height. Finish in front of your face.'],
      ['Contact', 'Hit at the top of the bounce with a slightly closed racket. About 1,500 rpm of topspin.'],
    ],
    mistake: 'Swinging with only the arm. Power comes from turning the waist and shifting weight.',
    shots: [
      { label: 'Feed', color: C.opp, from: [1.75, 0.95, -0.2], spin: { top: 800 }, bounce: [-0.85, 0.35], T: 0.48 },
      { label: 'Forehand', color: C.you, after: 0, at: -1.6, spin: { top: 1500 }, bounce: [0.95, -0.3], T: 0.36, stroke: 'fh' },
    ],
  },
  {
    id: 'push', level: 2, title: 'Backhand push', view: 'side',
    lede: 'The push is a short, safe stroke that returns backspin with backspin and keeps the ball low.',
    points: [
      ['Open face', 'Tilt the racket face up, about 45 degrees.'],
      ['Under the ball', 'Brush underneath the ball, moving forward and slightly down.'],
      ['Close to the table', 'Step in with the right foot under the table and hit early, before the peak.'],
      ['Low and long', 'Aim to keep the ball under 15 cm above the net.'],
    ],
    mistake: 'Lifting the ball high. A high push is an easy kill for your opponent.',
    shots: [
      { label: 'Backspin', color: C.opp, from: [1.5, 0.88, 0.1], spin: { top: -1200 }, bounce: [-0.55, -0.15], T: 0.62 },
      { label: 'Push', color: C.you, after: 0, at: -1.45, spin: { top: -1300 }, bounce: [0.85, -0.3], T: 0.6, stroke: 'bh' },
    ],
  },
  {
    id: 'loop', level: 3, title: 'Topspin loop', view: 'side',
    lede: 'The loop is modern table tennis. Heavy topspin makes the ball dip onto the table and jump forward.',
    points: [
      ['Low to high', 'Start the racket below the ball and brush up and forward, fast.'],
      ['Thin contact', 'Graze the back-top of the ball instead of hitting through it.'],
      ['Magnus effect', 'Topspin pushes the ball down in flight, so you can swing hard and still land it.'],
      ['The kick', 'After the bounce, topspin grips the table and throws the ball forward and low.'],
    ],
    mistake: 'Hitting flat and hard. Without brush, the ball flies long.',
    shots: [
      { label: 'Push', color: C.opp, from: [1.45, 0.88, -0.2], spin: { top: -1000 }, bounce: [-0.95, 0.3], T: 0.65 },
      { label: 'Loop', color: C.you, after: 0, at: -1.8, atPeak: true, spin: { top: 3800 }, bounce: [1.05, 0.1], T: 0.34, stroke: 'fh' },
    ],
  },
  {
    id: 'bounce', level: 3, title: 'How spin changes the bounce', view: 'side', compare: true, sameLaunch: true,
    lede: 'Three balls leave the racket at the same speed and angle. Only the spin is different.',
    points: [
      ['Topspin', 'Dips early, lands shorter, then shoots forward off the table.'],
      ['No spin', 'Flies a plain curve and bounces at a natural angle.'],
      ['Backspin', 'Floats and carries longer, then loses speed at the bounce.'],
      ['Read it early', 'Bounce angle is your last clue. The racket path is your first.'],
    ],
    mistake: 'Judging spin only by speed. A slow ball can carry the heaviest spin.',
    shots: [
      { label: 'Topspin 1500 rpm', color: C.you, from: [-1.7, 0.95, -0.35], spin: { top: 1500 }, bounce: [0.6, -0.35], T: 0.5 },
      { label: 'No spin', color: C.alt, from: [-1.7, 0.95, 0], spin: { top: 0 }, bounce: [0.7, 0], T: 0.52 },
      { label: 'Backspin 1500 rpm', color: C.opp, from: [-1.7, 0.95, 0.35], spin: { top: -1500 }, bounce: [0.6, 0.35], T: 0.5 },
    ],
  },
  {
    id: 'pendulum', level: 3, title: 'Pendulum serve', view: 'top',
    lede: 'The most common serve at every level. The racket swings like a pendulum and brushes the side of the ball.',
    points: [
      ['Side-on stance', 'Stand at your backhand corner, body facing the side of the table.'],
      ['Swing across', 'Swing the racket from right to left across your body, wrist loose.'],
      ['Side and under', 'Brush the back-bottom-right of the ball for sidespin with backspin.'],
      ['Curve', 'The ball bends in the air and kicks sideways off the opponent\'s racket.'],
    ],
    mistake: 'Hitting the ball instead of brushing it. Contact should be thin and fast.',
    shots: [
      { label: 'Pendulum', color: C.you, toss: true, from: [-1.48, 0.95, -0.45], spin: { top: -1200, side: -3000 }, bounce: [-0.8, -0.4], bounce2: [0.65, 0.05] },
    ],
  },
  {
    id: 'disguise', level: 3, title: 'Heavy or empty?', view: 'broadcast', compare: true,
    lede: 'Two serves with the same motion. One carries heavy backspin, one carries almost none.',
    points: [
      ['The trick', 'The server hits near the racket handle for no spin, near the tip for heavy spin.'],
      ['Watch contact', 'A fast brush at the moment of contact means spin. A tap means little.'],
      ['Watch the bounce', 'The heavy ball slows and sits. The empty ball skids through.'],
      ['Receive safely', 'Unsure? Push with a slightly open racket and aim deep.'],
    ],
    mistake: 'Reading the follow-through. Servers exaggerate it on purpose to fool you.',
    shots: [
      { label: 'Heavy 3500 rpm', color: C.opp, toss: true, from: [-1.48, 0.95, -0.2], spin: { top: -3500 }, bounce: [-0.85, -0.2], bounce2: [0.45, -0.2] },
      { label: 'No-spin', color: C.alt, toss: true, from: [-1.48, 0.95, 0.2], spin: { top: -150 }, bounce: [-0.85, 0.2], bounce2: [0.45, 0.2] },
    ],
  },
  {
    id: 'receive-back', level: 4, title: 'Receiving backspin', view: 'receiver',
    lede: 'Backspin wants to pull your return into the net. Open your racket and lift it just enough.',
    points: [
      ['Open the face', 'The heavier the backspin, the more you tilt the face upward.'],
      ['Move in', 'Step in so contact happens over the table, early.'],
      ['Push or loop', 'Push it back low, or loop it with a strong upward brush.'],
      ['Go deep', 'A long push to the corner gives your opponent the least time.'],
    ],
    mistake: 'Using a closed racket. The ball drops straight into the net.',
    shots: [
      { label: 'Backspin serve', color: C.opp, toss: true, from: [1.48, 0.95, 0.2], spin: { top: -2400 }, bounce: [0.8, 0.2], bounce2: [-0.8, 0.3] },
      { label: 'Long push', color: C.you, after: 0, at: -1.35, spin: { top: -1600 }, bounce: [1.05, 0.55], T: 0.55, stroke: 'bh' },
    ],
  },
  {
    id: 'block', level: 4, title: 'Blocking topspin', view: 'side',
    lede: 'Against a loop you do not need power. Close your racket and let the ball\'s speed do the work.',
    points: [
      ['Close the face', 'Tilt the racket forward. Heavy topspin needs more closing.'],
      ['Short stroke', 'Barely move the racket. Absorb, then push slightly forward.'],
      ['Early contact', 'Take the ball just after the bounce, before topspin lifts it.'],
      ['Place it', 'Redirect wide or into the elbow. Placement wins the block.'],
    ],
    mistake: 'Swinging at a loop. The spin sends the ball off the end of the table.',
    shots: [
      { label: 'Loop', color: C.opp, from: [1.9, 0.82, 0.3], spin: { top: 3500 }, bounce: [-0.85, -0.1], T: 0.5 },
      { label: 'Block', color: C.you, after: 0, at: -1.45, spin: { top: 900 }, bounce: [0.95, 0.55], T: 0.45, stroke: 'bh', swing: 'block' },
    ],
  },
  {
    id: 'receive-side', level: 4, title: 'Receiving sidespin', view: 'receiver',
    lede: 'Sidespin throws your return sideways. Aim to the side it pushes toward and the ball comes back to the table.',
    points: [
      ['Find the direction', 'Watch which way the server\'s racket travels across the ball.'],
      ['Aim against it', 'If the ball will kick left off your racket, aim to the right.'],
      ['Angle the racket', 'Turn the racket face slightly so it meets the spin head on.'],
      ['Or flip it', 'Play over the top with topspin. Your own spin overrides theirs.'],
    ],
    mistake: 'Aiming down the middle. The return sprays off the side of the table.',
    shots: [
      { label: 'Side serve', color: C.opp, toss: true, from: [1.48, 0.95, 0.45], spin: { top: -800, side: 3000 }, bounce: [0.8, 0.4], bounce2: [-0.75, 0.15] },
      { label: 'Return', color: C.you, after: 0, at: -1.35, spin: { top: -900, side: -800 }, bounce: [0.95, -0.4], T: 0.5, stroke: 'fh' },
    ],
  },
  {
    id: 'flick', level: 5, title: 'Banana flick', view: 'receiver',
    lede: 'A backhand attack played over the table against a short serve. The ball curves like a banana.',
    points: [
      ['Over the table', 'Step in deep with your right foot and bring the racket over the bounce.'],
      ['Wrist cocked', 'Point the racket tip down toward the floor, elbow high.'],
      ['Uncoil', 'Snap the wrist forward and around the side of the ball.'],
      ['Spin mix', 'Topspin plus sidespin. It beats the backspin serve and curves away.'],
    ],
    mistake: 'Starting the flick too late. Contact must be at the top of the bounce.',
    shots: [
      { label: 'Short serve', color: C.opp, toss: true, from: [1.48, 0.95, -0.1], spin: { top: -1800 }, bounce: [0.85, -0.1], bounce2: [-0.35, -0.1] },
      { label: 'Banana flick', color: C.you, after: 0, at: -0.6, atPeak: true, spin: { top: 2800, side: -1800 }, bounce: [0.85, 0.5], T: 0.36, stroke: 'bh', swing: 'flick' },
    ],
  },
  {
    id: 'ghost', level: 5, title: 'Ghost serve', view: 'side',
    labels: [{ p: [0.5, 0.82, 0.35], t: 'Second bounce' }],
    lede: 'Backspin so heavy the ball bounces on the far side and rolls back toward the net.',
    points: [
      ['Maximum brush', 'Graze only the bottom of the ball with a very open racket.'],
      ['Low speed', 'Hit softly. Speed fights spin, so keep forward speed tiny.'],
      ['Short and low', 'Land the second bounce just past the net.'],
      ['Why it kills', 'Receivers reach for a ball that is moving away from them.'],
    ],
    mistake: 'Adding speed to look aggressive. The spin effect disappears.',
    shots: [
      { label: 'Ghost serve 6000 rpm', ghost: true, mu: 0.6, color: C.ghost, toss: true, from: [-1.45, 0.95, 0], spin: { top: -6000 }, bounce: [-0.9, 0], bounce2: [0.25, 0], maxT: 3 },
    ],
  },
  {
    id: 'reverse', level: 5, title: 'Reverse pendulum', view: 'top', compare: true,
    lede: 'The mirror of the pendulum serve. Same stance, opposite spin, and the curve breaks the other way.',
    points: [
      ['Same setup', 'Start exactly like a normal pendulum so the receiver cannot tell.'],
      ['Reverse swing', 'Swing from left to right, brushing the back-left of the ball.'],
      ['Elbow up', 'Lift the elbow so the racket can travel outward.'],
      ['Pair them', 'Use both serves with the same toss. The receiver must guess.'],
    ],
    mistake: 'Changing the stance for the reverse. A good receiver reads that before the toss.',
    shots: [
      { label: 'Pendulum', color: C.you, toss: true, from: [-1.48, 0.95, -0.35], spin: { top: -1000, side: -3200 }, bounce: [-0.8, -0.35], bounce2: [0.6, -0.15] },
      { label: 'Reverse', color: C.ghost, toss: true, from: [-1.48, 0.95, -0.35], spin: { top: -1000, side: 3200 }, bounce: [-0.8, -0.35], bounce2: [0.6, -0.15] },
    ],
  },
  {
    id: 'counterloop', level: 5, title: 'Counter-loop', view: 'side',
    lede: 'Looping a loop. You take the opponent\'s topspin and send back even more of your own.',
    points: [
      ['Back off', 'Move 1 to 2 metres behind the table to buy time.'],
      ['Over the top', 'Close the racket and brush up and over the ball.'],
      ['Full body', 'Legs, hips and shoulders drive the swing. The arm just follows.'],
      ['Rhythm', 'Hit as the ball falls. Their spin adds to yours.'],
    ],
    mistake: 'Opening the racket. Their topspin plus yours sends it into the ceiling.',
    shots: [
      { label: 'Opponent loop', color: C.opp, from: [1.9, 0.85, -0.3], spin: { top: 3500 }, bounce: [-0.9, 0.25], T: 0.5 },
      { label: 'Counter-loop', color: C.you, after: 0, at: -2.4, spin: { top: 4200 }, bounce: [1.0, -0.45], T: 0.5, stroke: 'fh', swing: 'counter' },
    ],
  },
  {
    id: 'chop', level: 5, title: 'Defensive chop', view: 'side',
    lede: 'The defender\'s weapon. Stand far back and slice heavy backspin under the attacker\'s loop.',
    points: [
      ['Distance', 'Stay 2 to 3 metres back so you can see the ball fully.'],
      ['High to low', 'Start the racket at shoulder height and cut down through the ball.'],
      ['Late contact', 'Let the ball fall to waist height before you chop.'],
      ['Vary it', 'Mix heavy chops with no-spin chops. The attacker loops one into the net.'],
    ],
    mistake: 'Chopping too early. The ball is still rising with topspin and pops up high.',
    shots: [
      { label: 'Attacker loop', color: C.opp, from: [1.9, 0.85, 0.2], spin: { top: 3500 }, bounce: [-0.95, 0.1], T: 0.5 },
      { label: 'Chop', color: C.you, after: 0, at: -2.9, spin: { top: -3500 }, bounce: [0.95, -0.2], T: 0.95, stroke: 'fh' },
    ],
  },
];
if (typeof module !== 'undefined') module.exports = { LESSONS, LEVELS };
