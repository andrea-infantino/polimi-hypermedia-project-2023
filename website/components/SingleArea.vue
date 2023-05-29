<template>
    <NuxtLink :to = "link">
        <div class="area">
            <img class="img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${id}.png`"/>
            <span class="name">{{ name }}</span>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'name', 'link']);
</script>

<style>
    .img
    {
        display: flex;
        border-radius: 5px;
        margin: auto;
        vertical-align: middle;
        height: 300px;
        width: 300px;
        margin-bottom: 10px;
        background-size: cover;
    }

    .name {
        font-weight: bold;
        font-size: 20px;
        margin: 2px;
    }

    .area
    {
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
    }
    .area:hover {
        background-color:rgba(248, 248, 255, 0.8);
        cursor: pointer;
        color: black;
    }
</style>