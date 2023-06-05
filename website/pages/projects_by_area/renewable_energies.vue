<template>
    <main>
        <div class="title-area">
            <div class="title">
                {{ area.name }} Projects
            </div>
        </div>
        
        <div class="Area_container">
            <div class="area-info">
                <img class="area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`"/>           
                <span class="related-projects">
                    <div class="related-projects-container">
                        <NuxtLink v-for = "project of area.Projects" :to="`/projects/${project.id}`">
                            
                            <img class="prj-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${project.id}.jpg`" />
                            
                            <div>{{ project.title }}</div>
                        </NuxtLink>
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
            const area = await $fetch('/api/projects_by_area/renewable_energies')
            return {
                area
            }
        }
    })
</script>

<style>
  .area-info
  {
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

  .area-img
  {
    border-radius: 5px;
    height: auto;
    width: 25%;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .prj-img
  {
    border-radius: 5px;
    height: auto;
    width: 30%;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .related-projects{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  .related-projects-container
  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    align-content: flex-start;
  }

  .related-projects-container>*
  {
    padding: 5px;
    width: fit-content;
    border-radius: 5px;
    background-color: ghostwhite;
    opacity: 0.9;
    color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: padding 0.5s;
  }

  .related-projects-container>*:hover
  {
    padding-left: 20px;
    padding-right: 20px;
  }

</style>