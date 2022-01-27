<script>
import Intro from './intro/intro.svelte';
import Skills from './skills/skills.svelte';
import Portfolio from './portfolio/portfolio.svelte';
import Contact from './contact/contact.svelte';
import JamesRagdoll from 'jamesRagdoll';
</script>

<style type="text/scss">
.projects {
    position: relative;
    background: red;
    width: 100px;
    height: 100px;
}

</style>

<div class="section-container">
    <Intro />
</div>
<!-- <JamesRagdoll/> -->

<Skills />
<Portfolio />

<!-- <Contact /> -->