<template>
  <Head>
      <Title>{{ project.title }} - Wizarding Ventures</Title>
  </Head>

  <main>
      <div class="title-area">
        <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#8630;</a>

        <div class="title">
            {{ project.title }}
        </div>
      </div>

    <div class="project-page">

      <NuxtLink v-if="project.id!=0" :to="`/projects/${project.id-1}`">
        <span class="prj-arrow-enabled" role="button" aria-label="Previous project arrow">&#8249;</span>
      </NuxtLink>

      <span v-if="project.id==0">
          <span class="prj-arrow-disabled" role="button" aria-label="Disabled previous project arrow">&#8249;</span>
      </span>

      <div class="project-container">

          <div class="project-info">
              <span class="project-year">
                  <b>Foundation year:</b>&emsp; {{ project.foundation_year }} 
              </span>
              <span>
                  <b>Supervisor:</b> <br>
                  <div class="project-people-container-tab">
                      <NuxtLink :to="`/our_team/${supervisor.id}`" class="area-person-link">• {{ supervisor.surname }} {{ supervisor.name }} <br> </NuxtLink>
                  </div>
              </span>
              <span v-if="team.length!=0">
                  <b>Team:</b> <br>
                  <div class="project-people-container-tab">
                      <NuxtLink v-for = "person of team" :to="`/our_team/${person.id}`" class="area-person-link">• {{ person.surname }} {{ person.name }} <br> </NuxtLink>
                  </div>
              </span>
              <span>
                  <b>Areas:</b> <br>
                  <div class="project-area-container-tab">
                      <NuxtLink v-for = "area of project.Areas" :to="`/all_areas/${area.id}`" class="area-person-link"> <img class="area-logo" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} area logo`"/>{{ area.name }}</NuxtLink>
                  </div>
              </span>
              <span class="description-text"><b>Description:</b> <br> 
                  <span class="prj-description">{{ project.presentation_text }}</span>
              </span>
              <span class="description-text"><b>Problem:</b> <br> 
                  <span class="prj-description">{{ project.problem_text }}</span>
              </span>
          </div>

          <div class="project-img-container">
              <img class="project_img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${project.id}.jpg`" :alt="`${project.title}'s logo`" />
          </div>

      </div>

      <NuxtLink v-if="project.id<19" :to="`/projects/${project.id+1}`">
        <span class="prj-arrow-enabled" role="button" aria-label="Next project button">&#8250;</span>
      </NuxtLink>

      <span v-if="project.id>=19">
        <span class="prj-arrow-disabled" role="button" aria-label="Disabled next project button">&#8250;</span>
      </span>

    </div>

  </main>
</template>

<script>
  export default defineNuxtComponent({
      async asyncData() {
          const route = useRoute()
          const project = await $fetch('/api/projects/' + route.params.id)

          //to distinguish between supervisor and other members of the team
          const team = ref([])
          const supervisor = ref({})

          for(let entry of project.Partecipations) {
              for(let person of project.People) {
                  if(person.id == entry.person_id) {
                      if(entry.is_project_manager == true) supervisor.value = person
                      else team.value.push(person)
                  }
              }
          }

          const description = ref('In this page you can find all the information about the project ' + project.title + '.')
          const keywords = ref('Project, ' + project.title + ', ' + project.Areas.map(area => area.name).join(', '))

          useHead({
            meta: [
              { name: 'description', content: description },
              { name: 'keywords', content: keywords }
            ]
          })

          return {
              project, team, supervisor
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
  max-width: 520px;
}

.project-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  width: auto;
  max-width: 1000px;
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
  align-items: center;
  margin-top: 30px;
}

.prj-arrow-enabled {
  font-size: 3em;
  color: ghostwhite;
  margin: 0px 100px;
  border-radius: 10px;
  padding: 70px 20px;
  transition: all 0.2s;
}

.prj-arrow-enabled:hover {
  color: black;
  background-color: ghostwhite;
  box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
}

.prj-arrow-disabled {
  font-size: 3em;
  margin: 0px 100px;
  border-radius: 10px;
  padding: 10px 25px;
  color: gray;
  cursor: not-allowed;
  
}

/* .project-title {
  font-size: xx-large;
  font-weight: bold;
  color: black;
  background-color: ghostwhite;
  opacity: 0.9;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
} */

.project-area {
  font-size: x-large;
  font-weight: bold;
}

.prj-description {
  display: inline-block;
  margin: 1em;
  color: black;
  background-color: #fff6f6d2;
  box-shadow: 10px 10px 20px 0 rgba(172,172,172,.5);
  padding: 20px 30px;
  border-radius: 10px;
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

.area-person-link {
  color: ghostwhite;
  margin-left: 1em;
  border-radius: 5px;
  padding: 3px 5px;
  transition: padding 0.3s, background-color 0.3s, color 0.3s;
}

.area-person-link:hover {
  text-decoration: underline;
  color: black;
  background-color: rgba(248, 248, 255, 0.900);
  padding: 3px 15px;
}

.area-person-link:hover .area-logo {
  filter: invert(1);    
}

.project-img-container {
  display: flex;
  flex-direction: column;
  align-self: center;
  overflow: hidden;
}

.project_img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>