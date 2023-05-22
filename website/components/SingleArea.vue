<template>
    <div class="area">
        <img class="img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${id}.jpg`" />
        <span class="name">{{ name }}</span>
        <span class="description">{{ description }}</span>
    </div>
</template>

<script setup>
    const props = defineProps(['id', 'name', 'description']);
</script>

<style>
    .img
    {
        display: flex;
        border-radius: 5px;
        vertical-align: middle;
        height: 300px;
        width: 300px;
        margin-bottom: 10px;
        background-image:url('~/assets/img/user_default_photo.jpg');
        background-size: cover;
    }

    .name {
        font-weight: bold;
        font-size: 20px;
        margin: 2px;
    }

    .description{
        font-size: 15px;
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
        padding: 10px;
        border-radius: 5px;
    }
    .area:hover {
        background-color:rgba(248, 248, 255, 0.8);
        cursor: pointer;
        color: black;
    }
</style>