<template>
    <Head>
        <Title>{{ area.name }} - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="`${area.name} projects`" />
        
        <div class="area-container">
            <div class="prj-area-info">
                <div class="area-prj-header">
                  <NuxtLink :to="isPreviousDisabled ? '#' : `/projects_by_area/${area.id-1}`" :class="{ 'disabled': isPreviousDisabled }" class="prj-area-button" role="button" aria-label="Previous area projects button">
                    &#8249;
                  </NuxtLink>

                    <div class="pba-img-link">
                        <img class="prj-by-area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} area logo`" />

                        <NuxtLink :to="`/all_areas/${area.id}`" :title="`${area.name} area`">
                            <span class="small-transparent-btn">See the full description</span>
                        </NuxtLink>
                    </div>

                    <NuxtLink :to="isNextDisabled ? '#' : `/projects_by_area/${area.id+1}`" :class="{ 'disabled': isNextDisabled }" class="prj-area-button" role="button" aria-label="Next area projects button">
                      &#8250;
                    </NuxtLink> 

                </div>  

                <span class="related-projects">
                    <div class="related-projects-container">
                        <ProjectCard v-for = "project of area.Projects" :id="project.id" :title="project.title" :link="'/projects/' + project.id" :img_bool="true" />
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
            const area = await $fetch('/api/projects_by_area/' + route.params.id)

            const areas = await $fetch('/api/all_areas')
            const numOfAreas = areas.length

            const description = ref('In this page you can find all the projects related to the area you selected, ' + area.name + '. Click on the project to see more details.')
            const keywords = ref('Projects by Area, ' + area.name)

            useHead({
                meta: [
                    { name: 'description', content: description },
                    { name: 'keywords', content: keywords }
                ]
            })

            return {
                area, numOfAreas
            }
        },

        computed: {
          isNextDisabled() {
            return this.area.id === this.numOfAreas - 1;
          },

          isPreviousDisabled() {
            return this.area.id === 0;
          }
        }

    })
</script>

<style>
  .area-container {
    display: flex;
    justify-content: center;
  }

  .prj-area-info {
    color: ghostwhite;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 0 2vw;
    gap: 50px;
    max-width: 80%;
    margin-top: 30px;
  }

  .area-prj-header {
    justify-content: space-evenly;
    width: 60%;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  .prj-by-area-img {
    width: 20vh;
    height: auto;
    margin: 10px;
  }

  .pba-img-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .prj-area-button {
    position: sticky;
    top: 20vh;
    font-size: 3em;
    height: 10vh;
    color: ghostwhite;
    border-radius: 10px;
    padding: 70px 20px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
  }

  .prj-area-button:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
  }

  .prj-area-button:active {
    box-shadow: 3px 5px 30px 15px rgba(172,172,172,.6);
  }

  .prj-area-button.disabled {
    color: gray;
    cursor: not-allowed;
  }

  .prj-area-button.disabled:hover {
    background-color: transparent;
    box-shadow: 0 0;
  }

  .related-projects-container {
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 50px;
    max-width: 1200px;
  }

</style>