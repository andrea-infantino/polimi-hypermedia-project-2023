<template>
    <footer>
        <div class="bottom">          
            <div>
                <NuxtLink to="/">
                    <img src="../assets/img/logo.png" id="logo" class="logo-footer"/>
                </NuxtLink>

                <span class="copyright">
                    © 2023 by Web Wizards
                </span>  
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

    .logo-footer { 
        height: 500px;
        width: auto;
    }

    .copyright {
        font-size: 12px;
        font-style: italic;
    }

    .socials {
        text-align: right;
        vertical-align: text-bottom;
        margin-top: 10px;
        padding-right: 20px;
    }

    .linkedin-footer, .instagram-footer, .twitter-footer {
        width: 35px;
        height: auto;
        padding-left: 10px;
        position: relative;
        vertical-align: middle;
        transition: 0.2s ease-in-out;
    }

    .linkedin-footer:hover, .instagram-footer:hover, .twitter-footer:hover {
        transform: scale(1.1);
    }
    
    .bottom {
        display: flex;
        vertical-align: middle;
        justify-content: space-evenly;
    }
    
</style>
