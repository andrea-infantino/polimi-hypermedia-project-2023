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
                <!-- <span class="area-name">{{ area.name }} </span> -->
                <span class="area-description"> {{ area.description }} </span>
                <span>
                    <b>Projects:</b> <br>
                    <div class="area-projects-container">
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
                        <img class="area-imgs" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.jpg`" />
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
    gap: 20px;
    max-width: 520px;
  }
  .area-img
  {
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image:url('~/assets/img/user_default_photo.jpg');
  }

  .area-imgs
  {
    border-radius: 5px;
    height: 220px;
    width: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
 
  .area-projects-container
  {
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: baseline;
  }
  .area-projects-container>*
  {
    padding: 3px;
    text-decoration: underline;
  }
  .area-projects-container>*:hover
  {
    text-decoration: none;
    background-color: ghostwhite;
    opacity: 0.9;
    color: black;
    cursor: pointer;
    width: fit-content;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>