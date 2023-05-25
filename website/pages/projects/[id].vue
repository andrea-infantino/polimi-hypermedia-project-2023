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
                    <b>Areas:</b> <br>
                    <div class="project-area-container-tab">
                        <span v-for = "area of project.Areas">• {{ area.name }}</span>
                    </div>
                </span>
                <span class="description-text"><b>Description:</b> <br> 
                    <span class="tab">{{ project.presentation_text }}</span></span>
                <span>
                    <b>Team:</b> <br>
                    <div class="project-people-container-tab">
                        <span v-for = "person of project.People">• {{ person.surname }} <br> </span>
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

            return {
                project
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
</style>