<template>
    <Head>
        <Title>Portfolio - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <a href="" class="back-button" @click.prevent="$router.back()">&#8630;</a>
            <div class="title">
                PORTFOLIO
            </div>
        </div>

        <div class="portfolio-content">
            <div class="portfolio-section">
                <p class="par">
                    Welcome to <strong>Wizarding Ventures</strong>' Portfolio Page. We are delighted to present our carefully curated selection of investments in innovative startups across a wide range of industries. Our venture capital firm is committed to supporting visionary entrepreneurs and transformative ideas that have the potential to reshape industries and drive positive change.<br>
                    Within our diverse portfolio, you will discover dynamic companies revolutionizing sectors such as technology, healthcare, renewable energies, education, transportation, and more. Each investment undergoes a rigorous evaluation process, considering factors such as market potential, scalability, and alignment with our core values.</p>
            </div>
            
            <div class="portfolio-section">
                <p class="par">
                    We take an active approach to supporting our portfolio companies, offering more than just capital. Our experienced team provides strategic guidance, industry insights, and valuable connections to help entrepreneurs navigate the challenges of scaling their businesses, accessing new markets, and maximizing their potential for success.<br>
                    At <strong>Wizarding Ventures</strong>, we believe in the power of entrepreneurship to create significant financial returns while making a lasting impact on society. Our investments are not only driven by financial considerations but also by our commitment to excellence, innovation, and sustainability. We seek out startups that are at the forefront of emerging trends and have the potential to address pressing global challenges.</p>
            </div>

            <div class="portfolio-section">
                <p class="par">
                    By investing in these pioneering ventures, we aim to contribute to the advancement of cutting-edge technologies, improve lives, and create sustainable value. Our portfolio represents a testament to our belief in the transformative potential of visionary ideas and the collective drive to shape a brighter future.<br>
                    Please note that due to the confidentiality of certain investments, not all companies may be listed on this public portfolio page. For more information about our full portfolio, investment opportunities, or partnership inquiries, we invite you to contact our team directly.</p>
            </div>

            <div class="portfolio-section">
                <p class="par">
                    Thank you for visiting <strong>Wizarding Ventures</strong>' Portfolio Page. We are excited to share the success stories and transformative impact of our portfolio companies with you. Together, let's explore the world of innovation, entrepreneurship, and the extraordinary possibilities that lie ahead.</p>
            </div>
    </div>

    <hr class="separator " />

        <div class="most_relevant_projects">
            <h1 class="header">This is our most relevant project at the moment:</h1>
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
            </div>

        </div>

        <hr class="separator " />

        <div class="links">
            <NuxtLink id="to_all_projects" to="/projects" class="prtf-link">Check all the projects</NuxtLink><br>
            <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects" class="prtf-link">See the most relevant projects</NuxtLink><br>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="prtf-link">Check the projects by area</NuxtLink>
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

    .portfolio-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px 0px;
    }

    .portfolio-section {
        background-color: #fff6f6d2;
        -webkit-box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        box-shadow: 15px 15px 30px 0 rgba(172,172,172,.5);
        padding: 20px 40px;
        margin: 10px 150px;
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
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 3% 0%;
    }

    .prtf-link {
        color: ghostwhite;
        position: relative;
        font-size: 20px;
        font-weight: bold;
        margin: auto;
        border-radius: 10px;
        padding: 10px 20px;
        transition: all 0.2s;
    }

    .prtf-link:hover {
        color: black;
        background-color: rgba(248, 248, 255, 0.9);
        box-shadow: 3px 5px 20px 0 rgba(172,172,172,.5);
        text-decoration: underline;
        padding: 10px 30px;
    }

    .prtf-link:active {
        transform: scale(0.95);
    }

</style>
