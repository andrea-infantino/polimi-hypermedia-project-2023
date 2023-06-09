<template>
    <Head>
        <Title>Contacts - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <div class="title">
            CONTACTS
            </div>
        </div>
        <div class="contacts-info">
            <div class="mail-number">
                <div class="text-1">Contact us for more information<br>about our investments</div><br>
                <a class="num-1" href="tel:123-456-7890">&#9742;&emsp;123-456-7890</a><br>
                <a class="num-2" href="tel:123-456-7891">&#9742;&emsp;123-456-7891</a><br><br>
                <a class="mail" href="mailto:info@webwizards.com">
                    &#9993;&emsp;<strong>info@webwizards.com</strong></a>
                <div class="social-media">
                    <a href="https://twitter.com/home" target="_blank"><img src="../assets/img/contacts/twitter_logo_hover.png" alt="Twitter Logo" class="twitter-logo-footer"></a>
                    <a href="https://www.instagram.com" target="_blank"><img src="../assets/img/contacts/instagram_logo_hover.png" alt="Instagram Logo" class="instagram-logo-footer"></a>
                    <a href="https://www.linkedin.com" target="_blank"><img src="../assets/img/contacts/linkedin_logo_hover.png" alt="LinkedIn Logo" class="linkedin-logo-footer"></a>
                </div>
            </div>
            <div>
                <img alt="Team photo" src="../assets/img/contacts/contacts_photo.jpg" class="contacts-img">
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.972366525132!2d-0.12665052356223183!3d51.532066671818846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bfa8c541837%3A0xc2579139afeace3e!2sPlatform%20Nine%20and%20Three-Quarters!5e0!3m2!1sit!2sit!4v1686225616069!5m2!1sit!2sit" width="700" height="400" class="gmap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="map-description">
                <div class="text-2">You can find us here</div><br>
                <div class="address">Platform 9 ¾<br>King’s Cross, Euston Rd.<br>London, United Kingdom</div>
            </div>

        </div>
    </main>
</template>
  
<script>
  import Map from '../components/Map.vue';
  
  export default {
    components: {
      Map,
    },
  };
</script>

<style scoped>
    .map, .contacts-info {
        padding: 20px;
        justify-content: space-evenly;
        display: flex;
    }
    
    .contacts-img {
        width: 90%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .map-description, .mail-number {
        padding-top: 10%;
        text-align: center;
        color: white;
    }

    .gmap {
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .mail, .num-1, .num-2, .address {
        color: white;
        font-size: 19px;
        display: inline-block;
        margin-left: 1em;
        border-radius: 5px;
        padding: 2px 5px;
        transition: padding 0.3s, background-color 0.3s, color 0.3s;
    }

    .mail:hover, .num-1:hover, .num-2:hover {
        text-decoration: underline;
        color: black;
        background-color: rgba(248, 248, 255, 0.900);
        padding: 2px 15px;
    }

    .text-1, .text-2 {
        font-weight: bold;
        font-size: 30px;
    }

    .social-media {
        padding-top: 25px;
    }

    .twitter-logo-footer, .instagram-logo-footer, .linkedin-logo-footer {
        width: 35px;
        height: auto;
        padding-right: 10px;
        transition: ease-in-out 0.1s;
    }

    .twitter-logo-footer:hover, .instagram-logo-footer:hover, .linkedin-logo-footer:hover {
        transform: scale3d(1.3, 1.3, 1.3);
    }

</style>