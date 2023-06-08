<template>
    <Head>
        <Title>Projects by Area - Wizarding Ventures</Title>
    </Head>

    <main>
      <div class="title-area">
        <div class="title">
          PROJECTS BY AREA
        </div>
      </div>

      <h1 class="intro"><strong>Check the projects for each area</strong></h1>
  
      <div id="list-container">
        <SingleArea v-for = "area of areas" :id = "area.id" :name = "area.name + ' projects'" :link = "'/projects_by_area/' + area.id" />
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