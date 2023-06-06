<template>
    <main>
        <div class="title-area">
            <div class="title">
                MOST RELEVANT PROJECTS
            </div>
        </div>

        <div class="most_relevant_projects">
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
                <!-- <h3>#1<br></h3> -->
            </div>

            <div id="list-container">
                <ProjectCard v-for = "project of others" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="true" />
            </div>

        </div>

        <div class="links">
            <NuxtLink id="to_all_projects" to="/projects" class="my_link">All Projects</NuxtLink><br>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="my_link">Projects by Area</NuxtLink>
        </div>
    </main>
</template>

<script setup>
    const { data: Projects } = await useFetch('/api/top_projects');

    //split the projects so we can display the first one differently
    const first = Projects.value[0];
    const others = Projects.value.slice(1, Projects.value.length);
    
</script>

<style>
    .first {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }

    .text-content {
        background-color: #fff6f6d2;
        -webkit-box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        padding: 40px;
        margin-top: 30px;
        margin-bottom:30px;
        margin-left: 100px;
        margin-right: 100px;
        height: 100%;
    }

    .text-content:hover {
        background-color: rgba(255, 252, 244, 0.979);
        box-shadow: 40px 40px 80px 0  rgba(172,172,172,.5);
    }

    .par {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 1.6;
        color: black;
    }

    .header {
        color:white;
        text-align: center;
    }

    .links {
        text-align: center;
    }

    .my_link {
        color: rgba(255, 255, 255, 0.826);
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        margin-left: 40px;
        margin-right: 40px;
    }

    .my_link:hover {
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
        text-decoration: underline;
    }

</style>
