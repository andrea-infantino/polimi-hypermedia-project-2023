<template>
    <footer>
        <div class="bottom">          
            <div class="logo-footer">
                <NuxtLink to="/">
                    <img src="../assets/img/logo.png" id="logo" class="logo-img"/>
                </NuxtLink>

            </div>
                   
            <div class="rights">
                <strong>© 2023 Wizarding Ventures S.P.A.</strong><br>
                All rights reserved. <NuxtLink id="to_privacy_policy" to="/privacy_policy">Privacy Policy</NuxtLink> · <NuxtLink id="to_cookie_policy" to="/cookie_policy">Cookie Policy</NuxtLink>
            </div>

            <div class="socials"> <b>Follow us:</b>
                <a href="https://twitter.com/home"><img src="../assets/img/contacts/twitter_logo_hover.png" alt="Twitter Logo" class="twitter-footer"></a>
                <a href="https://www.instagram.com"><img src="../assets/img/contacts/instagram_logo_hover.png" alt="Instagram Logo" class="instagram-footer"></a>
                <a href="https://www.linkedin.com"><img src="../assets/img/contacts/linkedin_logo_hover.png" alt="LinkedIn Logo" class="linkedin-footer"></a>
            </div>

        </div>


    </footer>
</template>

<style>
    footer {
        background-color: #E8EEF1;
        flex-shrink: 0;
        text-align: center;
        margin-top: auto;
        border-top: 5px solid #1E3D58;
        padding: 10px;
        min-height: 1vh;
        color: black;
    }

    .logo-footer, .logo-img { 
        height: 35px;
        width: auto;
    }

    .logo-footer {
        padding: 10px
    }

    .copyright {
        font-size: 12px;
        font-weight: bold;
    }

    .socials {
        text-align: right;
        vertical-align: text-bottom;
        margin-top: 10px;
        padding-right: 20px;
    }

    .linkedin-footer, .instagram-footer, .twitter-footer {
        width: 30px;
        height: auto;
        padding-left: 10px;
        position: relative;
        vertical-align: middle;
        transition: 0.1s ease-in-out;
    }

    .linkedin-footer:hover, .instagram-footer:hover, .twitter-footer:hover {
        transform: scale(1.15);
    }
    
    .bottom {
        display: flex;
        justify-content: space-evenly;
    }

    .rights {
        padding-top: 20px;
        font-size: 13px;
        color: black;
    }

    #to_privacy_policy, #to_cookie_policy {
        color: #1E3D58;
        font-weight: bold;
        font-size: 13px;
    }

    #to_privacy_policy:hover, #to_cookie_policy:hover {
        color: #1E3D58;
        text-decoration: underline;
    }
    
</style>
