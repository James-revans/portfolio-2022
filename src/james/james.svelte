<script>
import {onMount} from 'svelte';
export let limbs = {
    lArm: {
        before: 0,
        after: 0,
        time: 0
    },
    lFore: {
        before: 0,
        after: 0,
        time: 0
    },
    rArm: {
        before: 0,
        after: 0,
        time: 0
    },
    rFore: {
        before: 0,
        after: 0,
        time: 0
    },
    lLeg: {
        before: 0,
        after: 0,
        time: 0
    },
    lShin: {
        before: 0,
        after: 0,
        time: 0
    },
    rLeg: {
        before: 0,
        after: 0,
        time: 0
    },
    rShin: {
        before: 0,
        after: 0,
        time: 0
    }, 
}
export let body = {
    before: {
        deg: 0,
        X: 0,
        Y: 0,
    },
    after: {
        deg: 0,
        X: 0,
        Y: 0,
    },
    time: 0,
}
let values = {
    body: {
        deg: 0,
        X: 0,
        Y: 0,
        time: 0,
    },
    lArm: {
        deg: 15,
        time: 0,
    },
    lFore: {
        deg: -120,
        time: 0,
    },
    rArm: {
        deg: -20,
        time: 0,
    },
    rFore: {
        deg: 120,
        time: 0,
    },
    lLeg: {
        deg: -10,
        time: 0,
    },
    lShin: {
        deg: 0,
        time: 0,
    },
    rLeg: {
        deg: 0,
        time: 0,
    },
    rShin: {
        deg: 35,
        time: 0,
    },
}


const setBodyBefore = () => {
    values.body.deg = body.before.deg;
    values.body.time = body.time/1000;
    values.body.X = body.before.X;
    values.body.Y = body.before.Y;
}

const setBodyAfter = () => {
    values.body.deg = body.after.deg;
    values.body.X = body.after.X;
    values.body.Y = body.after.Y;
}

const animation = (i) => {
    for(let [key, {before, after, time}] of Object.entries(limbs)) {
        if(i%2 === 0) {
            values[key].deg = before;
            setBodyBefore();
        } else {
            values[key].deg = after;
            setBodyAfter();
        }
        values[key].time = time/1000;
        setTimeout(() => {
            if(i%2 === 0) {
                values[key].deg = after;
                setBodyAfter();
            } else  {
                values[key].deg = before;
                setBodyBefore();
            }
        }, 1);
    }
}

const loopAnimation = () => {
    let i = 0;
    setTimeout(() => {
        animation(i);
    }, 500);
    const loop = () => {
        if(i < 50) {
            setTimeout(() => {
                console.log('starting');
                i++
                animation(i);
                loop();
            }, 3000)
        }
    }
    loop();
}
onMount(() => {
    loopAnimation();
})
</script>

<div class="james" style="transform: rotate({values.body.deg}deg) translate({values.body.X}px, {values.body.Y}px);  transition: {values.body.time}s;">
    <div class="head">
        <div class="hair"></div>
        <div class="face">
            <div class="brow"></div>
            <div class="brow2 brow"></div>
            <div class="eye"></div>
            <div class="eye eye2"></div>
            <div class="nose"></div>
            <div class="mouth">
                <div class="tongue"></div>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="neck"></div>
        <div class="torso">
            <div class="shoulder-left">
                <div class="arm" style="transform: rotate({values.lArm.deg}deg); transition: {values.lArm.time}s">
                    <div class="arm-start"></div>
                    <div class="arm-end" style="transform: rotate({values.lFore.deg}deg); transition: {values.lFore.time}s"></div>
                </div>
            </div>
            <div class="shoulder-left shoulder-right">
                <div class="arm arm2" style="transform: rotate({values.rArm.deg}deg); transition: {values.rArm.time}s">
                    <div class="arm-start arm-start2"></div>
                    <div class="arm-end arm-end2" style="transform: rotate({values.rFore.deg}deg); transition: {values.rFore.time}s"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="lower-body">
        <div class="waist">
            <div class="hip-left">
                <div class="leg" style="transform: rotate({values.lLeg.deg}deg); transition: {values.lLeg.time}s">
                    <div class="leg-start"></div>
                    <div class="shin" style="transform: rotate({values.lShin.deg}deg); transition: {values.lShin.time}s"></div>
                </div>
            </div>
            <div class="hip-right">
                <div class="leg leg2" style="transform: rotate({values.rLeg.deg}deg); transition: {values.rLeg.time}s">
                    <div class="leg-start leg-start2"></div>
                    <div class="shin shin2" style="transform: rotate({values.rShin.deg}deg); transition: {values.rShin.time}s"></div>
                </div>
            </div>
        </div>

    </div>
