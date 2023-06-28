<template>
    <Head>
        <Title>Projects - Wizarding Ventures</Title>
    </Head>

    <main>
      <div class="title-area">
        <MyBackButton /> 
        <div class="title">
          ALL PROJECTS
        </div>
      </div>

      <div class="alphabetical-projects">
        <div class="proj-left">
          <div v-for="letter of letters1" class="letter-block">
              <span class="letter">{{ letter }}</span>
              <ProjectCard v-for = "project of Projects" v-show="project.title[0] === letter" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="false"/>
          </div>
        </div>
        <div class="proj-right">
          <div v-for="letter of letters2" class="letter-block">
              <span class="letter">{{ letter }}</span>
              <ProjectCard v-for = "project of Projects" v-show="project.title[0] === letter" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="false"/>
          </div>
        </div>
      </div>

      <hr class="separator " />

      <div class="links">
          <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects" class="mrp-link">See the most relevant projects</NuxtLink><br>
          <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="mrp-link">Check the projects divided by area</NuxtLink>
      </div>

    </main>
  </template>
  
  <script setup>
    const { data: Projects } = await useFetch('/api/projects')

    // divide initial letters to display projects in two columns
    const letters2 = ref([])
    const letters1 = ref([])

    letters2.value = Projects.value.map(project => project.title[0]).filter((value, index, self) => self.indexOf(value) === index)
    letters1.value = letters2.value.splice(0, letters2.value.length/2)

    const description = ref('In this page you will find all of our ongoing projects.')
    const keywords = ref('Projects, Investments')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]
    })

  </script>
  
  <style>
    .alphabetical-projects {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .letter-block {
      margin: 60px;
    }

    .letter {
      font-size: 40px;
      color: ghostwhite;
      font-weight: bold;
      margin-bottom: 10px;
      margin-left: 2%;
    }

  </style>