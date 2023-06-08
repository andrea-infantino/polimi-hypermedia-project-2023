<template>
    <NuxtLayout class="error-body">
        <main>
            <div class="error-area">
                <img src = "~/assets/img/magic.png" alt = "Magic sparkles" class="magic">
                <span class="error-404">404</span>  
                <img src = "~/assets/img/magic.png" alt = "Magic sparkles" class="magic"><br>
                <span class="error-text">Oops, something went wrong with your request!</span><br>                   
                <div class="error-image-container">
                    <img src = "~/assets/img/error_img.png" alt = "Error image" class="error-img"><br>
                </div>
                <NuxtLink to = "/" class="return-homepage">RETURN TO HOMEPAGE</NuxtLink>
            </div>
        </main>
    </NuxtLayout>
</template>

<style>
    .error-body {
        background-color: #162f45;
    }

    .error-area {
        text-align: center;
    }

    .error-404 {
        font-size: 8em;
        font-weight: bold;
        color: ghostwhite;
    }

    .magic {
        width: 6%;
        height: auto;
        padding: 0px 40px;
    }

    .error-text {
        font-size: 2em;
        font-weight: bold;
        opacity: 0.9;
        color: ghostwhite;
        width: fit-content;
        align-self: center;
        padding: 0px 20px;

    }

    .error-image-container {
        position: relative;
        overflow: hidden;
        padding: 110px;
    }

    .error-image-container img {
        position: absolute;
        top: 0;
        right: -100%;
        animation: slideIn 1s forwards;
    }

    @keyframes slideIn {
        0% {
            right: -100%;
        }
        100% {
            right: 35%;
        }
    }

    .error-img {
        width: 25%;
        height: auto;
        margin: 20px;
    }

    .return-homepage {
        font-size: xx-large;
        color: black;
        background-color: ghostwhite;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                    0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 40px 0px;
        padding: 10px 30px;
        opacity: 0.9;
        transition: all 0.2s;
        bottom: 1px;
        position: relative;
    }

    .return-homepage:hover {
        text-decoration: underline;
        opacity: 1;
        box-shadow: 0 4px 8px 0 rgba(187, 187, 187, 0.5),
                    0 6px 20px 0 rgba(187, 187, 187, 0.5);
        padding: 10px 50px;
    }

</style>

<script setup>

</script>
