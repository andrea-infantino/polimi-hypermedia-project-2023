<template>
    <Head>
        <Title>About us - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <MyBackButton /> 
            <div class="title">
                ABOUT US
            </div>
        </div>

        <h1 class="au-intro">Welcome to our enchanted realm of venture capital for wizards!</h1>
        
        <div class="paragraphs">
            <section class="about-section">
                <div class="heading">Our vision</div>
                <p class="par">At Wizarding Ventures, our vision as a venture capital firm is to fuel the magic of entrepreneurship and innovation. We believe in the power of visionary ideas to transform industries, drive economic growth, and create positive societal impact. Our mission is to identify, invest in, and support exceptional startups that are pushing the boundaries of what's possible. By providing not only financial capital but also strategic guidance, industry expertise, and valuable connections, we aim to empower entrepreneurs to realize their full potential. Together, we seek to shape a future where innovation thrives, solutions are created, and dreams become reality.</p>
                <div class="btn-container">
                    <NuxtLink id="to_portfolio" to="/portfolio"><button class="au-btn">Check our portfolio</button></NuxtLink>
                </div>
            </section>

            <section class="about-section">
                <div class="heading">Partnerships</div>
                <p class="par">Partnerships are at the heart of our venture capital approach at Wizarding Ventures. We recognize the power of collaboration and believe that by working closely with entrepreneurs, investors, and industry experts, we can achieve greater success. We foster strong, long-term relationships built on trust, transparency, and shared goals. Our partnerships extend beyond capital investment, as we actively engage with our portfolio companies, providing strategic guidance, operational support, and access to our extensive network. Through these collaborative efforts, we aim to create a synergistic ecosystem where innovative ideas flourish, businesses thrive, and transformative impact is realized. Together, we can unlock the full potential of visionary startups and drive lasting value for all stakeholders involved.</p>
                <div class="btn-container">
                    <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects"><button class="au-btn">See our top projects</button></NuxtLink>
                </div>
            </section>
            <section class="about-section">
                <div class="heading">Our team</div>
                <p class="par">Our team at Wizarding Ventures is a collective of experienced professionals passionate about supporting the growth and success of startups. With diverse backgrounds and expertise spanning various industries, we bring a wealth of knowledge and insights to the table. Our team members are not only skilled investors but also strategic thinkers, mentors, and connectors. We work closely with entrepreneurs, providing hands-on guidance, helping them navigate challenges, and unlocking opportunities for growth. Our collaborative and dynamic approach fosters a supportive and empowering environment where innovative ideas can thrive. Together, we are dedicated to making a meaningful impact in the venture capital landscape and shaping a future of innovation and entrepreneurship.</p>
                <div class="btn-container">
                    <NuxtLink id="to_our_team" to="/our_team"><button class="au-btn">Meet Our Team</button></NuxtLink>
                </div>

            </section>
            <section class="about-section">
                <div class="heading">Our activities</div>
                <p class="par">As a venture capital firm, our activities at Wizarding Ventures revolve around identifying and investing in high-potential startups. We actively seek out innovative entrepreneurs with transformative ideas and provide them with the financial capital needed to fuel their growth. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with strong potential for success. Beyond financial backing, we take an active role in supporting our portfolio companies, offering strategic guidance, industry expertise, and valuable connections. Through our activities, we aim to nurture and empower entrepreneurs, drive innovation, and create long-term value for our investors and the startup ecosystem as a whole.</p>
                <div class="btn-container">
                    <NuxtLink id="to_contacts" to="/contacts"><button class="au-btn">Contact us</button></NuxtLink>
                </div>
            </section>
        </div>
        
        <h2 class="au-outro">Let's embark on a fantastical journey together, where dreams are turned into reality,<br>and the possibilities are as infinite as the stars in the night sky.</h2>
    </main>
</template>

<script setup>
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
        margin: 40px 50px 10px;
    }

    .au-outro {
        color: ghostwhite;
        font-size: 20px;
        margin: 20px 50px 25px;
        text-align: center;
    }

    .about-section {
        background-color: #fff6f6e3;
        -webkit-box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        padding: 40px;
        margin: 2% 10%;
        height: 100%;
        border-radius: 10px;
    }

    .btn-container {
        text-align: center;
        margin-top: 20px;
    }

    .au-btn {
        color: ghostwhite;
        background-color: #1E3D58;
        position: relative;
        font-size: 20px;
        font-weight: bold;
        margin: auto;
        border-radius: 10px;
        border-color: transparent;
        font-family: Poppins, sans-serif;
        padding: 10px 20px;
        transition: all 0.2s;
    }

    .au-btn:hover {
        color: black;
        background-color: #E8EEF1;
        box-shadow: 3px 5px 20px 0 rgba(40, 40, 40, 0.8);
        text-decoration: underline;
        padding: 10px 30px;
    }

    .heading {
        font-size: 40px;
        line-height: 1;
        font-weight: 700;
        color: black;
        letter-spacing: -1.4px;
        margin-bottom: 10px;
    }

    .par {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 1.6;
        color: black;
    }
    
</style>