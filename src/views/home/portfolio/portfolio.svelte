<script>
import projects from "./data";
import Project from "./project/project.svelte";

</script>

<style type="text/scss">
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

.projects-wrapper {
    border: solid thick var(--je-tan);
    margin-top: -3px;
    position: relative;
    overflow: hidden;
}

</style>

<div class="waves-wrapper">
    <div class="wave1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 164" fill="none">
            <path d="M861 36.4459C495.5 -105.554 400 217.946 0 149.446V163.5H861V36.4459Z" fill="#8BDADA"/>
        </svg>
    </div> 
    
     <div class="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 164" fill="#fcf5e2">
            <path d="M861 36.4459C495.5 -105.554 400 217.946 0 149.446V163.5H861V36.4459Z" fill="#fcf5e2" stroke="#fcf5e2"/>
        </svg>
    </div>
</div>

<div class="projects-wrapper section-container">
    <!-- <iframe src='https://my.spline.design/projects-e7904eb457638a57b1390a6b3df42106/' frameborder='0' width='100%' height='100%'></iframe> -->
    {#each projects as {title, skills, description, img, link}, i}
    <Project {title} {skills} {description} {img} {i} {link}/>
    {/each}
</div>

