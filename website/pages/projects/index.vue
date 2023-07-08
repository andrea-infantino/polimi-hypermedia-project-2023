<template>
  <Head>
      <Title>Projects - Wizarding Ventures</Title>
  </Head>
  <main>
    <MyTitle :title="'PROJECTS'" />
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
        <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects" class="transparent-btn">See the most relevant projects</NuxtLink>
        <NuxtLink id="to_projects_by_area" to="/projects_by_area" class="transparent-btn">Check the projects divided by area</NuxtLink>
    </div>
  </main>
</template>
  
<script setup>
  const { data: Projects } = await useFetch('/api/projects') //get all projects

  const orderproj = ref("A-Z") //default order
  
  //visually split the columns in two
  const column1 = ref([])
  const column2 = ref([])

  //sort the projects based on the order selected by the user
  const sorted = computed(() => {
    const projects = [...Projects.value]; //create a copy of the Projects array

    if (orderproj.value === "A-Z" || orderproj.value === "Z-A" || orderproj.value == null || orderproj.value == "" || orderproj.value == undefined) {
      //alphabetical order or default

      const sortedProjects = (orderproj.value == "A-Z" ? projects : projects.reverse()) //reverse the array if the order is Z-A

      const letters = sortedProjects.map((project) => project.title[0]).filter((value, index, self) => self.indexOf(value) === index);

      column1.value = letters.slice(0, Math.ceil(letters.length / 2));
      column2.value = letters.slice(Math.ceil(letters.length / 2));

      return sortedProjects;

    } else if (orderproj.value === "Relevance") {
      //relevance order

      const sortedProjects = projects.sort((a, b) => b.score - a.score);

      column1.value = sortedProjects.slice(0, Math.ceil(sortedProjects.length / 2));
      column2.value = sortedProjects.slice(Math.ceil(sortedProjects.length / 2));

      return sortedProjects;

    } else if (orderproj.value === "Newest first" || orderproj.value === "Oldest first") {
      //date order

      const sortOrder = orderproj.value === "Newest first" ? -1 : 1;

      const sortedProjects = projects.sort((a, b) => (b.foundation_year - a.foundation_year) * sortOrder);
      
      column1.value = sortedProjects.slice(0, Math.ceil(sortedProjects.length / 2));
      column2.value = sortedProjects.slice(Math.ceil(sortedProjects.length / 2));

      return sortedProjects;  
    }
  });

  //Search Engine Optimization
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
    margin: 5vh 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
  }

  .letter {
    font-size: 40px;
    color: ghostwhite;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 3%;
  }

  .proj-block {
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .proj-right, .proj-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    border-radius: 10px;
    width: 40vw;
    padding: 50px 70px 40px;
    margin: 25px 20px 60px;
    background-color: rgba(0, 0, 0, 0.5); 
    box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 800px) {
    .ordered-projects {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    .proj-left, .proj-right {
      width: 80vw;
      margin: 25px 0 60px;
      box-shadow: 10px 0 15px 0 rgba(0, 0, 0, 0.5);
    }

    .proj-left {
      margin-bottom: 0;
      border-radius: 10px 10px 0 0;
      padding-bottom: 30px;
    }

    .proj-right {
      margin-top: 0;
      border-radius: 0 0 10px 10px;
      padding-top: 30px;
    }
  }
</style>