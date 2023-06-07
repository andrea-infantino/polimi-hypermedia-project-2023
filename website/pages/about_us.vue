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
                <p class="par">At our firm, we believe in harnessing the power of innovation and entrepreneurship to shape a brighter future for the magical realm. With our deep understanding of both traditional and magical markets, we provide unparalleled guidance and investment opportunities to budding magical entrepreneurs.</p>
            </section>
            <section class="about-partnerships">
                <div class="heading">Partnerships</div>
                <p class="par">What sets us apart is not just our magical expertise but also our commitment to fostering a collaborative and supportive environment. We view our relationship with entrepreneurs as a partnership, working hand in hand to unlock the full potential of their magical ventures. We provide not only financial resources but also mentorship, strategic guidance, and access to our extensive network of influential witches and wizards.</p>
            </section>
            <section class="about-team">
                <div class="heading">Our team</div>
                <p class="par">Our team of experienced wizards has an impressive track record in identifying and nurturing exceptional startups. We possess a keen eye for transformative ideas that can disrupt the status quo and redefine industries. Whether it's developing enchanted devices, creating groundbreaking potions, or revolutionizing broomstick technology, we are passionate about supporting ventures that push the boundaries of magic.</p>
            </section>
            <section class="about-activities">
                <div class="heading">Our activities</div>
                <p class="par">In addition to our core investment activities, we actively contribute to the advancement of the magical community. We sponsor magical research, organize conferences and workshops, and encourage knowledge sharing among wizards and witches. By nurturing innovation and empowering talented magical minds, we aim to create a thriving ecosystem that propels the wizarding world into a new era of prosperity and enchantment.</p>
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