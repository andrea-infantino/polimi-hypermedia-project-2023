<template>
    <Head>
        <Title>About us - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'ABOUT US'" />

        <h1 class="au-intro">Welcome to our enchanted realm of venture capital for wizards!</h1>
        
        <div class="paragraphs">
            <section class="white-cloud">
                <div class="white-cloud-title">Our vision</div>
                <p class="white-cloud-text">At Wizarding Ventures, our vision as a venture capital firm is to fuel the magic of entrepreneurship and innovation. We believe in the power of visionary ideas to transform industries, drive economic growth, and create positive societal impact. Our mission is to identify, invest in, and support exceptional startups that are pushing the boundaries of what's possible. By providing not only financial capital but also strategic guidance, industry expertise, and valuable connections, we aim to empower entrepreneurs to realize their full potential. Together, we seek to shape a future where innovation thrives, solutions are created, and dreams become reality.</p>
                <div class="btn-container">
                    <NuxtLink id="to_portfolio" to="/portfolio"><button class="dark-btn">Check our portfolio</button></NuxtLink>
                </div>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">Partnerships</div>
                <div class="multimedia-cloud">
                    <p class="white-cloud-text">Partnerships are at the heart of our venture capital approach at Wizarding Ventures. We recognize the power of collaboration and believe that by working closely with entrepreneurs, investors, and industry experts, we can achieve greater success. We foster strong, long-term relationships built on trust, transparency, and shared goals. Our partnerships extend beyond capital investment, as we actively engage with our portfolio companies, providing strategic guidance, operational support, and access to our extensive network. Through these collaborative efforts, we aim to create a synergistic ecosystem where innovative ideas flourish, businesses thrive, and transformative impact is realized. Together, we can unlock the full potential of visionary startups and drive lasting value for all stakeholders involved.</p>
                    <div class="au-video-container">
                        <iframe src="https://www.youtube.com/embed/X2RzASP6cbA?cc_lang_pref=en&cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="au-video"></iframe>
                    </div>
                </div>
                <div class="btn-container">
                    <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects"><button class="dark-btn">See our top projects</button></NuxtLink>
                </div>
            </section>
            <section class="white-cloud">
                <div class="white-cloud-title">Our team</div>
                <p class="white-cloud-text">Our team at Wizarding Ventures is a collective of experienced professionals passionate about supporting the growth and success of startups. With diverse backgrounds and expertise spanning various industries, we bring a wealth of knowledge and insights to the table. Our team members are not only skilled investors but also strategic thinkers, mentors, and connectors. We work closely with entrepreneurs, providing hands-on guidance, helping them navigate challenges, and unlocking opportunities for growth. Our collaborative and dynamic approach fosters a supportive and empowering environment where innovative ideas can thrive. Together, we are dedicated to making a meaningful impact in the venture capital landscape and shaping a future of innovation and entrepreneurship.</p>
                <div class="btn-container">
                    <NuxtLink id="to_our_team" to="/our_team"><button class="dark-btn">Meet Our Team</button></NuxtLink>
                </div>

            </section>
            <section class="white-cloud">
                <div class="white-cloud-title">Our activities</div>
                <p class="white-cloud-text">As a venture capital firm, our activities at Wizarding Ventures revolve around identifying and investing in high-potential startups. We actively seek out innovative entrepreneurs with transformative ideas and provide them with the financial capital needed to fuel their growth. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with strong potential for success. Beyond financial backing, we take an active role in supporting our portfolio companies, offering strategic guidance, industry expertise, and valuable connections. Through our activities, we aim to nurture and empower entrepreneurs, drive innovation, and create long-term value for our investors and the startup ecosystem as a whole.</p>
                <div class="btn-container">
                    <NuxtLink id="to_contacts" to="/contacts"><button class="dark-btn">Contact us</button></NuxtLink>
                </div>
            </section>
        </div>
        
        <h2 class="au-outro">Let's embark on a fantastical journey together, where dreams are turned into reality, and the possibilities are as infinite as the stars in the night sky!</h2>
    </main>
</template>

<script setup>
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

    .multimedia-cloud {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
    }

    @media screen and (max-width: 1200px) {
        .multimedia-cloud {
            flex-direction: column;
        }
    }

    .au-video-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 36vh;
        float: right;
    }

    .au-video {
        border-radius: 10px;
        margin: 10px;
        width: min(80vw, 59vh);
        height: min(50vw, 34vh);
        box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
    }
</style>