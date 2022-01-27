<script>
import Matter from 'matter-js';
// import Render from '../matter/Render.js';
import { onMount } from 'svelte';
import headPng from 'shared/textures/head.png';
 
let jamesRagdoll;
let scale = 2;
let options = 1;
let x = 200;
let y = 200;

onMount(async() => {
    var Engine = Matter.Engine,
        Events = Matter.Events,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Common = Matter.Common,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Vector = Matter.Vector,
        Vertices = Matter.Vertices;

    var engine = Engine.create({
      // positionIterations: 20
    });

    var render = Render.create({
      element: jamesRagdoll,
      engine: engine,
      options: {
        width: window.innerWidth / 2,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
    var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
    var headOptions = Common.extend({
        label: 'head',
        collisionFilter: {
            group: Body.nextGroup(true)
        },
        chamfer: {
            radius: [15 * scale, 15 * scale, 15 * scale, 15 * scale]
        },
        render: {
            sprite: {
                texture: headPng,
                xScale: 0.1 * scale,
                yScale: 0.1 * scale
            }
        }
    }, options);

    var chestOptions = Common.extend({
        label: 'chest',
        collisionFilter: {
            group: Body.nextGroup(true)
        },
        chamfer: {
            radius: [20 * scale, 20 * scale, 0, 0]
        },
        render: {
            fillStyle: '#8186FF'
        }
    }, options);

    var waistOptions = Common.extend({
        label: 'waist',
        collisionFilter: {
            group: Body.nextGroup(true)
        },
        render: {
            fillStyle: '#4CC2C0'
        }
    }, options);

    var leftArmOptions = Common.extend({
        label: 'left-arm',
        collisionFilter: {
            group: Body.nextGroup(true)
        },
        chamfer: {
            radius: 10 * scale
        },
        render: {
            fillStyle: '#8186FF'
        }
    }, options);

    var leftLowerArmOptions = Common.extend({}, leftArmOptions, {
        render: {
            fillStyle: '#FFD1C2'
        }
    });

    var rightArmOptions = Common.extend({
        label: 'right-arm',
        collisionFilter: {
            group: Body.nextGroup(true)
        },
        chamfer: {
            radius: 10 * scale
        },
        render: {
            fillStyle: '#8186FF'
        }
    }, options);

    var rightLowerArmOptions = Common.extend({}, rightArmOptions, {
        render: {
            fillStyle: '#FFD1C2'
        }
    });

    var leftLegOptions = Common.extend({
        label: 'left-leg',
        collisionFilter: {
            group: Body.nextGroup(true)
        },
        chamfer: {
            radius: 10 * scale
        },
        render: {
            fillStyle: '#4CC2C0'
        }
    }, options);

    var leftLowerLegOptions = Common.extend({}, leftLegOptions, {
        render: {
            fillStyle: '#4CC2C0'
        }
    });

    var rightLegOptions = Common.extend({
        label: 'right-leg',
        collisionFilter: {
            group: Body.nextGroup(true)
        },
        chamfer: {
            radius: 10 * scale
        },
        render: {
            fillStyle: '#4CC2C0'
        }
    }, options);

    var rightLowerLegOptions = Common.extend({}, rightLegOptions, {
        render: {
            fillStyle: '#4CC2C0'
        }
    });
    var head = Bodies.rectangle(x, y - 60 * scale, 40 * scale, 45 * scale, headOptions);
    var chest = Bodies.rectangle(x, y, 55 * scale, 80 * scale, chestOptions);
    var waist = Bodies.rectangle(x, y + 65, 55 * scale, 15 * scale, waistOptions);
    var torso = Body.create({parts: [chest, waist]});
    var rightUpperArm = Bodies.rectangle(x + 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, rightArmOptions);
    var rightLowerArm = Bodies.rectangle(x + 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, rightLowerArmOptions);
    var leftUpperArm = Bodies.rectangle(x - 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, leftArmOptions);
    var leftLowerArm = Bodies.rectangle(x - 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, leftLowerArmOptions);
    var leftUpperLeg = Bodies.rectangle(x - 20 * scale, y + 57 * scale, 25 * scale, 40 * scale, leftLegOptions);
    var leftLowerLeg = Bodies.rectangle(x - 20 * scale, y + 97 * scale, 25 * scale, 60 * scale, leftLowerLegOptions);
    var rightUpperLeg = Bodies.rectangle(x + 20 * scale, y + 57 * scale, 25 * scale, 40 * scale, rightLegOptions);
    var rightLowerLeg = Bodies.rectangle(x + 20 * scale, y + 97 * scale, 25 * scale, 60 * scale, rightLowerLegOptions);

    var headContraint = Constraint.create({
        bodyA: head,
        pointA: {
            x: 0,
            y: 25 * scale
        },
        pointB: {
            x: 0,
            y: -50 * scale
        },
        bodyB: torso,
        stiffness: 1,
        length: 0,
        render: {
            visible: false
        }
    });

    var torsoToRightUpperArm = Constraint.create({
        bodyA: torso,
        pointA: {
            x: 30 * scale,
            y: -35 * scale
        },
        pointB: {
            x: 0,
            y: -8 * scale
        },
        bodyB: rightUpperArm,
        // length: 0,
        stiffness: 0.6,
        type: 'pin',
        render: {
            visible: false
        }
    });

    var torsoToLeftUpperArm = Constraint.create({
        bodyA: torso,
        pointA: {
            x: -30 * scale,
            y: -35 * scale
        },
        pointB: {
            x: 0,
            y: -8 * scale
        },
        bodyB: leftUpperArm,
        // length: 0,
        stiffness: 0.6,
        render: {
            visible: false
        }
    });

    var torsoToLeftUpperLeg = Constraint.create({
        bodyA: torso,
        pointA: {
            x: -18 * scale,
            y: 35 * scale
        },
        pointB: {
            x: 0,
            y: -20 * scale
        },
        bodyB: leftUpperLeg,
        stiffness: 0.6,
        length: 2,
        render: {
            visible: false
        }
    });

    var torsoToRightUpperLeg = Constraint.create({
        bodyA: torso,
        pointA: {
            x: 18 * scale,
            y: 35 * scale
        },
        pointB: {
            x: 0,
            y: -20 * scale
        },
        bodyB: rightUpperLeg,
        length: 2,
        stiffness: 0.6,
        render: {
            visible: false
        }
    });

    var upperToLowerRightArm = Constraint.create({
        bodyA: rightUpperArm,
        bodyB: rightLowerArm,
        pointA: {
            x: 0,
            y: 15 * scale
        },
        pointB: {
            x: 0,
            y: -25 * scale
        },
        stiffness: 0.6,
        render: {
            visible: false
        }
    });

    var upperToLowerLeftArm = Constraint.create({
        bodyA: leftUpperArm,
        bodyB: leftLowerArm,
        pointA: {
            x: 0,
            y: 15 * scale
        },
        pointB: {
            x: 0,
            y: -25 * scale
        },
        stiffness: 0.6,
        render: {
            visible: false
        }
    });

    var upperToLowerLeftLeg = Constraint.create({
        bodyA: leftUpperLeg,
        bodyB: leftLowerLeg,
        pointA: {
            x: 0,
            y: 20 * scale
        },
        pointB: {
            x: 0,
            y: -20 * scale
        },
        stiffness: 0.6,
        render: {
            visible: false
        }
    });

    var upperToLowerRightLeg = Constraint.create({
        bodyA: rightUpperLeg,
        bodyB: rightLowerLeg,
        pointA: {
            x: 0,
            y: 20 * scale
        },
        pointB: {
            x: 0,
            y: -20 * scale
        },
        stiffness: 0.6,
        render: {
            visible: false
        }
    });

    var legToLeg = Constraint.create({
        bodyA: leftLowerLeg,
        bodyB: rightLowerLeg,
        stiffness: 0.01,
        render: {
            visible: false
        }
    });

    var person = Composite.create({
        bodies: [
            torso, head, leftLowerArm, leftUpperArm, 
            rightLowerArm, rightUpperArm, leftLowerLeg,
            rightLowerLeg, leftUpperLeg, rightUpperLeg
        ],
        constraints: [
            upperToLowerLeftArm, upperToLowerRightArm, torsoToLeftUpperArm, 
            torsoToRightUpperArm, headContraint, upperToLowerLeftLeg, 
            upperToLowerRightLeg, torsoToLeftUpperLeg, torsoToRightUpperLeg,
            legToLeg
        ]
    });

    World.add(engine.world, person);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    // Matter.Events.on(mouseConstraint, "mousedown", function(event) {
    //   World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    // });
    // engine.world.gravity.y = 0;
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    Engine.run(engine);

    Render.run(render);
})
</script>
<div>
    <div bind:this={jamesRagdoll} />
</div>
