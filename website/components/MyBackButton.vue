<template>
    <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#10554;</a>
</template>

<style>

    .back-button {
        position: absolute;
        color: black;
        font-weight: bolder;
        font-size: xx-large;
        margin-top: 1%;
        margin-left: 20px;
        padding: 5px;
        border-radius: 50%;
        transition: 0.3s;
        z-index: 5;
    }

    .back-button:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .back-button:active {
        transform: scale(0.9);
    }

</style>
