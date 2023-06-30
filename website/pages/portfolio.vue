<template>
    <Head>
        <Title>Portfolio - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'PORTFOLIO'" />

        <div class="paragraphs">
            <div class="white-cloud">
                <p class="white-cloud-text">
                    Welcome to <strong>Wizarding Ventures</strong>' Portfolio Page. We are delighted to present our carefully curated selection of investments in innovative startups across a wide range of industries. Our venture capital firm is committed to supporting visionary entrepreneurs and transformative ideas that have the potential to reshape industries and drive positive change.<br>
                    Within our diverse portfolio, you will discover dynamic companies revolutionizing sectors such as technology, healthcare, renewable energies, education, transportation, and more. Each investment undergoes a rigorous evaluation process, considering factors such as market potential, scalability, and alignment with our core values.</p>
            </div>
            
            <div class="white-cloud">
                <p class="white-cloud-text">
                    We take an active approach to supporting our portfolio companies, offering more than just capital. Our experienced team provides strategic guidance, industry insights, and valuable connections to help entrepreneurs navigate the challenges of scaling their businesses, accessing new markets, and maximizing their potential for success.<br>
                    At <strong>Wizarding Ventures</strong>, we believe in the power of entrepreneurship to create significant financial returns while making a lasting impact on society. Our investments are not only driven by financial considerations but also by our commitment to excellence, innovation, and sustainability. We seek out startups that are at the forefront of emerging trends and have the potential to address pressing global challenges.</p>
            </div>

            <div class="white-cloud">
                <p class="white-cloud-text">
                    By investing in these pioneering ventures, we aim to contribute to the advancement of cutting-edge technologies, improve lives, and create sustainable value. Our portfolio represents a testament to our belief in the transformative potential of visionary ideas and the collective drive to shape a brighter future.<br>
                    Please note that due to the confidentiality of certain investments, not all companies may be listed on this public portfolio page. For more information about our full portfolio, investment opportunities, or partnership inquiries we invite you to <NuxtLink to="/contacts" class="cp-contact">contact our team directly</NuxtLink>.</p>
            </div>

            <div class="white-cloud">
                <p class="white-cloud-text">
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

        <hr class="separator" />

        <div class="links">
            <NuxtLink id="to_all_projects" to="/projects"><button class="bottom-link">Check all the projects</button></NuxtLink>
            <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects"><button class="bottom-link">See the most relevant projects</button></NuxtLink>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area"><button class="bottom-link">Check the projects by area</button></NuxtLink>
        </div>
    </main>
</template>

<script setup>
    const { data: Projects } = await useFetch('/api/portfolio');

    //split the projects so we can display the first one differently
    const first = Projects.value[0];

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
    .header {
        color:white;
        text-align: center;
    }
</style>
