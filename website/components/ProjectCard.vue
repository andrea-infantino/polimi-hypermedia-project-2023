<template>
    <NuxtLink :to = "link" >
    <div class="card">

        
        <span class="project_title">{{ title }}</span>
        <span class="area">{{ area }}</span>
    </div>
</NuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'score', 'title', 'presentation_text', 'link']);
</script>

<style>
    .project_title {
        font-weight: bold;
        font-size: 20px;
        margin: 2px;
    }

    .area {
        font-size: 15px;
        margin: 2px;
    }

    .card {
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