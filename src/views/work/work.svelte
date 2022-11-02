<script>
    import webBuilderReasons from './data';
    import { link } from 'svelte-spa-router'
</script>

<style type="text/scss">
@import '../../shared/styles/_mixins';

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

.email {
    transition: 0.2s;
    background-color: var(--je-red);
    border-radius: 5px;
    &:hover {
        background-color: var(--je-gold);
        cursor: pointer;
    }
}

.title {
    border-bottom: solid var(--border-size-s) var(--je-red);
    display: inline-block;
}

.wave-wrapper {
    margin-bottom: -5px;
}

.content-wrapper-package {
    width: 100%;
    background: white;
}

.content-wrapper-web {
    position: relative;
    margin-top: -10px;
    background-color: var(--je-tan);
    overflow: hidden;
    .wrapper {
        max-width: 800px;
        box-sizing: content-box;
    }
}
.web-builder-content {
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    .text {
        max-width: 500px;
    }
}
.website-package {
    max-width: 800px;
    margin: 0 auto;
}

.feature-title {
    margin-bottom: 0;
    padding-bottom: 1rem;
    display: inline-block;
    border-bottom: solid var(--border-size-s) var(--je-bg)
}

.waves-wrapper {
    background-color: white;
    overflow: hidden;
    position: relative;
}
.wave1 {
    transform: scale(-1, 1);
    position: absolute;
    width: 100%;
}

.wave2 {
    position: relative;
}


</style>

<div class="intro">
    <section class="name section-container">
        <h1>Web Design</h1>
        <h3>Fast and easy websites for small businesses</h3>
    </section>
    <section>
        <div class="mt-5 wave-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 164" fill="none">
                <path d="M861 36.4459C495.5 -105.554 400 217.946 0 149.446V163.5H861V36.4459Z" fill="white"/>
            </svg>
        </div>
        <div class="content-wrapper-package">
            <div class="section-container">
                <div class="text-center">
                    <h2 class="title text-center pb-1 mb-1 mt-0">How It Works</h2>
                </div>
                <p class="text-center mt-0">
                    From design to launch, we take care of the entire process.
                </p>
                <div class="website-package">
                    <h3 class="text-center pb-1 mb-1">For $150/month</h3>
                    <div>
                        <h4 class="feature-title">Full website design</h4>
                        <p>We will design up to a 5 page website. Generally consisting of a landing page, contact page, and a few product pages.</p>
                        <h4 class="feature-title">Unlimited revisions</h4>
                        <p>That's right! I want you to get the product you want. And when you to update it with new hours or products, I'm ready to make the change.</p>
                        <h4 class="feature-title">24/7 support</h4>
                        <p>Unexpected things can happen in the tech world. Servers can crash, websites can get overloaded, but with 24/7 support I'm ready to step in and fix it on the spot.</p>
                        <h4 class="feature-title">Analytics Dashboard</h4>
                        <p>Using the power of Google Analytics, you'll be able to have crucial insight into your userbase.</p>
                        <h4 class="feature-title">Responsive layouts built for desktop and mobile devices</h4>
                        <p>Your website will load just as fast and be just as smooth on mobile phones as on a desktop.</p>
                        <h4 class="feature-title">Frequent full website audits</h4>
                        <p>With me, you'll get full website audits to ensure the best SEO practices are in place, no bugs have come up, and that the user experience is never broken.</p>
                        <h4 class="feature-title">SEO and Speed Scores</h4>
                        <p>View for yourself how fast and optimized your site will be.</p>
                    </div>
                    <div>
                    <a href="/contact" use:link class="btn my-6">Get started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="waves-wrapper">
        <div class="wave1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 164" fill="#8BDADA">
                <path d="M861 36.4459C495.5 -105.554 400 217.946 0 149.446V163.5H861V36.4459Z" fill="#8BDADA"/>
            </svg>
        </div> 
        
         <div class="wave2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 200" fill="none">
                <path d="M861 36.4459C495.5 -105.554 400 217.946 0 149.446V200H861V36.4459Z" fill="#FCF5E2"/>
            </svg>
        </div>
    </div>
    <section class="content-wrapper-web">
        <div class="section-container wrapper">
            <div class="text-center">
                <h3 class="title pb-1 mb-1">Why not use a website builder?</h3>
            </div>
            {#each webBuilderReasons as { icon, text, title }}
            <div class="d-flex align-items-center web-builder-content">
                <div class="m-5">{@html icon}</div>
                <div>
                    <h4 class="feature-title">{title}</h4>
                    <div class="text">
                    {#each text as bullet}
                        <p>{bullet}</p>
                    {/each}
                    </div>
                </div>
            </div>
            {/each}
            <a href="/contact" use:link class="btn mx-0 mx-md-5 my-5 get-started">Get started</a>
        </div>
    </section>
</div>
