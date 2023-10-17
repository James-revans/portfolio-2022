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
.web-builder-content-wrapper {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
}
.web-builder-content {
    flex-wrap: wrap;
    justify-content: center;
    max-width: 300px;
    .text {
        max-width: 500px;
    }
    // border: solid thick var(--je-gold);
    background-color: var(--je-bg);
    color: white;
}
.website-package {
    max-width: 800px;
    margin: 0 auto;
}
.feature-card {
    
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
                
                    <div class="feature-cards">
                        <div class="feature-card">
                            <h4 class="feature-title">Full website design</h4>
                            <p>We will create a professional and visually appealing website from scratch, customizing it to align with your brand identity and business goals. Our team of experienced designers will ensure your website stands out and captivates your target audience.</p>
                        </div>
                        <div class="feature-card">
                            <h4 class="feature-title">Unlimited revisions</h4>
                            <p>We understand the importance of getting your website just right. That's why we offer unlimited revisions, allowing you to provide feedback and make changes until you are completely satisfied with the final result.</p>
                        </div>
                        <div class="feature-card">
                            <h4 class="feature-title">24/7 support</h4>
                            <p>We believe in providing exceptional customer service, which is why we offer 24/7 support. Whether you have questions, need assistance, or encounter technical issues, our dedicated support team is always available to help you promptly.</p>
                        </div>
                        <div class="feature-card">
                            <h4 class="feature-title">Analytics Dashboard</h4>
                            <p>Gain valuable insights into your website's performance with our analytics dashboard. Track visitor behavior, monitor traffic sources, and measure conversion rates, empowering you to make data-driven decisions to optimize your online presence.</p>
                        </div>
                        <div class="feature-card">
                            <h4 class="feature-title">Responsive layouts built for desktop and mobile devices</h4>
                            <p>Your website will be designed with responsive layouts, ensuring it looks stunning and functions seamlessly on both desktop and mobile devices. This way, you can provide an exceptional user experience to visitors, regardless of the device they use.</p>
                        </div>
                        <div class="feature-card">
                            
                            <h4 class="feature-title">Frequent full website audits</h4>
                            <p>We conduct regular comprehensive audits of your website to identify any potential issues or areas for improvement. This proactive approach allows us to ensure your website is running smoothly, up to date, and optimized for performance and security.</p>
                        </div>
                        <div class="feature-card">
                            
                            <h4 class="feature-title">SEO and Speed Scores</h4>
                            <p>We prioritize search engine optimization (SEO) and site speed to enhance your website's visibility and user experience. Our experts will optimize your website's structure, content, and technical aspects, improving your SEO rankings and speed scores, ultimately driving more traffic and engagement.</p>
                        </div>
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
                <h3 class="title pb-1 mb-3">Why not use a website builder?</h3>
            </div>
            <div class="web-builder-content-wrapper d-flex">
                {#each webBuilderReasons as { icon, description, title }}
                <div class="d-flex align-items-center web-builder-content p-2">
                    <!-- <div class="m-5">{@html icon}</div> -->
                    <div>
                        <h4 class="feature-title">{title}</h4>
                        <p class="text">
                            {description}
                        </p>
                    </div>
                </div>
                {/each}
            </div>
            <a href="/contact" use:link class="btn mx-0 mx-md-5 my-5 get-started">Get started</a>
        </div>
    </section>
</div>
