<template>
    <Head>
        <Title>{{ area.name }} - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#8630;</a>
            <div class="title">
                {{ area.name }} Projects
            </div>
        </div>
        
        <div class="Area_container">
            <div class="area-info">
                <div class="area-prj-header">
                    <NuxtLink v-if="area.id!=0" :to="`/projects_by_area/${area.id-1}`">
                        <span class="area-prj-arrow-enabled" role="button" aria-label="Previous area button">&#8249;</span>
                    </NuxtLink>

                    <span v-if="area.id==0">
                        <span class="area-prj-arrow-disabled" role="button" aria-label="Disabled previous area button">&#8249;</span>
                    </span>

                    <div class="pba-img-link">
                        <img class="prj-by-area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} area logo`" />

                        <NuxtLink :to="`/all_areas/${area.id}`" :title="`${area.name} area`">
                            <span class="full-area-link">See the full description</span>
                        </NuxtLink>
                    </div>

                    <NuxtLink v-if="area.id<4" :to="`/projects_by_area/${area.id+1}`">
                        <span class="area-prj-arrow-enabled" role="button" aria-label="Next area button">&#8250;</span>
                    </NuxtLink>

                    <span v-if="area.id>=4">
                        <span class="area-prj-arrow-disabled" role="button" aria-label="Disabled next area button">&#8250;</span>
                    </span>

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

            const description = ref('In this page you can find all the projects related to the area you selected, ' + area.name + '. Click on the project to see more details.')
            const keywords = ref('Projects by Area, ' + area.name)

            useHead({
                meta: [
                    { name: 'description', content: description },
                    { name: 'keywords', content: keywords }
                ]
            })

            return {
                area
            }
        }
    })
</script>

<style>
  .area-info {
    color: ghostwhite;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 50px;
    max-width: 80%;
    margin-top: 30px;
  }

  .area-prj-header {
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  .prj-by-area-img {
    width: 20%;
    height: auto;
    margin: 10px;
  }

  .pba-img-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .full-area-link {
    display: inline-block;
    border-radius: 5px;
    padding: 2px 10px;
    transition: padding 0.3s, background-color 0.3s, color 0.3s;
  }

  .full-area-link:hover {
    text-decoration: underline;
    color: black;
    background-color: rgba(248, 248, 255, 0.900);
    padding: 2px 15px;
  }

  .area-prj-arrow-enabled {
    font-size: 3em;
    color: ghostwhite;
    border-radius: 10px;
    padding: 30px 20px;
    transition: all 0.2s;
  }

  .area-prj-arrow-enabled:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
  }

  .area-prj-arrow-disabled {
    font-size: 3em;
    border-radius: 10px;
    padding: 30px 20px;
    color: gray;
    cursor: not-allowed;
    
  }

  .related-projects-container {
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 50px;
    max-width: 1200px;
  }

</style>