<template>
    <Head>
        <Title>Projects - Wizarding Ventures</Title>
    </Head>

    <main>
      <MyTitle :title="'ALL PROJECTS'" />

      <div id="sorting-selector-proj">
        <label for="sorting-selector-proj">Sort by:</label>
            <select class="menu" id="orderproj" v-model="orderproj">
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Relevance">Relevance</option>
              <option value="Newest first">Newest first</option>
              <option value="Oldest first">Oldest first</option>
            </select>
      </div>

      <div v-if="orderproj!='A-Z' && orderproj!='Z-A' && sorted!=null" class="ordered-projects">
        <div class="proj-left">
          <span class="proj-block">
            <ProjectCard v-for = "project of column1" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="false"/>
          </span>
        </div>
        
        <div class="proj-right">
          <span class="proj-block">
            <ProjectCard v-for = "project of column2" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="false"/>
          </span>
        </div>
        
      </div>

      <div v-else-if="(orderproj=='A-Z' || orderproj=='Z-A') && sorted!=null" class="ordered-projects">
        <div class="proj-left">
          <div v-for="letter of column1" class="letter-block">
              <span class="letter">{{ letter }}</span>
              <ProjectCard v-for = "project of Projects" v-show="project.title[0] === letter" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="false"/>
          </div>
        </div>
        <div class="proj-right">
          <div v-for="letter of column2" class="letter-block">
              <span class="letter">{{ letter }}</span>
              <ProjectCard v-for = "project of Projects" v-show="project.title[0] === letter" :id = "project.id" :title  = "project.title" :link = "'/projects/' + project.id" :img_bool="false"/>
          </div>
        </div>
      </div>

      <hr class="separator" />

      <div class="bottom-links">
          <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects" class="transparent-btn">See the most relevant projects</NuxtLink><br>
          <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="transparent-btn">Check the projects divided by area</NuxtLink>
      </div>

    </main>
  </template>
  
  <script setup>
    const { data: Projects } = await useFetch('/api/projects')

    const orderproj = ref("A-Z") // default order
    const column1 = ref([])
    const column2 = ref([])

    const sorted = computed(() => {
      const projects = [...Projects.value]; // Create a copy of the Projects array

      if (orderproj.value === "A-Z" || orderproj.value === "Z-A") {
        const sortedProjects = (orderproj.value == "A-Z" ? projects : projects.reverse())

        const letters = sortedProjects.map((project) => project.title[0]).filter((value, index, self) => self.indexOf(value) === index);

        column1.value = letters.slice(0, Math.ceil(letters.length / 2));
        column2.value = letters.slice(Math.ceil(letters.length / 2));

        return sortedProjects;

      } else if (orderproj.value === "Relevance") {
        const sortedProjects = projects.sort((a, b) => b.score - a.score);

        column1.value = sortedProjects.slice(0, Math.ceil(sortedProjects.length / 2));
        column2.value = sortedProjects.slice(Math.ceil(sortedProjects.length / 2));

        return sortedProjects;

      } else if (orderproj.value === "Newest first" || orderproj.value === "Oldest first") {
        const sortOrder = orderproj.value === "Newest first" ? -1 : 1;

        const sortedProjects = projects.sort((a, b) => (b.foundation_year - a.foundation_year) * sortOrder);
        
        column1.value = sortedProjects.slice(0, Math.ceil(sortedProjects.length / 2));
        column2.value = sortedProjects.slice(Math.ceil(sortedProjects.length / 2));

        return sortedProjects;
        
      } else {
        return projects;
      }
    });


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
    .ordered-projects {
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

    .proj-block {
      margin: 5vh 0;
      height: 120vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

  </style>