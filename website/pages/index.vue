<template>
    <Head>
        <Title>Wizarding Ventures</Title>
    </Head>

    <main>
        <div id="header">
            <img id="header_img" src="../assets/img/homepage/homepage_top.png" />
            <div id="motto">
                "It's Leviösa, not Leviosæ"
            </div>
        </div>

        <div id="welcome">
            Welcome to Wizarding Ventures!
        </div>

        <hr class="separator " />

        <div class="sect">
            <img class="section_img" src="../assets/img/homepage/homepage_mission.jpg" />
            <div class="section_par">
                <div class="section_par_title">
                    Our mission
                </div>
                <div class="section_par_txt">
                    At Wizarding Ventures, our vision as a venture capital firm is to fuel the magic of entrepreneurship and innovation. We believe in the power of visionary ideas to transform industries, drive economic growth, and create positive societal impact. Our mission is to identify, invest in, and support exceptional startups that are pushing the boundaries of what's possible. By providing not only financial capital but also strategic guidance, industry expertise, and valuable connections, we aim to empower entrepreneurs to realize their full potential. Together, we seek to shape a future where innovation thrives, solutions are created, and dreams become reality.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/about_us"><button class="btn">Learn more</button></NuxtLink>
                </div>
            </div>
        </div>

        <hr class="separator " />

        <div style="justify-content: end;" class="sect">
            <div class="section_par">
                <div class="section_par_title" style="text-align: end;">
                    Who we are?
                </div>
                <div class="section_par_txt">
                    Our team at Wizarding Ventures is a collective of experienced professionals passionate about supporting the growth and success of startups. With diverse backgrounds and expertise spanning various industries, we bring a wealth of knowledge and insights to the table. Our team members are not only skilled investors but also strategic thinkers, mentors, and connectors. We work closely with entrepreneurs, providing hands-on guidance, helping them navigate challenges, and unlocking opportunities for growth. Our collaborative and dynamic approach fosters a supportive and empowering environment where innovative ideas can thrive. Together, we are dedicated to making a meaningful impact in the venture capital landscape and shaping a future of innovation and entrepreneurship.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/our_team"><button class="btn">Learn more</button></NuxtLink>
                </div>
            </div>
            <img class="section_img" src="../assets/img/homepage/homepage_team.jpg" />
        </div>

        <hr class="separator " />

        <div class="sect">
            <img class="section_img" src="../assets/img/homepage/homepage_prj.png" />
            <div class="section_par">
                <div class="section_par_title">
                    Our portfolio
                </div>
                <div class="section_par_txt">
                    Our venture capital firm is committed to supporting visionary entrepreneurs and transformative ideas that have the potential to reshape industries and drive positive change.<br>
                    Within our diverse portfolio, you will discover dynamic companies revolutionizing sectors such as technology, healthcare, renewable energies, education, transportation, and more. Each investment undergoes a rigorous evaluation process, considering factors such as market potential, scalability, and alignment with our core values.
                </div>
                <div class="btn_container">
                    <NuxtLink to="/portfolio"><button class="btn">Learn more</button></NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
a {
      color: aliceblue;
      text-decoration: none;
}

#header {
    text-align: center;
    vertical-align: center;
}
#header_img {
    width: 100%;
    height: auto;
}
#motto {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 500%;
}
#welcome {
    margin-top: 50px;
    text-align: center;
    font-size: 500%;
}
.sect {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-self: center;
    width: 100%;
    height: 10%;
}
.section_img {
    width: 20%;
    height: auto;
    padding: 30px;
}
.section_par {
    padding: 30px;
    width: 72%;
    align-self: center;
}
.section_par_title {
    font-size: 250%;
    padding: 10px;
}
.section_par_txt {
    padding: 10px;
}
.btn_container {
    text-align: center;
    margin-top: 20px;
}

.btn {
    background-color: ghostwhite;
    color: black;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    margin: auto;
    border-radius: 10px;
    border-color: transparent;
    font-family: Poppins, sans-serif;
    padding: 10px 20px;
    transition: all 0.2s;
    cursor: pointer;
}

.btn:hover {
    box-shadow: 3px 5px 20px 0 rgba(40, 40, 40, 0.8);
    text-decoration: underline;
    padding: 10px 30px;
}
</style>