<template>
    <Head>
        <Title>Most Relevant Projects - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <a href="" class="back-button" @click.prevent="$router.back()">&#8630;</a>
            <div class="title">
                MOST RELEVANT PROJECTS
            </div>
        </div>

        <span class="mrp-text">Check out our 5 most relevant project:</span>

        <div class="most_relevant_projects">
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
                <!-- <h3>#1<br></h3> -->
            </div>

            <div id="list-container">
                <ProjectCard v-for = "project of others" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="true" />
            </div>

        </div>

        <hr class="separator " />

        <div class="links">
            <NuxtLink id="to_all_projects" to="/projects" class="mrp-link">See all the projects</NuxtLink><br>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="mrp-link">Check the projects divided by area</NuxtLink>
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
    .mrp-text {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        margin: 30px 0px 10px;
    }
    
    .first {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
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

    .mrp-link {
        color: ghostwhite;
        position: relative;
        font-size: 20px;
        font-weight: bold;
        margin: auto;
        border-radius: 10px;
        padding: 10px 20px;
        transition: all 0.2s;
    }

    .mrp-link:hover {
        color: black;
        background-color: rgba(248, 248, 255, 0.9);
        box-shadow: 3px 5px 20px 0 rgba(172,172,172,.5);
        text-decoration: underline;
        padding: 10px 30px;
    }

</style>
