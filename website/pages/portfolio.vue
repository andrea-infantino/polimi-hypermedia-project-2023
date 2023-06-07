<template>
    <Head>
        <Title>Portfolio - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <div class="title">
                PORTFOLIO
            </div>
        </div>

        <div class="text-content">
            <p class="par">
                Our investment strategy combines a discerning eye for transformative ideas, a focus on long-term success, and a commitment to collaboration and support. We scout promising ventures, foster synergies among our portfolio companies, provide comprehensive support beyond financial investment, prioritize sustainable growth, embrace diversification, and employ thorough evaluation and analysis. This strategic approach propels us towards financial success while shaping the future of magic and fostering innovation in the magical realm.
            </p>
        </div>

        <div class="most_relevant_projects">
            <h1 class="header">Our most relevant project</h1>
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
            </div>

        </div>

        <div class="links">
            <NuxtLink id="to_top_projects" to="/top_projects" class="my_link">Top Projects</NuxtLink><br>
            <NuxtLink id="to_all_projects" to="/projects" class="my_link">All Projects</NuxtLink><br>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="my_link">Projects by Area</NuxtLink>
        </div>
    </main>
</template>

<script setup>
    const { data: Projects } = await useFetch('/api/portfolio');

    //split the projects so we can display the first one differently
    const first = Projects.value[0];

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
        box-shadow: 15px 15px 30px 0 rgba(172,172,172,.5);
        padding: 40px;
        margin: 40px 150px;
        height: 100%;
        border-radius: 10px;
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
