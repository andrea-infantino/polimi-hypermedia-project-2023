<template>
  <Head>
      <Title>{{ project.title }} - Wizarding Ventures</Title>
  </Head>

  <main>
    <MyTitle :title="project.title" />

    <div class="project-page">

      <NuxtLink :to="isPreviousDisabled ? '#' : `/projects/${project.id-1}`" :class="{ 'disabled': isPreviousDisabled }" class="project-button" role="button" aria-label="Previous project button">
          &#8249;
      </NuxtLink> 

      <div class="project-container">
        
        <div class="main-info">
            
            <div class="project-img-container">
                <img class="project_img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${project.id}.jpg`" :alt="`${project.title}'s logo`" />
            </div>

            <div class="project-info">
                <span class="project-year">
                    <b>Foundation year:</b>&emsp; {{ project.foundation_year }} 
                </span>
                <span>
                    <!-- project supervisor -->
                    <b>Supervisor:</b> <br>
                    <div class="project-people-container-tab">
                        <NuxtLink :to="`/our_team/${supervisor.id}`" class="small-transparent-btn">• {{ supervisor.surname }} {{ supervisor.name }} <br> </NuxtLink>
                    </div>
                </span>
                <span v-if="team.length!=0">
                    <!-- project team members -->
                    <b>Team:</b> <br>
                    <div class="project-people-container-tab">
                        <NuxtLink v-for = "person of team" :to="`/our_team/${person.id}`" class="small-transparent-btn">• {{ person.surname }} {{ person.name }} <br> </NuxtLink>
                    </div>
                </span>
                <span>
                    <!-- related areas -->
                    <b>Areas:</b> <br>
                    <div class="project-area-container-tab">
                        <NuxtLink v-for = "area of project.Areas" :to="`/all_areas/${area.id}`" class="small-transparent-btn"> <img class="area-logo" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} area logo`"/>{{ area.name }}</NuxtLink>
                    </div>
                </span>
            </div>
        
        </div>

        <!-- project description -->
        <div class="long-description">
            <span>  
                <span class="description-cloud-title">Description:</span>
                <span class="description-cloud">{{ project.presentation_text }}</span>
            </span>
            <span>
                <span class="description-cloud-title">Problem:</span>
                <span class="description-cloud">{{ project.problem_text }}</span>
            </span>
        </div>

      </div>

      <NuxtLink :to="isNextDisabled ? '#' : `/projects/${project.id+1}`" :class="{ 'disabled': isNextDisabled }" class="project-button" role="button" aria-label="Next project button">
          &#8250;
      </NuxtLink> 

    </div>

  </main>
</template>

<script>
  export default defineNuxtComponent({
      async asyncData() {
          const route = useRoute()
          const project = await $fetch('/api/projects/' + route.params.id)  //get the specific project from its id

          const projects = await $fetch('/api/projects') //get all projects to calculate the total number (maybe it can be optimized by using a count query)
          const numOfProjects = projects.length

          //to distinguish between supervisor and other members of the team
          const team = ref([])
          const supervisor = ref({})

          for(let entry of project.Participations) {
              for(let person of project.People) {
                  if(person.id == entry.person_id) {
                      if(entry.is_project_supervisor == true) supervisor.value = person
                      else team.value.push(person)
                  }
              }
          }

          //Search Engine Optimization
          const description = ref('In this page you can find all the information about the project ' + project.title + '.')
          const keywords = ref('Project, ' + project.title + ', ' + project.Areas.map(area => area.name).join(', '))

          useHead({
            meta: [
              { name: 'description', content: description },
              { name: 'keywords', content: keywords }
            ]
          })

          return {
              project, team, supervisor, numOfProjects
          }
      },

      computed: {
          isNextDisabled() {
            return this.project.id === this.numOfProjects - 1;
          },

          isPreviousDisabled() {
            return this.project.id === 0;
          }
      }
  })
</script>

<style>
  .project-info {
    color: ghostwhite;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .main-info {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    max-width: 100%;
  }

  .project-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    width: auto;
    max-width: 75vw;
    align-self: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .area-logo {
    width: 15px;
    height: auto;
    margin-right: 10px;
    margin-bottom: -1px;
  }

  .project-page {
    justify-content: space-around;
    display: flex;
    vertical-align: top;
    margin-top: 30px;
  }

  .project-button {
    position: sticky;
    top: 35vh;
    height: 12vh;
    font-size: 3em;
    color: ghostwhite;
    border-radius: 10px;
    padding: 90px 20px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
  }

  .project-button:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
  }

  .project-button:active {
    box-shadow: 3px 5px 30px 15px rgba(172,172,172,.6);
  }

  .project-button.disabled {
    color: gray;
    cursor: not-allowed;
  }

  .project-button.disabled:hover {
    background-color: transparent;
    box-shadow: 0 0;
  }

  .project-area {
    font-size: x-large;
    font-weight: bold;
  }

  .project-people-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: baseline;
  }

  .project-people-container>*, .project-area-container>* {
    padding: 3px;
    text-decoration: underline;
  }

  .project-people-container>*:hover, .project-area-container>*:hover {
    text-decoration: none;
    background-color: ghostwhite;
    opacity: 0.9;
    color: black;
    cursor: pointer;
    width: fit-content;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .small-transparent-btn:hover .area-logo {
    filter: invert(1);    
  }

  .project-img-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    overflow: hidden;
    max-width: 30vw;
    min-width: 250px;
  }

  .project-people-container-tab, .project-area-container-tab {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .project_img {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>