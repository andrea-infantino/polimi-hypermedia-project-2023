<template>
  
  <v-carousel v-if="projectsArray && projectsArray.length > 1"
    hide-delimiter-background
    height="auto"
    show-arrows="hover"
    color="white"
    class="carousel">
    
    <v-carousel-item v-for="project of projectsArray" :key="project.id" cover>
      <NuxtLink :to="`/projects/${project.id}`" :aria-label="`Link to ${project.title} page`">
        <v-img :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${project.id}.jpg`" class="carousel-img"/>
        <div class="carousel-proj-title">{{ project.title }}</div>
      </NuxtLink>
    </v-carousel-item>
  </v-carousel>


  <div v-else="projectsArray && projectsArray.length === 1">
    <NuxtLink :to="`/projects/${projectsArray[0].id}`" :aria-label="`Link to ${projectsArray[0].title} page`">
      <div class="single-proj">
      <v-img :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${projectsArray[0].id}.jpg`" class="carousel-img"/>
      </div>
      <div class="carousel-proj-title-single">{{ projectsArray[0].title }}</div>
    </NuxtLink>
  </div>
     
</template>

<script setup>
  const props = defineProps(['projectsArray']);
</script>

<style>
  .carousel {
    border-radius: 10px;
    box-shadow: 10px 4px 8px 20 rgba(0, 0, 0, 0.2);
  }

  .carousel-proj-title {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0 50px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
  }

  .carousel-img:hover {
    transform: scale(1.05);
    filter: brightness(80%);
  }

  .carousel-img:active {
    transform: scale(1.1);
    filter: brightness(60%);
  }

  .single-proj {
    box-shadow: 10px 4px 8px 10 rgba(0, 0, 0, 0.5);
    margin: 0;
    overflow: hidden;
    border-radius: 10px;
  }

  .carousel-proj-title-single {
    position: relative;
    bottom: 44px;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    border-radius: 0 0 10px 10px;
  }
</style>