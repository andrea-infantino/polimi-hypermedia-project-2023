<template>
    <NuxtLink :to = "link">
        <div class="area">
            <img class="card-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${id}.png`" :alt="`${name} area symbol`"/>
            <span class="area-name">{{ name }}</span>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'name', 'link']);
</script>

<style>
    .card-img {
        display: flex;
        border-radius: 5px;
        margin: auto;
        vertical-align: middle;
        height: 300px;
        width: 300px;
        margin-bottom: 10px;
        background-size: cover;
        transition: 0.5s;
    }

    .area:hover .card-img {
        filter: invert(1);
        transition: 0.5s;
    }

    .area-name {
        font-weight: bold;
        font-size: 20px;
        margin: 2px;
    }

    .area {
        color: ghostwhite;
        display: flex;
        width: fit-content;
        height: fit-content;
        justify-content: center;
        vertical-align: middle;
        background-color: transparent;
        text-align: center;
        flex-flow: column;
        padding: 5px;
        border-radius: 5px;
        max-width: 350px;
        transition: background-color 0.5s, color 0.5s, transform 0.5s;
    }

    .area:hover {
        background-color:rgba(248, 248, 255, 0.8);
        cursor: pointer;
        color: black;
        transform: translate3d(0px, -5px, 5px);
        transition: background-color 0.5s, color 0.5s, transform 0.5s;
    }

    .area:active {
        transform: scale(0.95);
    }
</style>