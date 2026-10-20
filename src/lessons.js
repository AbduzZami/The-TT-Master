const LEVELS = [
 {
  "id": 1,
  "name": "Rules",
  "tag": "Know the game",
  "diff": "Beginner"
 },
 {
  "id": 2,
  "name": "Foundations",
  "tag": "Core strokes",
  "diff": "Beginner"
 },
 {
  "id": 3,
  "name": "Spin",
  "tag": "Make the ball talk",
  "diff": "Intermediate"
 },
 {
  "id": 4,
  "name": "Serves",
  "tag": "Start every point",
  "diff": "Intermediate"
 },
 {
  "id": 5,
  "name": "Receiving",
  "tag": "Read and return",
  "diff": "Advanced"
 },
 {
  "id": 6,
  "name": "Attack & Defence",
  "tag": "Win the rally",
  "diff": "Advanced"
 },
 {
  "id": 7,
  "name": "Pro Tricks",
  "tag": "The deadliest moves",
  "diff": "Expert"
 }
];
const LESSONS = [
 {
  "id": "table",
  "level": 1,
  "title": "The table and the ball",
  "view": "side",
  "labels": [
   {
    "p": [
     0,
     0.8,
     0.82
    ],
    "t": "2.74 m"
   },
   {
    "p": [
     1.42,
     0.8,
     0
    ],
    "t": "1.525 m"
   },
   {
    "p": [
     0,
     0.97,
     -0.95
    ],
    "t": "Net 15.25 cm"
   },
   {
    "p": [
     -1.37,
     0.4,
     0.78
    ],
    "t": "Top 76 cm high"
   }
  ],
  "lede": "Everything in table tennis happens inside a very small space. Learn its size before you learn to hit.",
  "points": [
   [
    "Table",
    "2.74 m long, 1.525 m wide, with the top 76 cm above the floor."
   ],
   [
    "Net",
    "15.25 cm high, and it hangs 15.25 cm past each side of the table."
   ],
   [
    "Ball",
    "40 mm across and 2.7 g. Plastic, white or orange."
   ],
   [
    "Lines",
    "White edge lines mark the playing surface. The thin centre line only matters in doubles."
   ]
  ],
  "mistake": "Treating the side of the table as playing surface. Only the top and its top edges count.",
  "shots": [
   {
    "label": "You",
    "color": "#ff8a1f",
    "from": [
     -1.75,
     0.98,
     0.25
    ],
    "spin": {
     "top": 900
    },
    "bounce": [
     0.85,
     -0.2
    ],
    "T": 0.46
   },
   {
    "label": "Opponent",
    "color": "#4fd1ff",
    "after": 0,
    "at": 1.75,
    "spin": {
     "top": 900
    },
    "bounce": [
     -0.9,
     0.3
    ],
    "T": 0.46
   },
   {
    "label": "You",
    "color": "#ff8a1f",
    "after": 1,
    "at": -1.75,
    "spin": {
     "top": 900
    },
    "bounce": [
     0.8,
     0.1
    ],
    "T": 0.46
   }
  ],
  "drill": "Walk around a table and touch each edge line. Then rally 50 gentle forehands into the middle of the table."
 },
 {
  "id": "serve",
  "level": 1,
  "title": "The legal serve",
  "view": "broadcast",
  "labels": [
   {
    "p": [
     -1.48,
     1.12,
     0.2
    ],
    "t": "Toss ≥ 16 cm"
   },
   {
    "p": [
     -1.37,
     0.78,
     -0.6
    ],
    "t": "End line"
   }
  ],
  "lede": "Every point starts with a serve, and the serve has the strictest rules in the sport.",
  "points": [
   [
    "Open palm",
    "The ball rests still on your flat, open free hand, above the table and behind the end line."
   ],
   [
    "Toss 16 cm",
    "Project it near-vertically upward at least 16 cm. No spin from the hand."
   ],
   [
    "Strike on the way down",
    "Hit it as it falls, still behind the end line."
   ],
   [
    "Two bounces",
    "It must bounce once on your half, then clear the net and bounce on your opponent's half."
   ],
   [
    "Stay visible",
    "Your body and free arm must never hide the ball from the receiver."
   ]
  ],
  "mistake": "Tossing the ball forward or barely tossing it at all. Umpires call this a fault first.",
  "shots": [
   {
    "label": "Serve",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     0.2
    ],
    "spin": {
     "top": -300
    },
    "bounce": [
     -0.75,
     0.2
    ],
    "bounce2": [
     0.85,
     -0.1
    ]
   }
  ],
  "drill": "Serve 20 balls, checking each toss rises above eye level of the racket. Ask a friend to call any toss under 16 cm."
 },
 {
  "id": "scoring",
  "level": 1,
  "title": "Scoring a game",
  "view": "broadcast",
  "scoreboard": true,
  "lede": "Games are short and fast. Know exactly who serves next and when the game is over.",
  "points": [
   [
    "First to 11",
    "A game is won by the first player to 11 points."
   ],
   [
    "Win by two",
    "At 10–10 (deuce) play continues until someone leads by 2."
   ],
   [
    "Two serves each",
    "Service changes every 2 points. From 10–10 it changes after every point."
   ],
   [
    "Matches",
    "Matches are best of 5 or best of 7 games. Players change ends after each game."
   ]
  ],
  "mistake": "Forgetting the serve switch at deuce. Use the scoreboard to practise calling it.",
  "shots": [
   {
    "label": "Serve",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     -0.25
    ],
    "spin": {
     "top": -500
    },
    "bounce": [
     -0.8,
     -0.25
    ],
    "bounce2": [
     0.75,
     -0.3
    ]
   },
   {
    "label": "Return",
    "color": "#4fd1ff",
    "after": 0,
    "at": 1.5,
    "spin": {
     "top": -600
    },
    "bounce": [
     -0.7,
     0.25
    ],
    "T": 0.5
   },
   {
    "label": "Attack",
    "color": "#ff8a1f",
    "after": 1,
    "at": -1.25,
    "spin": {
     "top": 2500
    },
    "bounce": [
     0.95,
     0.5
    ],
    "T": 0.32
   }
  ],
  "drill": "Play three games to 11 out loud, calling the score and the server before every point."
 },
 {
  "id": "doubles",
  "level": 1,
  "title": "Doubles serving",
  "view": "top",
  "labels": [
   {
    "p": [
     -0.7,
     0.78,
     0.38
    ],
    "t": "Server's right half"
   },
   {
    "p": [
     0.7,
     0.78,
     -0.38
    ],
    "t": "Receiver's right half"
   },
   {
    "p": [
     -0.05,
     0.78,
     0.05
    ],
    "t": "Centre line"
   }
  ],
  "lede": "Doubles adds one line and one rule for the serve: it must cross the table diagonally.",
  "points": [
   [
    "Right to right",
    "Serve from your right half court to the receiver's right half court."
   ],
   [
    "Centre line",
    "A ball landing on the centre line counts as good."
   ],
   [
    "Alternate hits",
    "Partners must strike the ball in turn during the rally."
   ],
   [
    "Rotation",
    "After every 2 points, the receiver becomes the next server."
   ]
  ],
  "mistake": "Serving straight down the line. In doubles that loses the point.",
  "shots": [
   {
    "label": "Serve",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     0.42
    ],
    "spin": {
     "top": -400
    },
    "bounce": [
     -0.75,
     0.35
    ],
    "bounce2": [
     0.85,
     -0.4
    ]
   }
  ],
  "drill": "With a partner, serve 10 balls each from your right half to the receiver's right half. Count how many land legally."
 },
 {
  "id": "lets",
  "level": 1,
  "title": "Lets, nets and edges",
  "view": "side",
  "netCall": "Net touch on the serve: let, replay the point",
  "lede": "Some contacts replay the point, some win it, some lose it. Learn which is which.",
  "points": [
   [
    "Let serve",
    "A serve that clips the net and then lands legally is replayed. No point."
   ],
   [
    "Net in rally",
    "In a rally, a ball that touches the net and lands over is good. Play on."
   ],
   [
    "Edge ball",
    "Hitting the top edge of the table is good. Hitting the side is out."
   ],
   [
    "Free hand",
    "Touching the table with your free hand, or moving it, loses the point."
   ]
  ],
  "mistake": "Stopping the rally when the ball touches the net. Only on the serve is it a let.",
  "shots": [
   {
    "label": "Let serve",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.48,
     0.9,
     0.1
    ],
    "spin": {
     "top": 0
    },
    "bounce": [
     -0.55,
     0.1
    ],
    "T": 0.18
   }
  ],
  "drill": "Drop-test edge balls: slide a ball off the top edge and off the side, and call each one in or out."
 },
 {
  "id": "forehand",
  "level": 2,
  "title": "Forehand drive",
  "view": "broadcast",
  "lede": "The forehand drive is your first attacking stroke: a forward swing with a little brush for control.",
  "points": [
   [
    "Grip",
    "Shakehand: a relaxed handshake, index finger along the back of the blade, thumb on the front."
   ],
   [
    "Stance",
    "Feet wider than shoulders, right foot slightly back (right-handers), knees bent."
   ],
   [
    "Swing",
    "Rotate the waist, swing from below the ball to forehead height. Finish in front of your face."
   ],
   [
    "Contact",
    "Hit at the top of the bounce with a slightly closed racket. About 1,500 rpm of topspin."
   ]
  ],
  "mistake": "Swinging with only the arm. Power comes from turning the waist and shifting weight.",
  "shots": [
   {
    "label": "Feed",
    "color": "#4fd1ff",
    "from": [
     1.75,
     0.95,
     -0.2
    ],
    "spin": {
     "top": 800
    },
    "bounce": [
     -0.85,
     0.35
    ],
    "T": 0.48
   },
   {
    "label": "Forehand",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.6,
    "spin": {
     "top": 1500
    },
    "bounce": [
     0.95,
     -0.3
    ],
    "T": 0.36,
    "stroke": "fh"
   }
  ],
  "drill": "Partner feeds forehand-to-forehand. Hit 100 drives in a row without a miss, aiming for a 30 cm square."
 },
 {
  "id": "bhdrive",
  "title": "Backhand drive",
  "view": "broadcast",
  "lede": "The backhand drive is a compact punch in front of your body. It keeps the rally going from your backhand corner.",
  "points": [
   [
    "Square stance",
    "Face the table with feet parallel, elbow slightly in front of the body."
   ],
   [
    "Short backswing",
    "Bring the racket back toward your belly, tip pointing to the left."
   ],
   [
    "Forearm and wrist",
    "Push forward and slightly up from the elbow. The upper arm barely moves."
   ],
   [
    "Contact in front",
    "Hit at the top of the bounce, about 30 cm in front of your stomach."
   ]
  ],
  "mistake": "Hitting beside the body. The ball needs to be in front so the forearm can extend.",
  "shots": [
   {
    "label": "Feed",
    "color": "#4fd1ff",
    "from": [
     1.75,
     0.95,
     0.35
    ],
    "spin": {
     "top": 800
    },
    "bounce": [
     -0.85,
     -0.3
    ],
    "T": 0.5
   },
   {
    "label": "Backhand",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.55,
    "spin": {
     "top": 1300
    },
    "bounce": [
     0.95,
     0.4
    ],
    "T": 0.4,
    "stroke": "bh",
    "swing": "drive"
   }
  ],
  "level": 2,
  "drill": "Backhand-to-backhand rally for 3 minutes. Keep the elbow in front of the body and count consecutive hits."
 },
 {
  "id": "push",
  "level": 2,
  "title": "Backhand push",
  "view": "side",
  "lede": "The push is a short, safe stroke that returns backspin with backspin and keeps the ball low.",
  "points": [
   [
    "Open face",
    "Tilt the racket face up, about 45 degrees."
   ],
   [
    "Under the ball",
    "Brush underneath the ball, moving forward and slightly down."
   ],
   [
    "Close to the table",
    "Step in with the right foot under the table and hit early, before the peak."
   ],
   [
    "Low and long",
    "Aim to keep the ball under 15 cm above the net."
   ]
  ],
  "mistake": "Lifting the ball high. A high push is an easy kill for your opponent.",
  "shots": [
   {
    "label": "Backspin",
    "color": "#4fd1ff",
    "from": [
     1.5,
     0.88,
     0.1
    ],
    "spin": {
     "top": -1200
    },
    "bounce": [
     -0.55,
     -0.15
    ],
    "T": 0.62
   },
   {
    "label": "Push",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.45,
    "spin": {
     "top": -1300
    },
    "bounce": [
     0.85,
     -0.3
    ],
    "T": 0.6,
    "stroke": "bh"
   }
  ],
  "drill": "Push-to-push rally from backhand corner to backhand corner. Keep every ball below a racket's height over the net."
 },
 {
  "id": "smash",
  "title": "The smash",
  "view": "broadcast",
  "lede": "A high ball is a gift. The smash hits through it flat and fast to end the point.",
  "points": [
   [
    "Wait for height",
    "Let the ball rise. Hit at the peak or as it starts to fall."
   ],
   [
    "Turn sideways",
    "Rotate your shoulders back with the racket high, above the ball."
   ],
   [
    "Hit through",
    "Swing forward and down through the back of the ball with little brush."
   ],
   [
    "Place it",
    "Aim for a corner or the opponent's elbow. Speed alone rarely wins."
   ]
  ],
  "mistake": "Hitting the ball on the way up. It is still rising and flies off the end.",
  "shots": [
   {
    "label": "Lob",
    "color": "#4fd1ff",
    "from": [
     3,
     0.9,
     -0.2
    ],
    "spin": {
     "top": 2500
    },
    "bounce": [
     -0.95,
     0.2
    ],
    "T": 1.25
   },
   {
    "label": "Smash",
    "color": "#ff8a1f",
    "after": 0,
    "atPeak": true,
    "spin": {
     "top": 400
    },
    "bounce": [
     0.95,
     -0.5
    ],
    "T": 0.18,
    "swing": "smash",
    "stroke": "fh"
   }
  ],
  "level": 2,
  "drill": "Partner lobs high to your forehand. Smash 20 balls, aiming for the corners rather than raw power."
 },
 {
  "id": "bounce",
  "level": 3,
  "title": "How spin changes the bounce",
  "view": "side",
  "compare": true,
  "sameLaunch": true,
  "lede": "Three balls leave the racket at the same speed and angle. Only the spin is different.",
  "points": [
   [
    "Topspin",
    "Dips early, lands shorter, then shoots forward off the table."
   ],
   [
    "No spin",
    "Flies a plain curve and bounces at a natural angle."
   ],
   [
    "Backspin",
    "Floats and carries longer, then loses speed at the bounce."
   ],
   [
    "Read it early",
    "Bounce angle is your last clue. The racket path is your first."
   ]
  ],
  "mistake": "Judging spin only by speed. A slow ball can carry the heaviest spin.",
  "shots": [
   {
    "label": "Topspin 1500 rpm",
    "color": "#ff8a1f",
    "from": [
     -1.7,
     0.95,
     -0.35
    ],
    "spin": {
     "top": 1500
    },
    "bounce": [
     0.6,
     -0.35
    ],
    "T": 0.5
   },
   {
    "label": "No spin",
    "color": "#c6f36b",
    "from": [
     -1.7,
     0.95,
     0
    ],
    "spin": {
     "top": 0
    },
    "bounce": [
     0.7,
     0
    ],
    "T": 0.52
   },
   {
    "label": "Backspin 1500 rpm",
    "color": "#4fd1ff",
    "from": [
     -1.7,
     0.95,
     0.35
    ],
    "spin": {
     "top": -1500
    },
    "bounce": [
     0.6,
     0.35
    ],
    "T": 0.5
   }
  ],
  "drill": "Hit the same speed with topspin, flat and backspin into an empty table and watch the bounce from the side."
 },
 {
  "id": "loop",
  "level": 3,
  "title": "Topspin loop",
  "view": "side",
  "lede": "The loop is modern table tennis. Heavy topspin makes the ball dip onto the table and jump forward.",
  "points": [
   [
    "Low to high",
    "Start the racket below the ball and brush up and forward, fast."
   ],
   [
    "Thin contact",
    "Graze the back-top of the ball instead of hitting through it."
   ],
   [
    "Magnus effect",
    "Topspin pushes the ball down in flight, so you can swing hard and still land it."
   ],
   [
    "The kick",
    "After the bounce, topspin grips the table and throws the ball forward and low."
   ]
  ],
  "mistake": "Hitting flat and hard. Without brush, the ball flies long.",
  "shots": [
   {
    "label": "Push",
    "color": "#4fd1ff",
    "from": [
     1.45,
     0.88,
     -0.2
    ],
    "spin": {
     "top": -1000
    },
    "bounce": [
     -0.95,
     0.3
    ],
    "T": 0.65
   },
   {
    "label": "Loop",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.8,
    "atPeak": true,
    "spin": {
     "top": 3800
    },
    "bounce": [
     1.05,
     0.1
    ],
    "T": 0.34,
    "stroke": "fh"
   }
  ],
  "drill": "Partner pushes long to your forehand. Loop 30 balls with a slow, spinny arc before you add speed."
 },
 {
  "id": "slowfast",
  "title": "Slow loop, fast loop",
  "view": "side",
  "compare": true,
  "lede": "Two loops from the same spot. One is slow and full of spin, the other is fast and flatter. Changing between them breaks your opponent's timing.",
  "points": [
   [
    "Slow, spinny loop",
    "Thin brush, upward swing. High arc, big dip, a kick after the bounce."
   ],
   [
    "Fast loop-drive",
    "Thicker contact, forward swing. Low arc that reaches the opponent much sooner."
   ],
   [
    "Same backswing",
    "Start both from the same position so the opponent cannot read which one is coming."
   ],
   [
    "When to use",
    "Slow against backspin to open the rally, fast against a high or weak ball to finish it."
   ]
  ],
  "mistake": "Always looping at one speed. A good blocker settles into your rhythm.",
  "shots": [
   {
    "label": "Slow loop 4500 rpm",
    "color": "#ff8a1f",
    "from": [
     -1.75,
     0.92,
     -0.3
    ],
    "spin": {
     "top": 4500
    },
    "bounce": [
     0.95,
     -0.3
    ],
    "T": 0.62,
    "swing": "loop"
   },
   {
    "label": "Fast loop 2000 rpm",
    "color": "#ff5c8a",
    "from": [
     -1.75,
     0.92,
     0.3
    ],
    "spin": {
     "top": 2000
    },
    "bounce": [
     0.95,
     0.3
    ],
    "T": 0.4,
    "swing": "drive"
   }
  ],
  "level": 3,
  "drill": "Alternate one slow spinny loop and one fast loop-drive against a pushed ball. Disguise the backswing."
 },
 {
  "id": "hookfade",
  "title": "Hook and fade loops",
  "view": "top",
  "compare": true,
  "lede": "Add sidespin to a loop and the ball bends in the air. The hook curves one way, the fade curves the other.",
  "points": [
   [
    "Hook",
    "Brush around the outside of the ball. It curves to your left and kicks away after the bounce."
   ],
   [
    "Fade (inside-out)",
    "Brush the inside of the ball, swinging outward. It curves to your right."
   ],
   [
    "Aim off target",
    "Start a hook aimed right of where you want it to land. It will bend back in."
   ],
   [
    "Why it works",
    "Sidespin loops leave the table at an angle and drag the opponent wide."
   ]
  ],
  "mistake": "Adding sidespin by dropping the wrist. Keep the loop shape and turn the contact point instead.",
  "shots": [
   {
    "label": "Hook loop",
    "color": "#ff8a1f",
    "from": [
     -1.8,
     0.95,
     0
    ],
    "spin": {
     "top": 3000,
     "side": 2200
    },
    "bounce": [
     0.95,
     -0.45
    ],
    "T": 0.5,
    "swing": "loop"
   },
   {
    "label": "Fade loop",
    "color": "#ff5c8a",
    "from": [
     -1.8,
     0.95,
     0
    ],
    "spin": {
     "top": 3000,
     "side": -2200
    },
    "bounce": [
     0.95,
     0.45
    ],
    "T": 0.5,
    "swing": "loop"
   }
  ],
  "level": 3,
  "drill": "Loop 10 hooks and 10 fades to the same target. Watch the curve from behind the ball."
 },
 {
  "id": "fastlong",
  "title": "Fast long serve",
  "view": "broadcast",
  "lede": "A fast serve that bounces near your end line and races to the far corner. It catches receivers who creep in close.",
  "points": [
   [
    "First bounce deep",
    "Land the first bounce close to your own end line."
   ],
   [
    "Low trajectory",
    "Hit forward with a slightly closed racket so the ball skims the net."
   ],
   [
    "Corners",
    "Aim for the far corners or straight at the receiver's elbow."
   ],
   [
    "Mix it in",
    "Use it after a few short serves. It works because it is a surprise."
   ]
  ],
  "mistake": "First bounce in the middle of your half. The ball sits up and the receiver loops it.",
  "shots": [
   {
    "label": "Fast serve",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.5,
     0.95,
     0.2
    ],
    "spin": {
     "top": 1500
    },
    "bounce": [
     -1.2,
     0.2
    ],
    "bounce2": [
     1.15,
     -0.55
    ]
   }
  ],
  "level": 4,
  "drill": "Place a coin 10 cm from the far end line. Serve fast and long until you hit it 5 times."
 },
 {
  "id": "pendulum",
  "level": 4,
  "title": "Pendulum serve",
  "view": "top",
  "lede": "The most common serve at every level. The racket swings like a pendulum and brushes the side of the ball.",
  "points": [
   [
    "Side-on stance",
    "Stand at your backhand corner, body facing the side of the table."
   ],
   [
    "Swing across",
    "Swing the racket from right to left across your body, wrist loose."
   ],
   [
    "Side and under",
    "Brush the back-bottom-right of the ball for sidespin with backspin."
   ],
   [
    "Curve",
    "The ball bends in the air and kicks sideways off the opponent's racket."
   ]
  ],
  "mistake": "Hitting the ball instead of brushing it. Contact should be thin and fast.",
  "shots": [
   {
    "label": "Pendulum",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     -0.45
    ],
    "spin": {
     "top": -1200,
     "side": -3000
    },
    "bounce": [
     -0.8,
     -0.4
    ],
    "bounce2": [
     0.65,
     0.05
    ]
   }
  ],
  "drill": "Serve 30 pendulum serves. Have the receiver push straight; watch which way the return jumps."
 },
 {
  "id": "reverse",
  "level": 4,
  "title": "Reverse pendulum",
  "view": "top",
  "compare": true,
  "lede": "The mirror of the pendulum serve. Same stance, opposite spin, and the curve breaks the other way.",
  "points": [
   [
    "Same setup",
    "Start exactly like a normal pendulum so the receiver cannot tell."
   ],
   [
    "Reverse swing",
    "Swing from left to right, brushing the back-left of the ball."
   ],
   [
    "Elbow up",
    "Lift the elbow so the racket can travel outward."
   ],
   [
    "Pair them",
    "Use both serves with the same toss. The receiver must guess."
   ]
  ],
  "mistake": "Changing the stance for the reverse. A good receiver reads that before the toss.",
  "shots": [
   {
    "label": "Pendulum",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     -0.35
    ],
    "spin": {
     "top": -1000,
     "side": -3200
    },
    "bounce": [
     -0.8,
     -0.35
    ],
    "bounce2": [
     0.6,
     -0.15
    ]
   },
   {
    "label": "Reverse",
    "color": "#ff5c8a",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     -0.35
    ],
    "spin": {
     "top": -1000,
     "side": 3200
    },
    "bounce": [
     -0.8,
     -0.35
    ],
    "bounce2": [
     0.6,
     -0.15
    ]
   }
  ],
  "drill": "Serve pendulum and reverse pendulum in random order with the same toss. Ask the receiver to call which it was."
 },
 {
  "id": "bhserve",
  "title": "Backhand sidespin serve",
  "view": "top",
  "lede": "Served from the middle of the table with the backhand. The racket swings left to right and the ball curves away.",
  "points": [
   [
    "Stand central",
    "Square to the table, ball and racket in front of your stomach."
   ],
   [
    "Left to right",
    "Swing the racket across your body, brushing the left side of the ball."
   ],
   [
    "Add under or top",
    "Brush lower for side-backspin, higher for side-topspin."
   ],
   [
    "Read the return",
    "The return usually jumps to your forehand side. Be ready there."
   ]
  ],
  "mistake": "Hiding the ball behind the arm. Keep the contact visible to the receiver.",
  "shots": [
   {
    "label": "Backhand serve",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.5,
     0.95,
     0
    ],
    "spin": {
     "top": -800,
     "side": 2800
    },
    "bounce": [
     -0.85,
     0
    ],
    "bounce2": [
     0.65,
     0.35
    ],
    "stroke": "bh",
    "swing": "bhserve"
   }
  ],
  "level": 4,
  "drill": "Serve 30 backhand sidespin serves from the middle of the table. Land the second bounce near the side line."
 },
 {
  "id": "tomahawk",
  "title": "Tomahawk serve",
  "view": "top",
  "lede": "A forehand serve with the racket tip pointing up. It produces the opposite sidespin to the pendulum.",
  "points": [
   [
    "Tip up",
    "Hold the racket upright, tip toward the ceiling, with a loose grip."
   ],
   [
    "Chop across",
    "Swing left to right like a small axe, brushing the left side of the ball."
   ],
   [
    "Short placement",
    "Keep it short to the receiver's forehand so they cannot attack."
   ],
   [
    "Pair it",
    "Mix with the pendulum. Same side of the table, opposite curve."
   ]
  ],
  "mistake": "Tensing the wrist. A tight wrist kills racket speed and spin.",
  "shots": [
   {
    "label": "Tomahawk",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.5,
     0.95,
     -0.2
    ],
    "spin": {
     "top": -900,
     "side": 3000
    },
    "bounce": [
     -0.8,
     -0.2
    ],
    "bounce2": [
     0.55,
     0.35
    ],
    "swing": "tomahawk"
   }
  ],
  "level": 4,
  "drill": "Serve 20 tomahawk serves short to the forehand. The second bounce should land within 40 cm of the net."
 },
 {
  "id": "disguise",
  "level": 4,
  "title": "Heavy or empty?",
  "view": "broadcast",
  "compare": true,
  "lede": "Two serves with the same motion. One carries heavy backspin, one carries almost none.",
  "points": [
   [
    "The trick",
    "The server hits near the racket handle for no spin, near the tip for heavy spin."
   ],
   [
    "Watch contact",
    "A fast brush at the moment of contact means spin. A tap means little."
   ],
   [
    "Watch the bounce",
    "The heavy ball slows and sits. The empty ball skids through."
   ],
   [
    "Receive safely",
    "Unsure? Push with a slightly open racket and aim deep."
   ]
  ],
  "mistake": "Reading the follow-through. Servers exaggerate it on purpose to fool you.",
  "shots": [
   {
    "label": "Heavy 3500 rpm",
    "color": "#4fd1ff",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     -0.2
    ],
    "spin": {
     "top": -3500
    },
    "bounce": [
     -0.85,
     -0.2
    ],
    "bounce2": [
     0.45,
     -0.2
    ]
   },
   {
    "label": "No-spin",
    "color": "#c6f36b",
    "toss": true,
    "from": [
     -1.48,
     0.95,
     0.2
    ],
    "spin": {
     "top": -150
    },
    "bounce": [
     -0.85,
     0.2
    ],
    "bounce2": [
     0.45,
     0.2
    ]
   }
  ],
  "drill": "Serve 10 heavy and 10 empty serves in mixed order. The receiver pushes; count the pushes that pop up or hit the net."
 },
 {
  "id": "hightoss",
  "title": "High-toss serve",
  "view": "side",
  "labels": [
   {
    "p": [
     -1.5,
     2.45,
     -0.3
    ],
    "t": "Toss 1.5 m"
   }
  ],
  "lede": "Toss the ball a metre or more. It falls faster, so the same swing creates more spin and speed.",
  "points": [
   [
    "Straight up",
    "Toss vertically to 1 to 3 metres. A drifting toss ruins timing."
   ],
   [
    "Drop speed",
    "The falling ball meets the racket at up to 6 m/s, adding to the brush."
   ],
   [
    "Contact low",
    "Strike just above table height so the first bounce stays short."
   ],
   [
    "Distraction",
    "The receiver must track the ball up and down, which helps hide your contact."
   ]
  ],
  "mistake": "Losing balance while watching the ball. Keep your feet set before you toss.",
  "shots": [
   {
    "label": "High toss",
    "color": "#ff8a1f",
    "toss": true,
    "tossH": 1.5,
    "from": [
     -1.5,
     0.9,
     -0.3
    ],
    "spin": {
     "top": -1600,
     "side": -2200
    },
    "bounce": [
     -0.85,
     -0.3
    ],
    "bounce2": [
     0.55,
     0
    ]
   }
  ],
  "level": 4,
  "drill": "Toss to 1.5 m and catch the ball 20 times before you strike. Then serve, hitting at waist height."
 },
 {
  "id": "ghost",
  "level": 4,
  "title": "Ghost serve",
  "view": "side",
  "labels": [
   {
    "p": [
     0.5,
     0.82,
     0.35
    ],
    "t": "Second bounce"
   }
  ],
  "lede": "Backspin so heavy the ball bounces on the far side and rolls back toward the net.",
  "points": [
   [
    "Maximum brush",
    "Graze only the bottom of the ball with a very open racket."
   ],
   [
    "Low speed",
    "Hit softly. Speed fights spin, so keep forward speed tiny."
   ],
   [
    "Short and low",
    "Land the second bounce just past the net."
   ],
   [
    "Why it kills",
    "Receivers reach for a ball that is moving away from them."
   ]
  ],
  "mistake": "Adding speed to look aggressive. The spin effect disappears.",
  "shots": [
   {
    "label": "Ghost serve 6000 rpm",
    "ghost": true,
    "mu": 0.6,
    "color": "#ff5c8a",
    "toss": true,
    "from": [
     -1.45,
     0.95,
     0
    ],
    "spin": {
     "top": -6000
    },
    "bounce": [
     -0.9,
     0
    ],
    "bounce2": [
     0.25,
     0
    ],
    "maxT": 3
   }
  ],
  "drill": "Put a towel 50 cm behind the net on the far side. Serve until the ball stops before reaching it."
 },
 {
  "id": "receive-back",
  "level": 5,
  "title": "Receiving backspin",
  "view": "receiver",
  "lede": "Backspin wants to pull your return into the net. Open your racket and lift it just enough.",
  "points": [
   [
    "Open the face",
    "The heavier the backspin, the more you tilt the face upward."
   ],
   [
    "Move in",
    "Step in so contact happens over the table, early."
   ],
   [
    "Push or loop",
    "Push it back low, or loop it with a strong upward brush."
   ],
   [
    "Go deep",
    "A long push to the corner gives your opponent the least time."
   ]
  ],
  "mistake": "Using a closed racket. The ball drops straight into the net.",
  "shots": [
   {
    "label": "Backspin serve",
    "color": "#4fd1ff",
    "toss": true,
    "from": [
     1.48,
     0.95,
     0.2
    ],
    "spin": {
     "top": -2400
    },
    "bounce": [
     0.8,
     0.2
    ],
    "bounce2": [
     -0.8,
     0.3
    ]
   },
   {
    "label": "Long push",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.35,
    "spin": {
     "top": -1600
    },
    "bounce": [
     1.05,
     0.55
    ],
    "T": 0.55,
    "stroke": "bh"
   }
  ],
  "drill": "Partner serves heavy backspin. Push 20 returns long to the backhand corner, then 20 to the forehand."
 },
 {
  "id": "receive-side",
  "level": 5,
  "title": "Receiving sidespin",
  "view": "receiver",
  "lede": "Sidespin throws your return sideways. Aim to the side it pushes toward and the ball comes back to the table.",
  "points": [
   [
    "Find the direction",
    "Watch which way the server's racket travels across the ball."
   ],
   [
    "Aim against it",
    "If the ball will kick left off your racket, aim to the right."
   ],
   [
    "Angle the racket",
    "Turn the racket face slightly so it meets the spin head on."
   ],
   [
    "Or flip it",
    "Play over the top with topspin. Your own spin overrides theirs."
   ]
  ],
  "mistake": "Aiming down the middle. The return sprays off the side of the table.",
  "shots": [
   {
    "label": "Side serve",
    "color": "#4fd1ff",
    "toss": true,
    "from": [
     1.48,
     0.95,
     0.45
    ],
    "spin": {
     "top": -800,
     "side": 3000
    },
    "bounce": [
     0.8,
     0.4
    ],
    "bounce2": [
     -0.75,
     0.15
    ]
   },
   {
    "label": "Return",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.35,
    "spin": {
     "top": -900,
     "side": -800
    },
    "bounce": [
     0.95,
     -0.4
    ],
    "T": 0.5,
    "stroke": "fh"
   }
  ],
  "drill": "Partner serves pendulum. Return 20 balls, aiming against the spin so they land inside the side line."
 },
 {
  "id": "block",
  "level": 5,
  "title": "Blocking topspin",
  "view": "side",
  "lede": "Against a loop you do not need power. Close your racket and let the ball's speed do the work.",
  "points": [
   [
    "Close the face",
    "Tilt the racket forward. Heavy topspin needs more closing."
   ],
   [
    "Short stroke",
    "Barely move the racket. Absorb, then push slightly forward."
   ],
   [
    "Early contact",
    "Take the ball just after the bounce, before topspin lifts it."
   ],
   [
    "Place it",
    "Redirect wide or into the elbow. Placement wins the block."
   ]
  ],
  "mistake": "Swinging at a loop. The spin sends the ball off the end of the table.",
  "shots": [
   {
    "label": "Loop",
    "color": "#4fd1ff",
    "from": [
     1.9,
     0.82,
     0.3
    ],
    "spin": {
     "top": 3500
    },
    "bounce": [
     -0.85,
     -0.1
    ],
    "T": 0.5
   },
   {
    "label": "Block",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.45,
    "spin": {
     "top": 900
    },
    "bounce": [
     0.95,
     0.55
    ],
    "T": 0.45,
    "stroke": "bh",
    "swing": "block"
   }
  ],
  "drill": "Partner loops to your backhand. Block 50 balls, alternating wide backhand and the middle."
 },
 {
  "id": "touch",
  "title": "Short touch",
  "view": "receiver",
  "lede": "Drop a short serve back short. The ball barely crosses the net and bounces twice before your opponent can attack.",
  "points": [
   [
    "Step in",
    "Bring your right foot under the table so the racket is right over the bounce."
   ],
   [
    "Early contact",
    "Touch the ball just after it bounces, while it is still rising."
   ],
   [
    "Soft hand",
    "Relax the grip and absorb. The racket moves only a few centimetres."
   ],
   [
    "Keep it low",
    "Open the face slightly against backspin so it clears the net and dies."
   ]
  ],
  "mistake": "Contacting at the top of the bounce. The ball has too much time and goes long.",
  "shots": [
   {
    "label": "Short serve",
    "color": "#4fd1ff",
    "toss": true,
    "from": [
     1.5,
     0.95,
     0.1
    ],
    "spin": {
     "top": -1500
    },
    "bounce": [
     0.8,
     0.1
    ],
    "bounce2": [
     -0.35,
     0.2
    ]
   },
   {
    "label": "Short touch",
    "color": "#ff8a1f",
    "after": 0,
    "at": -0.42,
    "spin": {
     "top": -900
    },
    "bounce": [
     0.3,
     -0.15
    ],
    "T": 0.42,
    "stroke": "fh",
    "swing": "touch",
    "maxT": 1.3
   }
  ],
  "level": 5,
  "drill": "Partner serves short backspin. Drop 20 returns so they would bounce twice on the far side."
 },
 {
  "id": "fhflick",
  "title": "Forehand flick",
  "view": "receiver",
  "lede": "Attack a short serve to your forehand with a fast wrist flick over the table.",
  "points": [
   [
    "Get close",
    "Step in with the right foot so the racket is over the table at contact."
   ],
   [
    "Short backswing",
    "Bring the racket just behind the ball, wrist slightly back."
   ],
   [
    "Flick up and forward",
    "Snap the forearm and wrist through the top of the bounce."
   ],
   [
    "Aim wide",
    "A flick to the wide forehand or the elbow gives the server the least time."
   ]
  ],
  "mistake": "Big backswing. There is no room over the table and you lose timing.",
  "shots": [
   {
    "label": "Short serve",
    "color": "#4fd1ff",
    "toss": true,
    "from": [
     1.5,
     0.95,
     -0.35
    ],
    "spin": {
     "top": -900
    },
    "bounce": [
     0.8,
     -0.35
    ],
    "bounce2": [
     -0.4,
     0.45
    ]
   },
   {
    "label": "Forehand flick",
    "color": "#ff8a1f",
    "after": 0,
    "at": -0.6,
    "atPeak": true,
    "spin": {
     "top": 1800
    },
    "bounce": [
     0.95,
     -0.55
    ],
    "T": 0.42,
    "stroke": "fh",
    "swing": "flick"
   }
  ],
  "level": 5,
  "drill": "Partner serves short to your forehand. Step in and flick 20 balls, finishing with the racket at nose height."
 },
 {
  "id": "flick",
  "level": 5,
  "title": "Banana flick",
  "view": "receiver",
  "lede": "A backhand attack played over the table against a short serve. The ball curves like a banana.",
  "points": [
   [
    "Over the table",
    "Step in deep with your right foot and bring the racket over the bounce."
   ],
   [
    "Wrist cocked",
    "Point the racket tip down toward the floor, elbow high."
   ],
   [
    "Uncoil",
    "Snap the wrist forward and around the side of the ball."
   ],
   [
    "Spin mix",
    "Topspin plus sidespin. It beats the backspin serve and curves away."
   ]
  ],
  "mistake": "Starting the flick too late. Contact must be at the top of the bounce.",
  "shots": [
   {
    "label": "Short serve",
    "color": "#4fd1ff",
    "toss": true,
    "from": [
     1.48,
     0.95,
     -0.1
    ],
    "spin": {
     "top": -1800
    },
    "bounce": [
     0.85,
     -0.1
    ],
    "bounce2": [
     -0.35,
     -0.1
    ]
   },
   {
    "label": "Banana flick",
    "color": "#ff8a1f",
    "after": 0,
    "at": -0.6,
    "atPeak": true,
    "spin": {
     "top": 2800,
     "side": -1800
    },
    "bounce": [
     0.85,
     0.5
    ],
    "T": 0.36,
    "stroke": "bh",
    "swing": "flick"
   }
  ],
  "drill": "Partner serves short to the middle. Banana flick 20 balls to the backhand corner."
 },
 {
  "id": "strawberry",
  "title": "Strawberry flick",
  "view": "receiver",
  "lede": "The reverse of the banana flick. Brush the other side and under the ball for a flick that skids and curves away.",
  "points": [
   [
    "Same start",
    "Set up exactly like a banana flick so the server cannot tell."
   ],
   [
    "Brush under",
    "Contact the bottom-right of the ball with an open racket."
   ],
   [
    "Spin",
    "Sidespin plus a little backspin. It stays low and skids off the table."
   ],
   [
    "Best against",
    "Short topspin or no-spin serves, which pop up for a banana flick."
   ]
  ],
  "mistake": "Using it against heavy backspin. The ball drops into the net.",
  "shots": [
   {
    "label": "Short no-spin",
    "color": "#4fd1ff",
    "toss": true,
    "from": [
     1.5,
     0.95,
     0
    ],
    "spin": {
     "top": -200
    },
    "bounce": [
     0.85,
     0
    ],
    "bounce2": [
     -0.4,
     -0.05
    ]
   },
   {
    "label": "Strawberry flick",
    "color": "#ff8a1f",
    "after": 0,
    "at": -0.62,
    "atPeak": true,
    "spin": {
     "top": -400,
     "side": 1600
    },
    "bounce": [
     0.9,
     -0.5
    ],
    "T": 0.34,
    "stroke": "bh",
    "swing": "flick"
   }
  ],
  "level": 5,
  "drill": "Partner serves short topspin or no-spin. Strawberry flick 20 balls wide to the forehand."
 },
 {
  "id": "thirdball",
  "title": "Third-ball attack",
  "view": "broadcast",
  "labels": [
   {
    "p": [
     -1.6,
     0.8,
     -0.55
    ],
    "t": "1"
   },
   {
    "p": [
     0.7,
     1.15,
     -0.2
    ],
    "t": "2"
   },
   {
    "p": [
     -1.4,
     1.2,
     0.75
    ],
    "t": "3"
   }
  ],
  "lede": "Serve, read the return, attack. Most points at high level are won on the third ball.",
  "points": [
   [
    "1 · Serve short",
    "Short backspin limits the receiver to a push or a touch."
   ],
   [
    "2 · Expect the push",
    "A long push to your forehand is the most likely return. Move early."
   ],
   [
    "3 · Loop to kill",
    "Loop hard into the open corner while the receiver is still recovering."
   ],
   [
    "Plan ahead",
    "Decide where you will attack before you serve."
   ]
  ],
  "mistake": "Watching your own serve. Recover to ready position the moment you hit it.",
  "shots": [
   {
    "label": "1 · Short serve",
    "color": "#ff8a1f",
    "toss": true,
    "from": [
     -1.5,
     0.95,
     -0.3
    ],
    "spin": {
     "top": -1800
    },
    "bounce": [
     -0.85,
     -0.3
    ],
    "bounce2": [
     0.35,
     -0.1
    ]
   },
   {
    "label": "2 · Long push",
    "color": "#4fd1ff",
    "after": 0,
    "atPeak": true,
    "spin": {
     "top": -1400
    },
    "bounce": [
     -1.1,
     0.5
    ],
    "T": 0.55,
    "swing": "push"
   },
   {
    "label": "3 · Loop kill",
    "color": "#ff5c8a",
    "after": 1,
    "at": -1.7,
    "atPeak": true,
    "spin": {
     "top": 3200
    },
    "bounce": [
     1.05,
     -0.55
    ],
    "T": 0.3,
    "stroke": "fh",
    "swing": "loop"
   }
  ],
  "level": 6,
  "drill": "Serve short backspin, partner pushes long, you loop. Repeat 20 times, then let the partner push anywhere."
 },
 {
  "id": "counterloop",
  "level": 6,
  "title": "Counter-loop",
  "view": "side",
  "lede": "Looping a loop. You take the opponent's topspin and send back even more of your own.",
  "points": [
   [
    "Back off",
    "Move 1 to 2 metres behind the table to buy time."
   ],
   [
    "Over the top",
    "Close the racket and brush up and over the ball."
   ],
   [
    "Full body",
    "Legs, hips and shoulders drive the swing. The arm just follows."
   ],
   [
    "Rhythm",
    "Hit as the ball falls. Their spin adds to yours."
   ]
  ],
  "mistake": "Opening the racket. Their topspin plus yours sends it into the ceiling.",
  "shots": [
   {
    "label": "Opponent loop",
    "color": "#4fd1ff",
    "from": [
     1.9,
     0.85,
     -0.3
    ],
    "spin": {
     "top": 3500
    },
    "bounce": [
     -0.9,
     0.25
    ],
    "T": 0.5
   },
   {
    "label": "Counter-loop",
    "color": "#ff8a1f",
    "after": 0,
    "at": -2.4,
    "spin": {
     "top": 4200
    },
    "bounce": [
     1,
     -0.45
    ],
    "T": 0.5,
    "stroke": "fh",
    "swing": "counter"
   }
  ],
  "drill": "Both players 2 m back. Loop-to-loop rally for 2 minutes, keeping the ball deep."
 },
 {
  "id": "halfvolley",
  "title": "Half-volley counter",
  "view": "side",
  "lede": "Take the ball the instant it bounces. You use your opponent's speed and steal their time.",
  "points": [
   [
    "Stay close",
    "Stand within half a metre of the end line."
   ],
   [
    "Before the rise",
    "Contact just after the bounce, before topspin lifts the ball."
   ],
   [
    "Short, closed",
    "Close the racket and punch forward. No backswing."
   ],
   [
    "Redirect",
    "Change the line. The early timing makes the angle hard to cover."
   ]
  ],
  "mistake": "Standing back to give yourself time. That is what your opponent wants.",
  "shots": [
   {
    "label": "Loop",
    "color": "#4fd1ff",
    "from": [
     1.9,
     0.82,
     0.2
    ],
    "spin": {
     "top": 3500
    },
    "bounce": [
     -1,
     0
    ],
    "T": 0.48
   },
   {
    "label": "Half-volley",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.18,
    "spin": {
     "top": 1500
    },
    "bounce": [
     0.9,
     0.55
    ],
    "T": 0.4,
    "stroke": "bh",
    "swing": "block"
   }
  ],
  "level": 6,
  "drill": "Stand close. Partner loops; you take every ball just after the bounce with a short counter."
 },
 {
  "id": "chop",
  "level": 6,
  "title": "Defensive chop",
  "view": "side",
  "lede": "The defender's weapon. Stand far back and slice heavy backspin under the attacker's loop.",
  "points": [
   [
    "Distance",
    "Stay 2 to 3 metres back so you can see the ball fully."
   ],
   [
    "High to low",
    "Start the racket at shoulder height and cut down through the ball."
   ],
   [
    "Late contact",
    "Let the ball fall to waist height before you chop."
   ],
   [
    "Vary it",
    "Mix heavy chops with no-spin chops. The attacker loops one into the net."
   ]
  ],
  "mistake": "Chopping too early. The ball is still rising with topspin and pops up high.",
  "shots": [
   {
    "label": "Attacker loop",
    "color": "#4fd1ff",
    "from": [
     1.9,
     0.85,
     0.2
    ],
    "spin": {
     "top": 3500
    },
    "bounce": [
     -0.95,
     0.1
    ],
    "T": 0.5
   },
   {
    "label": "Chop",
    "color": "#ff8a1f",
    "after": 0,
    "at": -2.9,
    "spin": {
     "top": -3500
    },
    "bounce": [
     0.95,
     -0.2
    ],
    "T": 0.95,
    "stroke": "fh"
   }
  ],
  "drill": "Partner loops 30 balls at 2 m distance. Chop each one long, aiming 30 cm from the end line."
 },
 {
  "id": "lob",
  "title": "Fish and lob defence",
  "view": "side",
  "lede": "When you are pushed far back, send the ball high and deep with topspin. It buys time and the kick makes smashing hard.",
  "points": [
   [
    "Go back",
    "Retreat 3 to 4 metres. Height is your time."
   ],
   [
    "Lift with topspin",
    "Brush up the back of the ball. Topspin makes the lob kick forward and skid."
   ],
   [
    "Deep",
    "Aim for the last 30 cm of the table. A short lob is an easy kill."
   ],
   [
    "Recover",
    "After each lob, return to the middle and watch the smasher's racket."
   ]
  ],
  "mistake": "Lobbing without spin. A dead lob sits up for the smash.",
  "shots": [
   {
    "label": "Lob",
    "color": "#ff8a1f",
    "from": [
     -3.2,
     0.85,
     0.1
    ],
    "spin": {
     "top": 3000
    },
    "bounce": [
     1.05,
     0.15
    ],
    "T": 1.3,
    "swing": "lob",
    "stroke": "fh"
   },
   {
    "label": "Smash",
    "color": "#4fd1ff",
    "after": 0,
    "atPeak": true,
    "spin": {
     "top": 400
    },
    "bounce": [
     -0.9,
     -0.4
    ],
    "T": 0.2,
    "swing": "smash"
   },
   {
    "label": "Lob again",
    "color": "#ff8a1f",
    "after": 1,
    "at": -3,
    "spin": {
     "top": 3000
    },
    "bounce": [
     1,
     0.3
    ],
    "T": 1.3,
    "swing": "lob",
    "stroke": "fh"
   }
  ],
  "level": 6,
  "drill": "From 3 m back, lob 20 balls high and deep. Each lob should land in the last 40 cm of the table."
 },
 {
  "id": "chopblock",
  "title": "Chop block",
  "view": "side",
  "lede": "A block with a downward cut. It turns the attacker's topspin into short backspin and stops the rally rhythm.",
  "points": [
   [
    "Same start",
    "Set up like a normal block so the attacker expects pace."
   ],
   [
    "Cut down",
    "At contact, move the racket down and forward under the ball."
   ],
   [
    "Short and low",
    "The ball lands short with backspin and stays low."
   ],
   [
    "Follow-up",
    "The attacker must loop from under the ball. Be ready for a weak return."
   ]
  ],
  "mistake": "Cutting too hard. The ball floats up and gets smashed.",
  "shots": [
   {
    "label": "Loop",
    "color": "#4fd1ff",
    "from": [
     1.9,
     0.82,
     0.3
    ],
    "spin": {
     "top": 3500
    },
    "bounce": [
     -0.85,
     -0.2
    ],
    "T": 0.5
   },
   {
    "label": "Chop block",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.45,
    "spin": {
     "top": -1500
    },
    "bounce": [
     0.55,
     0.3
    ],
    "T": 0.5,
    "stroke": "bh",
    "swing": "block"
   }
  ],
  "level": 6,
  "drill": "Partner loops to your backhand. Chop-block every third ball short and keep the rest normal blocks."
 },
 {
  "id": "sideblock",
  "title": "Sidespin block",
  "view": "top",
  "lede": "Rub across the back of the ball while blocking. The return curves and kicks sideways off the attacker's racket.",
  "points": [
   [
    "Block position",
    "Close the racket and meet the ball early, as in a normal block."
   ],
   [
    "Rub sideways",
    "Move the racket across the back of the ball from left to right."
   ],
   [
    "Curve",
    "The ball bends in the air and skids sideways after the bounce."
   ],
   [
    "Mix it",
    "Alternate with normal and chop blocks so the attacker never settles."
   ]
  ],
  "mistake": "Moving the racket only sideways. You still need a little forward push.",
  "shots": [
   {
    "label": "Loop",
    "color": "#4fd1ff",
    "from": [
     1.9,
     0.82,
     0.2
    ],
    "spin": {
     "top": 3500
    },
    "bounce": [
     -0.85,
     0.3
    ],
    "T": 0.5
   },
   {
    "label": "Sidespin block",
    "color": "#ff8a1f",
    "after": 0,
    "at": -1.45,
    "spin": {
     "top": 400,
     "side": 2400
    },
    "bounce": [
     0.85,
     -0.45
    ],
    "T": 0.42,
    "stroke": "bh",
    "swing": "block"
   }
  ],
  "level": 6,
  "drill": "Partner loops. Sidespin-block 20 balls; watch them skid sideways off the partner's racket."
 },
 {
  "id": "deadpush",
  "title": "Heavy push, dead push",
  "view": "side",
  "compare": true,
  "lede": "Two pushes with the same motion. One is heavy backspin, the other has almost none and is easy to loop off the end.",
  "points": [
   [
    "Heavy",
    "Fast brush under the ball. The attacker must lift hard."
   ],
   [
    "Dead",
    "Same swing, but push through the ball instead of brushing it."
   ],
   [
    "The trap",
    "The attacker lifts the dead ball like a heavy one and sends it long."
   ],
   [
    "Sell it",
    "Keep the racket speed and finish identical on both."
   ]
  ],
  "mistake": "Slowing the swing for the dead push. Good players see the change.",
  "shots": [
   {
    "label": "Heavy 2800 rpm",
    "color": "#4fd1ff",
    "from": [
     -1.5,
     0.86,
     -0.2
    ],
    "spin": {
     "top": -2800
    },
    "bounce": [
     0.95,
     -0.2
    ],
    "T": 0.62,
    "swing": "push",
    "stroke": "bh"
   },
   {
    "label": "Dead 150 rpm",
    "color": "#c6f36b",
    "from": [
     -1.5,
     0.86,
     0.2
    ],
    "spin": {
     "top": -150
    },
    "bounce": [
     0.95,
     0.2
    ],
    "T": 0.62,
    "swing": "push",
    "stroke": "bh"
   }
  ],
  "level": 7,
  "drill": "Push 10 heavy and 10 dead balls with the same motion. The partner attacks; count their misses."
 },
 {
  "id": "fakechop",
  "title": "Fake chop",
  "view": "side",
  "compare": true,
  "lede": "A defender's best weapon. The same big chopping swing sends one ball heavy and the next one empty.",
  "points": [
   [
    "Heavy chop",
    "Cut sharply under the ball with a fast racket."
   ],
   [
    "Fake chop",
    "Same swing, but hit the ball with a flatter racket near the handle. Almost no spin."
   ],
   [
    "The result",
    "The attacker loops the empty ball with too much lift and it flies long."
   ],
   [
    "Change rhythm",
    "Use one fake chop for every three or four heavy ones."
   ]
  ],
  "mistake": "Making the fake chop slower. It must look like the heavy one.",
  "shots": [
   {
    "label": "Heavy chop 4000 rpm",
    "color": "#4fd1ff",
    "from": [
     -2.9,
     0.88,
     -0.2
    ],
    "spin": {
     "top": -4000
    },
    "bounce": [
     0.95,
     -0.2
    ],
    "T": 0.95,
    "swing": "chop",
    "stroke": "fh"
   },
   {
    "label": "Fake chop 200 rpm",
    "color": "#c6f36b",
    "from": [
     -2.9,
     0.88,
     0.2
    ],
    "spin": {
     "top": -200
    },
    "bounce": [
     0.95,
     0.2
    ],
    "T": 0.95,
    "swing": "chop",
    "stroke": "fh"
   }
  ],
  "level": 7,
  "drill": "Chop 10 heavy and 10 no-spin balls in random order. The attacker should net or overshoot the empty ones."
 },
 {
  "id": "aroundnet",
  "title": "Around the net post",
  "view": "top",
  "labels": [
   {
    "p": [
     0,
     0.95,
     0.93
    ],
    "t": "Net post"
   }
  ],
  "lede": "When a wide ball drags you past the side of the table, you can hit around the net post. The ball never has to go over the net.",
  "points": [
   [
    "It is legal",
    "The rules allow a return that passes outside the net post, even below net height."
   ],
   [
    "Chase wide",
    "Follow the ball past the side line and hit it level with the net post or lower."
   ],
   [
    "Hook it",
    "Swing hard with heavy sidespin so the ball curves back onto the table."
   ],
   [
    "Rare but deadly",
    "The ball skims low along the table edge and is almost unreturnable."
   ]
  ],
  "mistake": "Trying to lift the ball over the net from out wide. The angle is impossible.",
  "shots": [
   {
    "label": "Wide angle",
    "color": "#4fd1ff",
    "from": [
     1.75,
     1.05,
     -0.8
    ],
    "spin": {
     "top": 1200
    },
    "bounce": [
     -0.15,
     0.7
    ],
    "T": 0.6
   },
   {
    "label": "Around the post",
    "color": "#ff8a1f",
    "after": 0,
    "atZ": 1.3,
    "spin": {
     "top": 1500,
     "side": 6000
    },
    "bounce": [
     0.6,
     0.62
    ],
    "T": 0.4,
    "stroke": "fh",
    "swing": "loop"
   }
  ],
  "level": 7,
  "drill": "Partner hits wide, angled balls. Run outside the table line and hook the ball around the net post, low."
 }
];
if (typeof module !== 'undefined') module.exports = { LESSONS, LEVELS };
