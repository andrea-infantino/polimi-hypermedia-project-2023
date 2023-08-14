<template>
    <Head>
        <Title>Portfolio - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'PORTFOLIO'" />

        <ContentRenderer :data="data">
            <!-- rendering the paragraphs iteratively -->
            <div class="paragraphs">
                <div v-for="paragraph in data[0].paragraphs" class="white-cloud">
                    <img v-if="paragraph.id==1" class="prft1-img" src="../assets/img/portfolio/prtf1.jpg" alt="">   <!--decorative img-->
                    <img v-if="paragraph.id==2" class="prtf2-img" src="../assets/img/portfolio/prtf2.jpg" alt="">   <!--decorative img-->
                    <img v-if="paragraph.id==3" class="prtf3-img" src="../assets/img/portfolio/prtf3.jpg" alt="">   <!--decorative img-->
                    <p class="white-cloud-text" v-html="paragraph.content"></p>
                </div>
            </div>
        </ContentRenderer>

        <hr class="separator" />

        <div class="most-relevant-projects">
            <h1 class="mrp-section-title">This is our most relevant project at the moment:</h1>
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
            </div>

        </div>

        <hr class="separator" />

        <div class="bottom-links">
            <NuxtLink id="to_all_projects" to="/projects" aria-label="Link to all projects"><button class="transparent-btn">Check all the projects</button></NuxtLink>
            <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects" aria-label="Link to most relevant projects"><button class="transparent-btn">See the most relevant projects</button></NuxtLink>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area" aria-label="Link to projects by area"><button class="transparent-btn">Check the projects by area</button></NuxtLink>
        </div>

    </main>
</template>

<script setup>
    //get text content from the JSON file
    const { data } = await useAsyncData('portfolio', () => { return queryContent('/portfolio').find()})

    //get the most relevant project
    const { data: Projects } = await useFetch('/api/portfolio');

    //split the projects so we can display the first one differently
    const first = Projects.value[0];

    //Search Engine Optimization
    const description = ref('In this page you can find more information on the investment process.')
    const keywords = ref('Portfolio, Entrepreneurship, Innovation, Investment, Startups, Capital, Financial Returns, Impact, Innovation')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]
    })
</script>

<style>
    .mrp-section-title {
        text-align: center;
        padding: 20px;
        font-size: 1.7rem;
        color: white;
        text-align: center;
    }

    .prft1-img, .prtf2-img, .prtf3-img {
        float: right;
        margin-left: 30px;
        margin-bottom: 15px;
        width: 13.5%;
        height: auto;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
    }

    .prft1-img {
        float: left;
        margin-right: 40px;
        margin-left: 0px;
        width: 20%;
    }

    .prtf3-img {
        float: left;
        margin-right: 40px;
        margin-left: 0px;
        width: 29%;
    }

    @media screen and (max-width: 800px) {
        .prft1-img {
            float: right;
            width: 40%;
            margin: 0 0 15px 15px;
        }

        .prtf2-img {
            width: 50%;
            margin: 0 0 15px 15px;
        }

        .prtf3-img {
            float: none;
            margin: 0 0 15px;
            width: 100%;
        }
    }
</style>
