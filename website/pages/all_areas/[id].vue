<template>
    <main>
        <div class="title-area">
          <NuxtLink to="/all_areas">
            <div class="back-button">&lArr;</div>
          </NuxtLink>
            <div class="title">
                {{ area.name }}
            </div>
        </div>
        
        <div class="Area_container">
            <img class="area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" />
            <div class="area-info">
                <span class="area-description"> {{ area.description }} </span>

                <span class="related-projects">
                    <div class ="related-projects-title">
                      Related projects:
                    </div>

                    <button class="button-carousel prev">prev</button>
                    <button class="button-carousel next">next</button>
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
            const area = await $fetch('/api/all_areas/' + route.params.id)
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
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 50px;
    max-width: 75%;
    margin-top: 30px;
  }
  
  .area-img {
    display: flex;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }

  .related-projects {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .related-projects-title {
    font-size: xx-large;
    font-weight: bolder;
    margin-top: 20px 0px;
    align-self: center;
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