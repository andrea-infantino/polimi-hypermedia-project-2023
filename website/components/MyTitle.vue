<template>
    <div class="title-area"> 
        <MyBackButton />   
        <div v-if="link!=null" class="clickable-title">
            <NuxtLink :to="link" class="clickable-title-link">{{ title }}</NuxtLink>
        </div>
        <div v-else class="title">{{ title }}</div>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'link']);
</script>

<style>
    .title-area {
      padding: 10px;
      background-color: #E8EEF1;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);    
    }

    .title {
        font-weight: bold;
        font-size: 40px;
        margin: 20px;
        text-align: center;
        color: black;
    }

    .clickable-title {
        margin: 20px;
        text-align: center;
    }

    .clickable-title-link {
        font-weight: bold;
        font-size: 40px;
        color: black;
        transition: all 0.3s; 
    }

    .clickable-title-link:hover {
        text-decoration: underline;
        text-underline-offset: 6px;
        transform: translateY(-5px);
    } /* non fa translateY */

    .clickable-title-link:active {
        transform: scale(0.95);
    }

</style>