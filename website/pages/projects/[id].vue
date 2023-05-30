<template>
    <main>
        <div class="title-area">
            <div class="title">
                ALL PROJECTS
            </div>
        </div>

        <div class="project-container">
            
            
            <div class="project-info">
                <span class="project-title">{{ project.title }} </span>
                <span>
                    <b>Supervisor:</b> <br>
                    <div class="project-people-container-tab">
                        <NuxtLink :to="`/our_team/${supervisor.id}`" class="area-person-link">• {{ supervisor.surname }} {{ supervisor.name }} <br> </NuxtLink>
                    </div>
                </span>
                <span>
                    <b>Areas:</b> <br>
                    <div class="project-area-container-tab">
                        <NuxtLink v-for = "area of project.Areas" :to="`/all_areas/${area.id}`" class="area-person-link">• {{ area.name }}</NuxtLink>
                    </div>
                </span>
                <span class="description-text"><b>Description:</b> <br> 
                    <span class="tab">{{ project.presentation_text }}</span></span>
                <span>
                    <b>Team:</b> <br>
                    <div class="project-people-container-tab">
                        <NuxtLink v-for = "person of team" :to="`/our_team/${person.id}`" class="area-person-link">• {{ person.surname }} {{ person.name }} <br> </NuxtLink>
                    </div>
                </span>
            </div>
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
  .project-title {
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
  }
  .project-area {
    font-size: x-large;
    font-weight: bold;
  }
  .tab {
    display: inline-block;
    margin-left: 1em;
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
    padding: 3px;
    color: ghostwhite;
  }
  .area-person-link:hover {
    text-decoration: underline;
  }
</style>