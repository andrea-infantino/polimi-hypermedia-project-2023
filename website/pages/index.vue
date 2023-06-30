<template>
    <Head>
        <Title>Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="hmpg-header">
            <div class="motto">
                ❛I solemnly swear<br>I am up to no good❜
            </div>
        </div>

        <div class="welcome-section">
            <div class="welcome">
                Welcome to<br><b>Wizarding Ventures</b>!
            </div>
            <div class="welcome-txt">
                We are a venture capital firm dedicated to supporting visionary entrepreneurs and transformative ideas that have the potential to reshape industries and drive positive change.
                <div class="strategy-box">
                    <div class="strategy-title">
                        Strategy:
                    </div>
                    <div class="strategy-txt">
                        We invest in early-stage startups with strong potential for growth and success. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with the highest probability of success.
                    </div>
                </div>
            </div>
        </div>

        <hr class="separator" />

        <div class="mission-section">
            <img class="mission-img" src="../assets/img/homepage/homepage_mission.jpg" alt="The Marauder's Map image"/>
            <div class="mission-info">
                <div class="mission-title">
                    Our mission
                </div>
                <div class="mission-txt">
                    Our mission is to empower entrepreneurs and drive innovation by providing them with the financial capital, strategic guidance, and industry expertise needed to succeed. We believe that by supporting visionary entrepreneurs and transformative ideas, we can create a better future for all. We are committed to making a positive impact on society and the world at large through our investments and activities. We believe that by working together, we can achieve great things and make the world a better place. We are dedicated to helping entrepreneurs succeed and achieve their goals.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/about_us"><button class="light-btn">Learn more about us</button></NuxtLink>
                </div>
            </div>
        </div>

        <div class="team-section">
            <img class="team-img" src="../assets/img/homepage/homepage_team.jpg" alt="Group photo"/>
            <div class="team-info">
                <div class="team-title">
                    Who we are
                </div>
                <div class="team-txt">
                    We are a team of passionate entrepreneurs, investors, and industry experts who are committed to supporting the next generation of innovators. Our team has extensive experience in a wide range of industries, including technology, healthcare, renewable energies, education, transportation, and more. We are dedicated to leveraging our expertise and resources to help entrepreneurs succeed and achieve their goals. Our team is also committed to giving back to the community and making a positive impact on society. We believe that by working together, we can create a better future for all.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/our_team"><button class="dark-btn">Meet our team</button></NuxtLink>
                </div>
            </div>
        </div>

        <hr class="separator " />

        <div class="prtf-section">
            <img class="prtf-img" src="../assets/img/homepage/homepage_prtf.jpg" alt="Sketches of Harry Potter symbols" />
            <div class="prtf-info">
                <div class="prtf-title">
                    Our portfolio
                </div>
                <div class="prtf-txt">
                    We invest in early-stage startups with strong potential for growth and success. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with the highest probability of success. We are committed to helping entrepreneurs succeed and achieve their goals. We believe that by working together, we can create a better future for all. We are dedicated to helping entrepreneurs succeed and achieve their goals.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/portfolio"><button class="light-btn">Check our portfolio</button></NuxtLink>
                </div>
            </div>
        </div>


        <hr class="separator " />

        <div class="prj-section">
            <div class="prj-info">
                <div class="prj-title">
                    Areas of investment
                </div>
                <div class="prj-txt">
                    We invest in early-stage startups with strong potential for growth and success. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with the highest probability of success. We are committed to helping entrepreneurs succeed and achieve their goals. We believe that by working together, we can create a better future for all. We are dedicated to helping entrepreneurs succeed and achieve their goals.
                    If you are curios about our investment, check our financied projects and areas of investment.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/projects"><button class="dark-btn">All projects</button></NuxtLink>
                    <NuxtLink to="/all_areas"><button class="dark-btn">All areas</button></NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>

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
        height: 100vh;
        width: 100%;
        background-image: url("../assets/img/homepage/homepage_top.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .motto {
        position: absolute;
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: min(8vw, min(7vw, 10vh));
    }

    .welcome-section {
        text-align: center;
        align-items: center;
        vertical-align: center;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        color: black;
        width: 80vw;
        margin: -8vh 0 60px;
        background-color: #E8EEF1;
    }

    .welcome {
        margin-top: 50px;
        text-align: center;
        font-size: min(8vw, min(7vw, 10vh));
    }
    
    .welcome-txt {
        margin: 50px;
        width: 90%;
        text-align: center;
        font-size: min(4vw, min(3vh, 6vh));
        align-items: center;
        justify-content: center;
    }

    .strategy-box {
        color: aliceblue;
        border-radius: 10px;
        width: 80%;
        background-color: #1E3D58;
        flex-wrap: wrap;
        flex-direction: row;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px;
        padding: 3vw;
    }

    .strategy-title {
        font-size: min(6vw, min(5vh, 8vh));
        font-weight: bold;
        width: 20%;
        min-width: 200px;
        margin: 20px 0;
    }

    .strategy-txt {
        text-align: left;
        font-size: 3vh;
        width: 75%;
        height: auto;
        font-size: inherit;
    }
    

    .mission-section, .prtf-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 50px 0;
    }

    .mission-section {
        flex-direction: row;
    }

    .mission-img, .prtf-img {
        width: 25%;
        min-width: 200px;
        height: auto;
        border-radius: 10px;
        margin: 3vh;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    }

    .mission-info, .prtf-info {
        width: 60%;
        min-width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 30px 10px;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .mission-title, .prtf-title {
        font-size: min(6vw, min(5vh, 8vh));
        font-weight: bold;
        margin: 20px;
    }

    .mission-txt, .prtf-txt {
        font-size: 2.8vh;
        width: 75%;
        margin: 3vh;
    }

    .team-section {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .team-img {
        width: 100%;
        height: auto;
        z-index: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    }

    .team-info {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        margin: 3vh;
    }

    .team-txt {
        font-size: 2.8vh;
        margin: 3vh;
    }

    .prtf-section {
        flex-direction: row-reverse;
    }

    .prj-section {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 50px;
    }

    .prj-info {
        min-width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;;
        padding: 30px 10px;
        color: black;
        background-color: #fff6f6e3;
    }

    .prj-title {
        font-size: min(6vw, min(5vh, 8vh));
        font-weight: bold;
        margin: 20px;
    }

    .prj-txt {
        width: 90%;
        font-size: 2.8vh;
        margin: 3vh;
    }

    .light-btn {
        background-color: ghostwhite;
        color: black;
        position: relative;
        font-size: 20px;
        font-weight: bold;
        margin: 0 10px;
        border-radius: 10px;
        border-color: transparent;
        font-family: inherit;
        padding: 10px 20px;
        transition: all 0.2s;
        cursor: pointer;
    }

    .light-btn:hover {
        box-shadow: 3px 5px 20px 0 rgba(172,172,172,.5);
        text-decoration: underline;
        padding: 10px 30px;
        margin: 0;
    }

    .light-btn:active {
        box-shadow: 3px 5px 20px 14px rgba(172,172,172,.5);
    }
</style>