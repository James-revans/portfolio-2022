<script>
import sal from 'sal.js';
import "sal.js/dist/sal.css";
import { onMount } from "svelte";
import data from './data';

import JamesRagdoll from 'jamesRagdoll';

let y;

onMount(() => {
    sal({
        threshold: 1
    })
});

</script>

<style class="text/scss">
.wave-wrapper {
    margin-bottom: -5px;
}

.skills-wrapper {
    background: white;
    width: 100%;
}

.section {
    flex: 1;
}

.skill-row {
    flex-wrap: wrap;
}

.title {
    border-bottom: solid var(--border-size-s) var(--je-red);
    display: inline-block;
}

iframe {
    width: 200px;
    height: 200px;
}

</style>

<div class="mt-5 wave-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 164" fill="none">
        <path d="M861 36.4459C495.5 -105.554 400 217.946 0 149.446V163.5H861V36.4459Z" fill="white"/>
    </svg>
</div>
<!-- 
<div class="skills-wrapper pb-5">
    <h2 class="text-center mt-0">Skills</h2>
    <div class="section-container">
        {#each data as {title, items}}
            <div class="section">
                <h3 class="title mb-1">
                    {title}
                </h3>
                {#each items as itemArr, i}
                <div class="d-flex">
                    {#each itemArr as item}
                    <p class="item mr-1 mb-0 p-1 item{i}">{item}</p>
                    {/each}
                </div>
                {/each}
            </div>
        {/each}
    </div>
</div> -->

<div class="skills-wrapper pb-5">
    <h2 class="text-center mt-0">Skills</h2>
    <div class="d-flex justify-content-between">
        <div class="section-container">
            {#each data as {title, items}}
                <div class="section" data-sal="slide-up" data-sal-delay="200" data-sal-duration="500" data-sal-easing="ease-out-bounce">
                    <h3 class="title pb-1 mb-1">
                        {title}
                    </h3>
                    <div class="d-flex skill-row">
                        {#each items as item, i}
                            <p class="skill skill{i}">{item}</p>
                        {/each}
                    </div>

                </div>
            {/each}
        </div>
        <!-- <JamesRagdoll /> -->
        <!-- <iframe src='https://my.spline.design/redcube-f057023bc5e920630577d55493af2c49/' frameborder='0' width='100%' height='100%'></iframe> -->
    </div>

</div>

