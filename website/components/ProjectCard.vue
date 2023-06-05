<template>
    <NuxtLink :to = "link" >
        <div class="card">
            <img v-show="img_bool===true" class="project_img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id}.jpg`" />
            <span class="project_title">{{ title }}</span>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'title', 'link', 'img_bool']);
</script>

<style>
    .project_img {
        border-radius: 5px;
        height: auto;
        width: 300px;
        margin-bottom: 10px;
        align-self: center;
        background-size: cover;
    }

    .project_title {
        font-weight: bold;
        font-size: 20px;
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