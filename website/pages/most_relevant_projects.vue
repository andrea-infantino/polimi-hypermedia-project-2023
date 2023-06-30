<template>
    <Head>
        <Title>Most Relevant Projects - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'MOST RELEVANT PROJECTS'" />

        <span class="mrp-text">Check out our 5 most relevant projects:</span>

        <div class="most_relevant_projects">
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
            </div>

            <div id="list-container">
                <ProjectCard v-for = "project of others" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="true" />
            </div>

        </div>

        <hr class="separator" />

        <div class="links">
            <NuxtLink id="to_all_projects" to="/projects"><button class="bottom-link">See all the projects</button></NuxtLink>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area"><button class="bottom-link">Check the projects divided by area</button></NuxtLink>
        </div>
    </main>
</template>

<script setup>
    const { data: Projects } = await useFetch('/api/top_projects');

    //split the projects so we can display the first one differently
    const first = Projects.value[0];
    const others = Projects.value.slice(1, Projects.value.length);

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

    .header {
        color:white;
        text-align: center;
    }

    .links {
        display: flex;
        justify-content: space-around;
        margin: 3% 0%;
        flex-wrap: wrap;
    }

    .bottom-link {
        color: ghostwhite;
        background-color: transparent;
        font-family: inherit;
        border: transparent;
        position: relative;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        padding: 10px 20px;
        margin: 0 10px;
        transition: all 0.2s;
        cursor: pointer;
    }

    .bottom-link:hover {
        color: black;
        background-color: rgba(248, 248, 255, 0.9);
        box-shadow: 3px 5px 20px 0 rgba(172,172,172,.5);
        text-decoration: underline;
        padding: 10px 30px;
        margin: 0;
    }

    .bottom-link:active {
        box-shadow: 3px 5px 20px 14px rgba(172,172,172,.5);
    }

</style>
