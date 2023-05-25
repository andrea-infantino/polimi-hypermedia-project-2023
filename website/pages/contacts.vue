<template>
    <main>
        <div class="title-area">
            <div class="title">
            CONTACTS
            </div>
        </div>
        <div class="contacts-info">
            <div class="mail-number">
                <div class="text-1">Contact us for more information about our investments</div><br>
                <a class="num-1" href="tel:123-456-7890">123-456-7890</a><br>
                <a class="num-2" href="tel:123-456-7891">123-456-7891</a><br><br>
                <a class="mail" href="mailto:info@webwizards.com">
                    <strong>info@webwizards.com</strong></a>
                <div class="social-media">
                    <a href="https://twitter.com/home"><img src="../assets/img/contacts/twitter_logo.png" alt="Twitter Logo" style="width:35px;height:40px;padding-right:10px;"></a>
                    <a href="https://www.instagram.com"><img src="../assets/img/contacts/instagram_logo.png" alt="Instagram Logo" style="width:35x;height:35px;padding-right:10px;"></a>
                    <a href="https://www.linkedin.com"><img src="../assets/img/contacts/linkedin_logo.png" alt="LinkedIn Logo" style="width:40px;height:35px;"></a>
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

<style>
    .title-area {
    position: sticky;
    top: 0;
    padding: 10px;
    background-color:white;
    opacity: 0.9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .title {
    font-weight: bold;
    font-size: 40px;
    margin: 20px;
    text-align: center;
    color: black;
    }

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

    .mail:hover, .num-1:hover, .num-2:hover {
        text-decoration: underline;
    }

    .text-1, .text-2 {
        font-weight: bold;
        font-size: 30px;
    }

    .address {
        font-size: 18px;
    }

    .social-media {
        padding-top: 10px;
    }

</style>