<template>
    <Head>
        <Title>Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="hmpg-header">
            <div class="motto">
                ❛I solemnly swear<br>I am up to no good❜
            </div>
            <ScrollDownButton @click="scrollDown" class="scroll-down-button"/>
        </div>

        <div ref="welcome" class="welcome-section">
            <div class="welcome">
                Welcome to<br><b>Wizarding Ventures</b>!
            </div>
            <div class="welcome-text">
                We are a venture capital firm dedicated to supporting visionary entrepreneurs and transformative ideas that have the potential to reshape industries and drive positive change.
                <div class="strategy-box">
                    <div class="strategy-title">
                        Strategy:
                    </div>
                    <div class="strategy-text">
                        We invest in early-stage startups with strong potential for growth and success. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with the highest probability of success.
                    </div>
                </div>
            </div>
        </div>

        <hr class="separator" />

        <div class="mission-section">
            <img class="mission-img" src="../assets/img/homepage/homepage_mission.gif" alt=""/>
            <div class="dark-cloud">
                <div class="dark-cloud-title">
                    Our mission
                </div>
                <div class="dark-cloud-text">
                    Our mission is to empower entrepreneurs and drive innovation by providing them with the financial capital, strategic guidance, and industry expertise needed to succeed. We believe that by supporting visionary entrepreneurs and transformative ideas, we can create a better future for all. We are committed to making a positive impact on society and the world at large through our investments and activities. We believe that by working together, we can achieve great things and make the world a better place. We are dedicated to helping entrepreneurs succeed and achieve their goals.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/about_us" aria-label="Link to about us"><button class="light-btn">Learn more about us</button></NuxtLink>
                </div>
            </div>
        </div>

        <div class="team-section">
            <img class="team-img" src="../assets/img/homepage/homepage_team.jpg" alt="Group photo"/>
            <div class="team-info">
                <div class="team-title">
                    Who we are
                </div>
                <div class="team-text">
                    We are a team of passionate entrepreneurs, investors, and industry experts who are committed to supporting the next generation of innovators. Our team has extensive experience in a wide range of industries, including technology, healthcare, renewable energies, education, transportation, and more. We are dedicated to leveraging our expertise and resources to help entrepreneurs succeed and achieve their goals. Our team is also committed to giving back to the community and making a positive impact on society. We believe that by working together, we can create a better future for all.
                </div>
                <div class="hp-video-container">
                    <iframe src="https://www.youtube.com/embed/fFGS4zZWGoA?cc_lang_pref=en&cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="hp-video" label="Team video"></iframe>
                </div>
                <div class="btn_container">
                    <NuxtLink to="/our_team" aria-label="Link to our team"><button class="dark-btn">Meet our team</button></NuxtLink>
                </div>
            </div>
        </div>

        <div class="invest-section">
            <div class="invest-title">
                Areas of investment
            </div>
            <div class="invest-info">
                <div class="chart-container">
                    <HomepageChart />
                </div>
                <div class="invest-text">
                    We invest in early-stage startups with strong potential for growth and success. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with the highest probability of success. We are committed to helping entrepreneurs succeed and achieve their goals. We believe that by working together, we can create a better future for all.<br>If you are curious about our investment, check our financied projects and areas of investment.
                </div>
            </div>
            <div class="btn_container">
                <NuxtLink to="/projects" aria-label="Link to all projects"><button class="dark-btn">All projects</button></NuxtLink>
                <NuxtLink to="/all_areas" aria-label="Link to all areas"><button class="dark-btn">All areas</button></NuxtLink>
            </div>
        </div>

        <div class="hp-div-carousel">
            <div class="hp-carousel-title">
                These are our most relevant projects right now:
            </div>
            <div class="hp-carousel-container">
                <ProjectsCarousel :projectsArray="projects" class="hp-carousel"/>
            </div>
        </div>


        <div class="prtf-section">
            <img class="prtf-img" src="../assets/img/homepage/homepage_prtf.webp" alt="" />
            <div class="dark-cloud">
                <div class="dark-cloud-title">
                    Our portfolio
                </div>
                <div class="dark-cloud-text">
                    We invest in early-stage startups with strong potential for growth and success. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with the highest probability of success. We are committed to helping entrepreneurs succeed and achieve their goals. We believe that by working together, we can create a better future for all. We are dedicated to helping entrepreneurs succeed and achieve their goals.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/portfolio" aria-label="Link to portfolio"><button class="light-btn">Check our portfolio</button></NuxtLink>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
    export default {
        async setup() {
            const { data: projects } = await useFetch('/api/top_projects');  //get the most relevant projects

            return {
                projects
            }
        },

        methods: {
            scrollDown() {
                const elem = this.$refs.welcome;
                const offset = -120;
                
                if (elem) {
                    const targetPos = elem.offsetTop + offset;
                    window.scrollTo({
                        top: targetPos,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }
</script>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .hmpg-header {
        text-align: center;
        vertical-align: center;
        height: 115vh;
        width: 100%;
        background-image: url("../assets/img/homepage/homepage_top.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        z-index: 0;
    }

    .motto {
        position: absolute;
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: min(8vw, min(7vw, 10vh));
    }
    .welcome-section {
        text-align: center;
        align-items: center;
        vertical-align: center;
        z-index: 2;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        color: black;
        width: max(80vw, max(45vh, 25vh));
        margin: 90vh 0 60px;
        background-color: #E8EEF1;
        position: relative;
    }

    .welcome {
        margin-top: 50px;
        text-align: center;
        font-size: min(8vw, min(7vw, 10vh));
    }
    
    .welcome-text {
        margin: 50px;
        width: 90%;
        text-align: center;
        font-size: min(4vw, min(3vh, 6vh));
        align-items: center;
        justify-content: center;
    }

    .strategy-box {
        color: white;
        border-radius: 10px;
        width: 100%;
        background-color: #1E3D58;
        flex-wrap: wrap;
        flex-direction: row;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px 0;
        padding: 3vw;
    }

    .strategy-title {
        font-size: min(6vw, min(5vh, 8vh));
        font-weight: bold;
        width: 20%;
        min-width: 180px;
        margin-top: 20px;
    }

    .strategy-text {
        text-align: left;
        font-size: min(4vw, min(3vh, 6vh));
        width: 75%;
        height: auto;
        font-size: inherit;
        margin: 20px 0;
    }
    

    .mission-section, .prtf-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        padding: 50px 0;
    }

    .mission-section {
        flex-direction: row;
    }

    .mission-img, .prtf-img {
        width: 25%;
        min-width: 150px;
        height: auto;
        margin: 3vh;
    }

    .prtf-img {
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    }


    .team-section {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        align-content: center;
        overflow-x: hidden;
        width: 100%;
    }

    .team-img {
        width: max(110vh, max(100vw, 90vw));
        height: auto;
        z-index: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    }

    .team-info {
        width: max(90vw, max(40vh, 20vh));
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        background-color: #E8EEF1;
        box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        border-radius: 10px;
        z-index: 1;
        padding: 5vh 3vw;
        position: relative;
        top: -40vh;
        margin-bottom: -30vh;
    }

    .team-title {
        font-size: min(6vw, min(5vh, 8vh));
        font-weight: bold;
        margin: min(1.5vw, min(0.5vh, 3.5vh));
    }

    .team-text {
        font-size: min(3.5vw, min(2.5vh, 5.5vh));
        margin: 3vh 3vh 1vw;
    }

    .hp-video-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 36vh;
    }

    .hp-video {
        border-radius: 10px;
        margin: 10px;
        width: min(80vw, 59vh);
        height: min(50vw, 34vh);
        box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
    }

    .prtf-section {
        flex-direction: row-reverse;
    }

    .invest-section {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 50px;
        padding: 50px 0;
        background-color: #fff6f6e3;
        color: black;
    }

    .chart-container {
        width: 30%;
        min-height: 30px;
    }

    .invest-info {
        width: 90%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .invest-title{
        font-size: min(6vw, min(5vh, 8vh));
        font-weight: bold;
    }

    .invest-text {
        width: 90%;
        font-size: min(3.5vw, min(2.5vh, 5.5vh));
        margin: 3vw;
    }

    .dark-btn, .light-btn {
        margin-top: 10px;
        font-size: min(3.5vw, min(3vh, 6vh));
    }

    @media screen and (max-width: 768px) {
        .welcome-section, .prtf-section {
            width: 94%;
        }

        .mission-section, .prtf-section {
            flex-direction: column;
        }

        .mission-img, .prtf-img {
            width: 70%;
            min-width: 150px;
            height: auto;
            margin: 3vh;
        }

        .team-info {
            width: 98%;
        }

        .invest-info {
            flex-direction: column;
            gap: 0;
        }

        .invest-text {
            margin-top: 0;
        }

        .chart-container {
            width: 70%;
            margin: 20px 0;
        }
    }
</style>