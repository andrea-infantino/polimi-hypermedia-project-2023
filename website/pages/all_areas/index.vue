<template>
    <Head>
        <Title>Areas - Wizarding Ventures</Title>
    </Head>

    <main>
    <div class="title-area">
      <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#10554;</a>
      <div class="title">
        ALL AREAS
      </div>
    </div>

    <span class="all-areas-text">Browse the areas of investment to know more about what we care and love:</span>

    <div id="list-container">
      <SingleArea v-for = "area of areas" :id = "area.id" :name = "area.name" :link = "'/all_areas/' + area.id" />
    </div>
  </main>
</template>
  
<script setup>
  const { data: areas } = await useFetch('/api/all_areas')

  const description = ref('In this page you will find all the areas of investment of our projects.')
  const keywords = ref('Areas, Investments, Projects, All Areas')

  useHead({
      meta: [
          { name: 'description', content: description },
          { name: 'keywords', content: keywords }
      ]
  })

</script>
  
  
<style>
  .all-areas-text {
      text-align: center;
      font-weight: bold;
      font-size: 22px;
      margin: 30px 0px 10px;
  }

  #list-container {
    padding: 3% 15%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }

</style>