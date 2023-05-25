<template>
    <main>
        <div class="title-area">
            <div class="title">
            CONTACTS
            </div>
        </div>
        <div class="contacts-info">
            <div class="mail-number">
                <div class="text-1">Contact us for more information<br>about our investments</div><br>
                <a class="num-1" href="tel:123-456-7890">123-456-7890</a><br>
                <a class="num-2" href="tel:123-456-7891">123-456-7891</a><br><br>
                <a class="mail" href="mailto:info@webwizards.com">
                    <strong>info@webwizards.com</strong></a>
                <div class="social-media">
                    <a href="https://twitter.com/home"><img src="../assets/img/contacts/twitter_logo.png" alt="Twitter Logo" class="twitter-logo"></a>
                    <a href="https://www.instagram.com"><img src="../assets/img/contacts/instagram_logo.png" alt="Instagram Logo" class="instagram-logo"></a>
                    <a href="https://www.linkedin.com"><img src="../assets/img/contacts/linkedin_logo.png" alt="LinkedIn Logo" class="linkedin-logo"></a>
                </div>
            </div>
            <div class="contacts-img">
                <img alt="Team photo" src="../assets/img/contacts/contacts_photo.jpg" width="700" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            </div>
        </div>
        <div class="map">
            <Map />
            <div class="map-description">
                <div class="text-2">You can find us here</div><br>
                <div class="address">Piazza Leonardo Da Vinci, 32<br>20133 - Milan</div>
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

    .map-description, .mail-number {
        padding-top: 10%;
        text-align: center;
        color:white;
    }

    .mail, .num-1, .num-2, .address {
        color: white;
        font-size: 19px;
    }

    .mail:hover, .num-1:hover, .num-2:hover {
        text-decoration: underline;
    }

    .text-1, .text-2 {
        font-weight: bold;
        font-size: 30px;
    }

    .social-media {
        padding-top: 10px;
    }

    .twitter-logo {
        width: 35px;
        height: 40px;
        padding-right: 10px;
    }

    .instagram-logo {
        width: 35px;
        height: 35px;
        padding-right: 10px;
    }

    .linkedin-logo {
        width: 40px;
        height: 35px;
    }

    .twitter-logo:hover, .instagram-logo:hover, .linkedin-logo:hover {
        transform: scale3d(1.3, 1.3, 1.3);
        transition: ease-in-out 0.3s;
    }

</style>