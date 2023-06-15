<template>
    <Head>
        <Title>Projects by Area - Wizarding Ventures</Title>
    </Head>

    <main>
      <div class="title-area">
        <a href="" class="back-button" @click.prevent="$router.back()">&#8630;</a>
        <div class="title">
          PROJECTS BY AREA
        </div>
      </div>

      <h1 class="area-prj-intro"><center><strong>Check our projects for each area of investment:</strong></center></h1>
  
      <div id="list-container">
        <SingleArea v-for = "area of areas" :id = "area.id" :name = "area.name + ' projects'" :link = "'/projects_by_area/' + area.id" />
      </div>
    </main>
  </template>
    
  <script setup>
    const { data: areas } = await useFetch('/api/all_areas')
  </script>
    
    
  <style>
    .area-prj-intro {
      color: ghostwhite;
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