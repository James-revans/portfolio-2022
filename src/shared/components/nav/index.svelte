<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
    import Hamburger from 'svelte-hamburgers';
    import { link } from 'svelte-spa-router'

    export let open;
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Web Design',
            path: '/work'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ]
</script>

<svelte:head>
	<!-- Import base css -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<!-- Import spin css (spin is default type) -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css" />
</svelte:head>

<div class="hamburger">
    <Hamburger bind:open --color="black"/>
</div>
<nav class:nav-active={open} class="nav">
    {#if open}
        <div class="links mt-6 pt-6">
            {#each links as {name, path}, i}
                <p in:fly={{ y: -15, delay: 50 * i }}>
                    <a class="link" on:click={()=> {open = false}} use:link href={path}>{name}</a>
                </p>
            {/each}
        </div>
    {/if}
</nav>

<style type="text/scss">
    @import '../../styles/_mixins';
    .nav {
        position: fixed;
        top: 0;
        right: 0;
        height: 0;
        width: 100vw;
        z-index: 0;
    }
    .nav-active {
        background-color: var(--je-tan);
        height: 100vh;
        width: 100vw;
        z-index: 1000;
    }
    .hamburger {
        position: fixed;
        text-align: right;
        width: 100%;
        z-index: 1001;
    }
    .links {
        text-align: center;
    }
    a {
        font-size: var(--font-size-xl);
        font-weight: var(--font-bold);
        color: black;
        text-decoration: none;
        margin-left: 20px;
        padding-bottom: 2px;
    }

    @include break-up('lg') {
        a {
            font-size: var(--font-size-xxl);
        }
    }
    a:hover {
        border-bottom: solid 10px var(--je-red);
        transition: 0.2s;
    }
    
    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
</style>