</div>

<style type="text/scss">
.james {
    position: relative;
    top: -70px;  
     
    .head {
        position: relative;
        display: flex;
        justify-content: center;
        height: auto;
        .hair {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: var(--hair);
            border-radius: 45%;
            border-top-left-radius: 7%;
        }
        .face {
            width: 90px;
            height: 95px;
            background-color: var(--skin);
            position: relative;
            border-radius: 30%;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
            top: 33px;
            .brow {
                position: absolute;
                width: 21px;
                height: 7px;
                border-radius: 10px;
                background-color: var(--hair);
                top: 17px;
                left: 12px;
                transform: rotate(-10deg);
            }
            .brow2 {
                transform: rotate(10deg);
                right: 12px;
                left: auto;
            }
            .eye {
                position: absolute;
                width: 12px;
                height: 13px;
                border-radius: 100%;
                background-color: var(--hair);
                top: 33px;
                left: 16px;
            }
            .eye2 {
                right: 16px;
                left: auto;
            }
            .nose {
                position: relative;
                width: 10px; 
                height: 16px;
                border-radius: 10px;
                background-color: var(--skin2);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .mouth {
                position: relative;
                width: 35px;
                height: 15px;
                background-color: var(--dark-1);
                top: 50%;
                left: 50%;
                transform: translate(-50%, 0);
                border-bottom-left-radius: 14px;
                border-bottom-right-radius: 14px;
                overflow: hidden;
                .tongue {
                    position: absolute;
                    width: 25px; 
                    height: 15px;
                    background-color: var(--je-red);
                    bottom: -8px;
                    right: -5px;
                    border-top-left-radius: 100px;
                    border-top-right-radius: 100px;
                    border-bottom-left-radius: 0px;
                    border-bottom-right-radius: 0px;
                }
            }
        }
    }
    .body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .neck {
            position: relative;
            top: 25px;
            width: 35px;
            height: 25px;
            background-color: var(--skin);
            border-bottom-right-radius: 25px;
            border-bottom-left-radius: 25px;
            z-index: 1001;
        }
        .torso {
            position: relative;
            top: 15px;
            width: 110px;
            height: 138px;
            background-color: var(--shirt);
            z-index: 1000;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            .shoulder-left {
                position: absolute;
                top: 20px;
                left: 5px;
                width: 30px;
                .arm {
                    position: relative;
                    transform-origin: top;
                    .arm-start {
                        position: relative;
                        width: 30px;
                        height: 85px;
                        background-color: var(--shirt);
                        border-radius: 30px;
                        z-index: 1002;
                    }
                    .arm-end {
                        position: relative;
                        width: 30px;
                        height: 85px;
                        top: -15px;
                        background-color: var(--skin);
                        transform-origin: top;
                        border-radius: 30px;
                        z-index: 1000;
                    }
                }
            }
            .shoulder-right {
                top: 20px;
                right: 5px;
                left: auto;
            }
        }
    }
    .lower-body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .waist {
            position: relative;
            width: 110px;
            height: 40px;
            background-color: var(--pants);
            display: flex;
            justify-content: space-between;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            .hip-left {
                width: 50px;
            }
            .leg {
                transform-origin: top;
                .leg-start {
                    width: 50px;
                    height: 100px;
                    border-radius: 50px;
                    background-color: var(--pants);
                }
                .shin {
                    position: relative;
                    width: 48px;
                    height: 120px;
                    top: -25px;
                    background-color: var(--pants);
                    transform-origin: top;
                    border-radius: 30px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    z-index: 1000;
                }
            }
            .hip-right {
                width: 50px;
                .leg2 {
                    transform-origin: top left;
                }
            }
        }

    }
}

</style>