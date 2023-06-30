<template>
    <div>
        <div class="scrolldown-btn" role="button">
            <span></span>
            <span></span>
            <span></span>
            Get Started
        </div>
    </div>
</template>
  
<style>
    .scrolldown-btn {
        z-index: 2;
        display: inline-block;
        color: ghostwhite;
        letter-spacing: .1em;
        text-decoration: none;
        transition: opacity .3s;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 95%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: min(4vw, min(3vh, 6vh));
    }
    .scrolldown-btn:hover {
        opacity: .5;
    }

    .scrolldown-btn span {
        position: absolute;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(-45deg);
        animation: sd 2s infinite;
        opacity: 0;
        box-sizing: border-box;
    }

    .scrolldown-btn span:nth-of-type(1) {
        top: -72px;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }
    .scrolldown-btn span:nth-of-type(2) {
        top: -56px;
        -webkit-animation-delay: .15s;
        animation-delay: .15s;
    }
    .scrolldown-btn span:nth-of-type(3) {
        top: -40px;
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
    }

    @keyframes sd {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
  
</style>