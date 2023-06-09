<template>
    <Head>
        <Title>{{ area.name }} - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
            <NuxtLink to="/projects_by_area">
                <div class="back-button">&lArr;</div>
            </NuxtLink>
            <div class="title">
                {{ area.name }} Projects
            </div>
        </div>
        
        <div class="Area_container">
            <div class="area-info">
                <div class="area-header">
                    <NuxtLink v-if="area.id!=0" :to="`/projects_by_area/${area.id-1}`">
                        <span class="arrow-enabled">&#8249;</span>
                    </NuxtLink>

                    <span v-if="area.id==0">
                        <span class="arrow-disabled">&#8249;</span>
                    </span>

                    <img class="prj-by-area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" />

                    <NuxtLink v-if="area.id<4" :to="`/projects_by_area/${area.id+1}`">
                        <span class="arrow-enabled">&#8250;</span>
                    </NuxtLink>

                    <span v-if="area.id>=4">
                        <span class="arrow-disabled">&#8250;</span>
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

  .prj-by-area-img {
    height: auto;
    width: 15%;
    margin: 10px;
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