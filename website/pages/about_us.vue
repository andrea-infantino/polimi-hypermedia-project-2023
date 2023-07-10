<template>
    <Head>
        <Title>About us - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'ABOUT US'" />

        <ContentRenderer :data="data">
            <h1 class="au-intro">{{ data[0].intro }}</h1>

            <!-- rendering the paragraphs iteratively -->
            <div class="paragraphs" v-for="paragraph in data[0].paragraphs">
                <section class="white-cloud">
                    <!-- handling (left) images separately -->
                    <img v-if="paragraph.id==1" class="au-vision-img" src="../assets/img/about_us/au_vision.jpg" alt="">   <!--decorative img-->
                    <img v-if="paragraph.id==4" class="au-activities-img" src="../assets/img/about_us/au_activities.jpg" alt="">   <!--decorative img-->

                    <div class="white-cloud-title">{{ paragraph.title }}</div>

                    <!-- handling (right) multimedia contents separately -->
                    <img v-if="paragraph.id==2" class="au-partnership-img" src="../assets/img/about_us/au_partnership.jpg" alt="">   <!--decorative img-->
                    <div v-if="paragraph.id==3" class="multimedia-cloud">
                        <iframe src="https://www.youtube.com/embed/X2RzASP6cbA?cc_lang_pref=en&cc_load_policy=1" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="au-video" aria-label="YouTube video of the team"></iframe>
                        <p class="white-cloud-text" v-html="data[0].paragraphs[2].content"></p>
                    </div>
                    
                    <p v-if="paragraph.id!=3" class="white-cloud-text" v-html="paragraph.content"></p>

                    <!-- handling buttons separately -->
                    <div class="btn-container">
                        <NuxtLink v-if="paragraph.id==1" id="to_portfolio" to="/portfolio" aria-label="Link to portfolio"><button class="dark-btn">Check our portfolio</button></NuxtLink>
                        <NuxtLink v-if="paragraph.id==2" id="to_most_relevant_projects" to="/most_relevant_projects" aria-label="Link to most relevant projects"><button class="dark-btn">See our top projects</button></NuxtLink>
                        <NuxtLink v-if="paragraph.id==3" id="to_our_team" to="/our_team" aria-label="Link to our team"><button class="dark-btn">Meet Our Team</button></NuxtLink>
                        <NuxtLink v-if="paragraph.id==4" id="to_contacts" to="/contacts" aria-label="Link to contacts"><button class="dark-btn">Contact us</button></NuxtLink>
                    </div>
                </section>
            </div>

            <h2 class="au-outro">{{ data[0].outro }}</h2>
        </ContentRenderer>
    </main>
</template>

<script setup>
    //get text content from the JSON file
    const { data } = await useAsyncData('about_us', () => { return queryContent('/about_us').find()})

    //Search Engine Optimization
    const description = ref('In this page you will find more information on our vision, partnerships, team and activities.')
    const keywords = ref('About Us, Vision, Partnerships, Team, Activities')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]
    })
</script>


<style>
    .au-intro {
        text-align: center;
        font-weight: bold;
        color: ghostwhite;
        font-size: 22px;
        margin: 40px 20px 10px;
    }

    .au-outro {
        color: ghostwhite;
        font-size: 20px;
        margin: 20px 15vw 25px;
        text-align: center;
    }

    .btn-container {
        text-align: center;
        margin-top: 20px;
    }

    .au-video-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;
        float: right;
    }

    .au-video {
        border-radius: 10px;
        margin: 10px 10px 20px 30px;
        box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
        float: right;
        width: 480px;
        height: 270px;
    }

    .au-vision-img, .au-partnership-img, .au-activities-img {
        float: left;
        margin-right: 40px;
        margin-bottom: 15px;
        width: 16%;
        height: auto;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
    }

    .au-partnership-img {
        float: right;
        margin-left: 40px;
        width: 35%;
    }

    .au-activities-img {
        width: 17%;
    }

    @media screen and (max-width: 900px) {
        .au-vision-img, .au-partnership-img, .au-activities-img {
            margin: 20px;
            width: 50%;
        }

        .au-vision-img {
            display: none;
        }

        .au-partnership-img {
            width: 90%;
        }

        .au-activities-img {
            display: none;
        }

        .multimedia-cloud {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .au-video {
            align-self: center;
            float: none;
            width: min(70vw, 59vh);
            height: min(40vw, 34vh);
        }
    }

</style>