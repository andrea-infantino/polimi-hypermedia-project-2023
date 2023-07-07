<template>
    <NuxtLink :to = "link" :aria-label="`Link to ${name} ${surname} page`">
        <div class="card">
            <img class="person-card-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/People/${id}.jpg`" :alt="`${name} ${surname}'s photo`" />
            <span class="name_surname">{{ surname }} {{ name }}</span>
            <span class="role">{{ role }}</span>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'name', 'surname', 'role', 'link']);
</script>

<style>
    .person-card-img {
        border-radius: 5px;
        margin: auto;
        vertical-align: middle;
        height: 300px;
        width: 300px;
        margin-bottom: 10px;
        background-size: cover;
    }
    .name_surname {
        font-weight: bold;
        font-size: larger;
        margin: 2px;
    }

    .role {
        font-size: medium;
        margin: 2px;
    }

    .card {
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

    .card:active {
        transform: scale(0.95);
    }
</style>