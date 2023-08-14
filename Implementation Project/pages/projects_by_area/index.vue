<template>
    <Head>
        <Title>Projects by Area - Wizarding Ventures</Title>
    </Head>

    <main>
      <MyTitle :title="'PROJECTS BY AREA'" />

      <h1 class="area-prj-intro">Check our projects for each area of investment:</h1>
  
      <!-- preview of each area (name, logo and link to the page containing the area projects)-->
      <div id="generic-cards-container">
        <SingleArea v-for = "area of areas" :id = "area.id" :name = "area.name + ' projects'" :link = "'/projects_by_area/' + area.id" />
      </div>

      <hr class="separator" />

      <div class="bottom-links">
          <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects" class="transparent-btn">See the most relevant projects</NuxtLink>
          <NuxtLink id="to_all_projects" to="/projects" class="transparent-btn">Check all the projects</NuxtLink>
      </div>

    </main>
  </template>
    
  <script setup>
    const { data: areas } = await useFetch('/api/all_areas') //get all areas
  
    //Search Engine Optimization
    const description = ref('In this page you will find the projects for each area of investment.')
    const keywords = ref('Projects By Area, Projects, Investments, Area')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]
    })
  </script>
    
    
  <style>
    .area-prj-intro {
      color: ghostwhite;
      font-size: 22px;
      margin: 30px 20px 10px;
      text-align: center;
    }
  </style>