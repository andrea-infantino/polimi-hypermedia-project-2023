<template>
    <NuxtLink :to = "link" >
    <div class="card">
        <img class="img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/People/${id}.jpg`" />
        <span class="name_surname">{{ name }} {{ surname }}</span>
        <span class="role">{{ role }}</span>
    </div>
</NuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'name', 'surname', 'role', 'link']);
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

    .name_surname {
        font-weight: bold;
        font-size: 20px;
        margin: 2px;
    }

    .role{
        font-size: 15px;
        margin: 2px;
    }

    .card
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
        text-decoration: none;
    }
    .card:hover {
        background-color:rgba(248, 248, 255, 0.8);
        cursor: pointer;
        color: black;
    }
</style>