<template>
    <main>
        <div class="title-area">
            <div class="title">
                {{ area.name }}
            </div>
        </div>
        
        <div class="Area_container">
            <img class="area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
            <div class="area-info">
                <span class="area-description"> {{ area.description }} </span>
                <span class="related-projects">
                    <div class ="related-projects-title">
                        <b>Related projects:</b> <br> <br>
                    </div>
                  <!--  <div class="area-projects-container">
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
                    </div> -->
                    <div class="related-projects-container">
                        <NuxtLink v-for = "project of area.Projects" :to="`/projects/${project.id}`">{{ project.title }}</NuxtLink>
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
  .area-info
  {
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
  .area-img
  {
    display: flex;
    width: 40%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image:url('~/assets/img/user_default_photo.jpg');
  }

  .area-imgs
  {
    border-radius: 5px;
    height: auto;
    width: 35%;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .related-projects{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .related-projects-title
  {
    font-size: xx-large;
    font-weight: bolder;
    margin-top: 20px;
    align-self: center;
  }

  .related-projects-container
  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 700px;
    align-self: center;
    margin: 20px;
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