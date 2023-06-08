<template>
  <Head>
        <Title>Areas - Wizarding Ventures</Title>
    </Head>

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
  #list-container {
    padding: 3% 15%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }

</style>