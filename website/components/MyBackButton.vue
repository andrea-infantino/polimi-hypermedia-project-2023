<template>
    <button class="bb-box">
        <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#10554;</a>  
    </button>
</template>

<style scoped>
    button {
        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
    }

    .bb-box {
        position: absolute;
        width: 7vh;
        height: 7vh;
        margin: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: all 0.2s ease-out;
    }

    .back-button {
        color: black;
        font-weight: bolder;
        font-size: xx-large;
        border-radius: 50%;
        padding: 5px 10px;
    }

    .bb-box:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .bb-box:active {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
