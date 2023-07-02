<template>
    <Head>
        <Title>Most Relevant Projects - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'MOST RELEVANT PROJECTS'" />

        <span class="mrp-text">Check out our 5 most relevant projects:</span>

        <div class="most-relevant-projects">
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
            </div>

            <div id="generic-cards-container">
                <ProjectCard v-for = "project of others" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="true" />
            </div>

        </div>

        <hr class="separator" />

        <div class="bottom-links">
            <NuxtLink id="to_all_projects" to="/projects"><button class="transparent-btn">See all the projects</button></NuxtLink>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area"><button class="transparent-btn">Check the projects divided by area</button></NuxtLink>
        </div>
    </main>
</template>

<script setup>
    const { data: Projects } = await useFetch('/api/top_projects'); //get the most relevant projects

    //split the projects so we can display the first one differently
    const first = Projects.value[0];
    const others = Projects.value.slice(1, Projects.value.length);

    //Search Engine Optimization
    const description = ref('In this page you will find the 5 most relevant projects.')
    const keywords = ref('Projects, Investments, Most Relevant Projects, Top Projects, Most Important Projects')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]
    })
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
        padding-top: 15px;
        margin-bottom: 30px;
    }
</style>
