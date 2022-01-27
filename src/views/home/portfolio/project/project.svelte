<script>
import sal from 'sal.js';
import "sal.js/dist/sal.css";
import { onMount } from "svelte";

export let title;
export let skills;
export let description;
export let img;
export let i;
export let link;


onMount(() => {
    sal({
        threshold: 0.1
    })
});

</script>

<style type="text/scss">
@import '../../../../shared/styles/_mixins';
.project {
    position: relative;
    width: 100%;
    padding: 5vh 0;
    margin: 0 auto;
    flex-wrap: wrap;
    overflow: hidden;
}


.title {
    position: relative;
    display: inline-block;
    border-bottom: solid var(--border-size-m) var(--je-red); 
}

.child {
    flex: 1;
    position: relative;
    min-width: 300px;
    @include break-up('lg') {
        margin: 2rem;
        min-width: 400px;
    }
}

.img {
    height: auto;
    transition: 1s;
    width: 100%;
}

.link-text {
    display: inline-block;
    color: var(--color-text-primary);
} 

.link {
    text-decoration: none;
    background: var(--je-red);
    padding: 1.5rem 2rem;
    border-radius: 5px;
    transition: 0.2s;
    color: white;

    &:hover {
        background: var(--je-gold);
    }
}

.text {
    font-size: var(--font-size-l);
    font-weight: var(--font-regular);
    @include break-up("lg") {
        font-size: var(--font-size-xl);
    }
}
</style>

<div class="project d-flex" data-sal="slide-up" data-sal-delay="0" data-sal-duration="500" data-sal-easing="ease-out-bounce">
    <div class="child child-left mb-4">
        <h2 class="mb-1 mt-0 pb-2 title">{title}</h2>
        <div>
            <p class="text pb-1">{description}</p>
            <a class="link mb-4" href="{link}" target="_blank"><h3 class="link-text mb-0">Visit</h3></a>
        </div>
    </div>
    <div class="child child-right">
        <div>
            <img class="img" src={img}/>
        </div>
        <div>
            {#each skills as skill, i}
            <p class="skill skill{i}">{skill}</p>
            {/each}
        </div>
    </div>
</div>
