<template>
    <Head>
        <Title>{{ area.name }} - Wizarding Ventures</Title>
    </Head>

    <main>
        <div class="title-area">
          
          <a href="" class="back-button" @click.prevent="$router.back()">&#8630;</a>
          <div class="title">
            {{ area.name }}
          </div>
        </div>
        
        <div class="Area_container">
          <div class="area-header">
            <NuxtLink v-if="area.id!=0" :to="`/all_areas/${area.id-1}`">
              <span class="area-arrow-enabled" role="button" aria-label="Previous area button">&#8249;</span>
            </NuxtLink>

            <span v-if="area.id==0">
              <span class="area-arrow-disabled" role="button" aria-label="Disabled previous area button">&#8249;</span>
            </span>

            <img class="full-area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} logo`"/>

            <NuxtLink v-if="area.id<4" :to="`/all_areas/${area.id+1}`">
              <span class="area-arrow-enabled" role="button" aria-label="Next area button">&#8250;</span>
            </NuxtLink>

            <span v-if="area.id>=4">
              <span class="area-arrow-disabled" role="button" aria-label="Disabled next area button">&#8250;</span>
            </span>

          </div>

            <div class="area-info">
              <div v-html="renderedDescription"></div>

                <span class="related-projects">
                    <div class ="related-projects-title">
                      Related projects:
                    </div>

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

            const description = ref('In this page you will find all the information related to ' + area.name + '.')
            const keywords = ref('Area of Investment, ' + area.name)

            useHead({
              meta: [
                { name: 'description', content: description },
                { name: 'keywords', content: keywords }
              ]
            })

            return {
                area
            }
        },

        computed: {
          renderedDescription() {
            let description = this.area.description;

            //check if DOMParser is available
            if (typeof DOMParser !== 'undefined') {
              //use DOMParser to parse the HTML tags and create a DOM object
              let parser = new DOMParser();
              let parsedDescription = parser.parseFromString(description, "text/html");
              
              //return the innerHTML of the parsed DOM object
              return parsedDescription.body.innerHTML;
            } else {
              //fallback for server-side rendering. render the text as is
              return description;
            }
          }
        }

    })  
</script>

<style>

  .area-header {
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  
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
  
  .full-area-img {
    display: flex;
    width: 25%;
    margin: 0 auto;
    margin-top: 30px;
    justify-content: center;
  }
  
  .area-arrow-enabled {
    font-size: 3em;
    color: ghostwhite;
    margin: 0px 250px;
    border-radius: 10px;
    padding: 70px 25px;
    transition: all 0.2s;
  }

  .area-arrow-enabled:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
  }

  .area-arrow-enabled:active {
    font-size: 2.7em;
  }

  .area-arrow-disabled {
    font-size: 3em;
    margin: 0px 250px;
    border-radius: 10px;
    padding: 70px 25px;
    color: gray;
    cursor: not-allowed;
    
  }

  .area-description {
    color: black;
    background-color: #fff6f6d2;
    box-shadow: 15px 15px 30px 0 rgba(172,172,172,.5);
    padding: 40px 60px;
    margin: 25px 0px;
    border-radius: 10px;
    white-space: pre-wrap;
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