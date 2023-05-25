<template>
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
            <h1 class="header">Our most relevant projects</h1>
            
            <div id="list-container">
                <ProjectCard v-for = "project of Projects" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id"/>
            </div>

        </div>

        <div class="links">
            <NuxtLink id="to_all_projects" to="/projects" class="my_link">All Projects</NuxtLink><br>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="my_link">Projects by Area</NuxtLink>
        </div>
    </main>
</template>

<script setup>
    const { data: Projects } = await useFetch('/api/portfolio')
</script>

<style>

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

</style>
