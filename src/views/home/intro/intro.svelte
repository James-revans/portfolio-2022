<script>
import James from "james";

let limbs = {    
    lArm: {        
        before: 15,        
        after: 30,
        time: 600
    },
    lFore: {
        before: -120,
        after: 10,
        time: 1300
    },
    rArm: {
        before: -20,
        after: -160,
        time: 1400
    },
    rFore: {
        before: 120,
        after: -5,
        time: 800
    },
    lLeg: {
        before: -10,
        after: 5,
        time: 1000
    },
    lShin: {
        before: 0,
        after: 0,
        time: 1000
    },
    rLeg: {
        before: 0,
        after: -5,
        time: 1000
    },
    rShin: {
        before: 35,
        after: 0,
        time: 1000
    }, 
}
let body = {
    before: {
        deg: 0,
        X: 0,
        Y: 0,
    },
    after: {
        deg: -5,
        X: 0,
        Y: 0,
    },
    time: 1000,
}

// let limbs = {
//     lArm: {
//         before: 15,
//         after: 120,
//         time: 600
//     },
//     lFore: {
//         before: -120,
//         after: 70,
//         time: 1300
//     },
//     rArm: {
//         before: -20,
//         after: -25,
//         time: 1000
//     },
//     rFore: {
//         before: 120,
//         after: 5,
//         time: 800
//     },
//     lLeg: {
//         before: -10,
//         after: 2,
//         time: 1000
//     },
//     lShin: {
//         before: 0,
//         after: 0,
//         time: 1000
//     },
//     rLeg: {
//         before: 0,
//         after: 0,
//         time: 1000
//     },
//     rShin: {
//         before: 35,
//         after: -5,
//         time: 1000
//     }, 
// }

</script>

<style type="text/scss">
@import '../../../shared/styles/_mixins';

.intro {
    position: relative;
    z-index: 1;
}

.name {
    margin: 100px auto;
    text-align: center; 
}
.name h1 {
    display: inline-block;
    padding-bottom: 15px;
    margin: 0;
    border-bottom: solid var(--border-size-m) var(--je-red); 
}

.about {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @include break-up('lg') {
        justify-content: center;
    }
}

.about .text {
    border: solid var(--border-size-s) var(--je-red);
    padding: 40px; 
    width: 100%;

    p {
        font-size: var(--font-size-m);
    }

    @include break-up('lg') {
        max-width: 600px;
        p {
            font-size: var(--font-size-l);
        }
    }
}

.email {
    transition: 0.2s;
    background-color: var(--je-red);
    border-radius: 5px;
    &:hover {
        background-color: var(--je-gold);
        cursor: pointer;
    }
}

.img-email {
    height: 40px;
    width: auto;
}

.img {
    height: 30px;
    width: auto;
}

a {
    text-decoration: none;
    color: var(--je-primary);
}

</style>

<div class="intro">
    <div class="name">
        <h1>James Evans</h1>
        <h3>Front End Developer</h3>
    </div>
    <div class="about">
        <div class="text">
            <p>Hey there! I’m James, a Front End Developer from Seattle. I’m a self starter with a drive to learn the newest tech I can get my hands on. I have experience in large scale companies like Amazon, but also in start ups and the freelance world. Let’s chat! </p>
            <div class="d-flex align-items-center">
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=evans.james00@gmail.com" target="_blank">
                    <img class="img-email" src="images/iconmonstr-email.svg"/>
                </a>
                <a href="https://www.linkedin.com/in/james-evans-46020314a/" target="_blank">
                    <img class="img ml-2" src="images/iconmonstr-linkedin-1.svg"/>
                </a>
            </div>
        </div>
        <div class="james mt-3"><James {limbs} {body}/></div>
    </div>
</div>

