<template>
  <main>
    <div class="title-area">
      <div class="title">
        ALL AREAS
      </div>
    </div>

    <div id="list-container">
      <SingleArea v-for = "area of areas" :id = "area.id" :name = "area.name" :link = "'/all_areas/' + area.id" />
    </div>
  </main>
</template>
  
<script setup>
  const { data: areas } = await useFetch('/api/all_areas')
</script>
  
  
<style>
  #list-container
  {
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }

  main
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    gap: 10px;
  }
  
</style>