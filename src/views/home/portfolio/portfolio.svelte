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
    position: relative;
    margin-top: -10px;
    background-color: var(--je-tan);
    overflow: hidden;

}

</style>

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

<div class="projects-wrapper">
    <div class="section-container">
        {#each projects as {title, skills, description, img, link}, i}
        <Project {title} {skills} {description} {img} {i} {link}/>
        {/each}
    </div>
</div>


