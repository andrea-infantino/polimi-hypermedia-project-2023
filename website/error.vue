<template>
    <NuxtLayout class="error-body">
        <main>
            <div class="error-area">
                <div class="error-header">
                    <img src="~/assets/img/magic.png" alt="Magic sparkles" class="magic">
                    <span class="error-404">404</span>  
                    <img src="~/assets/img/magic.png" alt="Magic sparkles" class="magic">
                </div>
                <span class="error-text">Oops, something went wrong with your request!</span><br>                   
                <div class="error-image-container">
                    <img src="~/assets/img/error_img.png" alt="Error image" class="error-img"><br>
                </div>
                <NuxtLink to ="/"><button class="return-homepage">RETURN TO HOMEPAGE</button></NuxtLink>
            </div>
        </main>
    </NuxtLayout>
</template>

<style>
    .error-body {
        background-color: #162f45;
    }

    .error-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
    }

    .error-area {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 73vh;

    }

    .error-404 {
        font-size: 14vh;
        font-weight: bold;
        color: ghostwhite;
    }

    .magic {
        width: 25vh;
        height: auto;
        padding: 0 40px;
    }

    .error-text {
        font-size: 4vh;
        font-weight: bold;
        opacity: 0.9;
        color: ghostwhite;
        width: fit-content;
        align-self: center;
        padding: 10px 20px;

    }

    .error-image-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 32vh;
    }

    .error-img {
        width: 55vh;
        height: auto;
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
            right: 37%;
        }
    }

    .return-homepage {
        font-size: 5vh;
        color: black;
        background-color: ghostwhite;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                    0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 10px 30px;
        opacity: 0.9;
        transition: all 0.2s;
        bottom: 1.4vh;
        position: relative;
    }

    .return-homepage:hover {
        text-decoration: underline;
        opacity: 1;
        box-shadow: 0 4px 8px 0 rgba(187, 187, 187, 0.5),
                    0 6px 20px 0 rgba(187, 187, 187, 0.5);
        padding: 10px 50px;
    }

    @media screen and (max-width: 768px) {
        .error-404 {
            font-size: 10vh;
        }

        .magic {
            width: 15vh;
        }

        .error-text {
            font-size: 4vh;
        }

        .error-img {
            width: 40vh;
        }

        @keyframes slideIn {
            0% {
                right: -100%;
            }
            100% {
                right: 10%;
            }
        }

        .return-homepage {
            font-size: 4vh;
            padding: 6px 15px;
        }
    }

</style>