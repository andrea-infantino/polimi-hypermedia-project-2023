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
        border-radius: 5px;
        height: 300px;
        width: 300px;
        margin-bottom: 10px;
        background-image:url('~/assets/img/user_default_photo.jpg');
        background-size: cover;
    }

    .name_surname {
        font-weight: bold;
        font-size: larger;
        margin: 2px;
    }

    .role{
        font-size: medium;
        margin: 2px;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        width: fit-content;
        height: fit-content;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.5s, color 0.5s, transform 0.5s;
    }
    .card:hover {
        background-color:rgba(248, 248, 255, 0.8);
        color: black;
        transform: translate3d(0px, -5px, 5px);
    }
</style>