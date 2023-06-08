<template>
    <Head>
        <Title>About us - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <div class="title">
            ABOUT US
            </div>
        </div>

        <h1 class="intro"><strong>Welcome to our enchanted realm of venture capital for wizards!</strong></h1>
        
        <div class="paragraphs">
            <section class="about-vision">
                <div class="heading">Our vision</div>
                <p class="par">At Wizarding Ventures, our vision as a venture capital firm is to fuel the magic of entrepreneurship and innovation. We believe in the power of visionary ideas to transform industries, drive economic growth, and create positive societal impact. Our mission is to identify, invest in, and support exceptional startups that are pushing the boundaries of what's possible. By providing not only financial capital but also strategic guidance, industry expertise, and valuable connections, we aim to empower entrepreneurs to realize their full potential. Together, we seek to shape a future where innovation thrives, solutions are created, and dreams become reality.</p>
            </section>

            <section class="about-partnerships">
                <div class="heading">Partnerships</div>
                <p class="par">Partnerships are at the heart of our venture capital approach at Wizarding Ventures. We recognize the power of collaboration and believe that by working closely with entrepreneurs, investors, and industry experts, we can achieve greater success. We foster strong, long-term relationships built on trust, transparency, and shared goals. Our partnerships extend beyond capital investment, as we actively engage with our portfolio companies, providing strategic guidance, operational support, and access to our extensive network. Through these collaborative efforts, we aim to create a synergistic ecosystem where innovative ideas flourish, businesses thrive, and transformative impact is realized. Together, we can unlock the full potential of visionary startups and drive lasting value for all stakeholders involved.</p>
            </section>
            <section class="about-team">
                <div class="heading">Our team</div>
                <p class="par">Our team at Wizarding Ventures is a collective of experienced professionals passionate about supporting the growth and success of startups. With diverse backgrounds and expertise spanning various industries, we bring a wealth of knowledge and insights to the table. Our team members are not only skilled investors but also strategic thinkers, mentors, and connectors. We work closely with entrepreneurs, providing hands-on guidance, helping them navigate challenges, and unlocking opportunities for growth. Our collaborative and dynamic approach fosters a supportive and empowering environment where innovative ideas can thrive. Together, we are dedicated to making a meaningful impact in the venture capital landscape and shaping a future of innovation and entrepreneurship.</p>
            </section>
            <section class="about-activities">
                <div class="heading">Our activities</div>
                <p class="par">As a venture capital firm, our activities at Wizarding Ventures revolve around identifying and investing in high-potential startups. We actively seek out innovative entrepreneurs with transformative ideas and provide them with the financial capital needed to fuel their growth. Our investment process involves rigorous due diligence, market analysis, and risk assessment to ensure that we select companies with strong potential for success. Beyond financial backing, we take an active role in supporting our portfolio companies, offering strategic guidance, industry expertise, and valuable connections. Through our activities, we aim to nurture and empower entrepreneurs, drive innovation, and create long-term value for our investors and the startup ecosystem as a whole.</p>
            </section>
        </div>
        
        <h2 class="outro">Let's embark on a fantastical journey together, where dreams are turned into reality, and the possibilities are as infinite as the stars in the night sky.</h2>
        
        <div class="links">
            <NuxtLink id="to_our_team" to="/our_team" class="my_link">Our Team</NuxtLink><br>
            <NuxtLink id="to_contacts" to="/contacts" class="my_link">Contacts</NuxtLink>
        </div>

    </main>
</template>

<style>

    .intro, .outro {
        color:white;
        margin-left: 40px;
        margin-right: 40px;
    }

    .about-vision, .about-partnerships, .about-team, .about-activities {
        background-color: #fff6f6d2;
        -webkit-box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        box-shadow: 20px 20px 60px 0 rgba(172,172,172,.5);
        padding: 40px;
        margin: 40px 150px;
        height: 100%;
        border-radius: 10px;
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
    
    .links {
        text-align: center;
    }

    .my_link {
        color: rgba(255, 255, 255, 0.826);
        font-size: 25px;
        font-weight: 700;
        text-decoration: none;
        margin-left: 40px;
        margin-right: 40px;
    }

    .my_link:hover {
        color: #ffffff;
        font-size: 27px;
        font-weight: 700;
        text-decoration: underline;
    }
    
</style>