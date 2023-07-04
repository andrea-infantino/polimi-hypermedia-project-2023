<template>
    <Head>
        <Title>Portfolio - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'PORTFOLIO'" />

        <div class="paragraphs">
            <div class="white-cloud">
                <img class="prft1-img" src="../assets/img/portfolio/prtf1.jpg" alt="">
                <p class="white-cloud-text">
                Welcome to <b>Wizarding Ventures</b>' Portfolio Page. We are delighted to present our carefully curated selection of investments in innovative startups across a wide range of industries. Our venture capital firm is committed to supporting <b>visionary entrepreneurs</b> and transformative ideas that have the potential to reshape industries and drive positive change.<br>
                Within our diverse portfolio, you will discover dynamic companies revolutionizing sectors such as technology, healthcare, renewable energies, education, transportation, and more. Each investment undergoes a rigorous evaluation process, considering factors such as market potential, scalability, and alignment with our <b>core values</b>.</p>
            </div>
            
            <div class="white-cloud">
                <img class="prtf2-img" src="../assets/img/portfolio/prtf2.jpg" alt="">
                <p class="white-cloud-text">
                We take an active approach to supporting our portfolio companies, offering more than just capital. Our experienced team provides <b>strategic guidance</b>, industry insights, and valuable <b>connections</b> to help entrepreneurs navigate the challenges of scaling their businesses, accessing new markets, and maximizing their potential for success.<br>
                At <b>Wizarding Ventures</b>, we believe in the power of <b>entrepreneurship</b> to create significant financial returns while making a lasting impact on society. Our investments are not only driven by financial considerations but also by our commitment to <b>excellence</b>, <b>innovation</b>, and <b>sustainability</b>. We seek out startups that are at the forefront of emerging trends and have the potential to address pressing global challenges.</p>
            </div>

            <div class="white-cloud">
                <img class="prtf3-img" src="../assets/img/portfolio/prtf3.jpg" alt="">
                <p class="white-cloud-text">
                By investing in these <b>pioneering ventures</b>, we aim to contribute to the advancement of cutting-edge technologies, improve lives, and create sustainable value. Our portfolio represents a testament to our belief in the transformative potential of <b>visionary ideas</b> and the collective drive to shape a brighter future.<br>
                Moreover, our dedicated team of <b>experts</b> closely collaborates with our portfolio companies, offering strategic guidance and resources to nurture their growth and maximize their <b>impact</b>. For more information about our full portfolio, investment opportunities, or partnership inquiries we invite you to <NuxtLink to="/contacts" class="contact-link-text">contact our team directly</NuxtLink>.</p>
            </div>

            <div class="white-cloud">
                <p class="white-cloud-text">
                Thank you for visiting <strong>Wizarding Ventures</strong>' Portfolio Page. We are excited to share the success stories and transformative impact of our portfolio companies with you. Together, let's explore the world of innovation, entrepreneurship, and the extraordinary possibilities that lie ahead.</p>
            </div>

        </div>

        <hr class="separator" />

        <div class="most-relevant-projects">
            <h1 class="mrp-section-title">This is our most relevant project at the moment:</h1>
            
            <div class="first">
                <ProjectCard :id = "first.id" :title  = "first.title" :link = "'/projects/' + first.id" :img_bool="true" />
            </div>

        </div>

        <hr class="separator" />

        <div class="bottom-links">
            <NuxtLink id="to_all_projects" to="/projects"><button class="transparent-btn">Check all the projects</button></NuxtLink>
            <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects"><button class="transparent-btn">See the most relevant projects</button></NuxtLink>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area"><button class="transparent-btn">Check the projects by area</button></NuxtLink>
        </div>

    </main>
</template>

<script setup>
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
</style>
