<template>
    <Head>
        <Title>{{ area.name }} - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="area.name" />
        
        <div class="area-container">
          <div class="area-header">
            <NuxtLink :to="isPreviousDisabled ? '#' : `/all_areas/${area.id-1}`" :class="{ 'disabled': isPreviousDisabled }" class="area-button" role="button" aria-label="Previous area button">
              &#8249;
            </NuxtLink> 

            <img class="full-area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} logo`"/>

            <NuxtLink :to="isNextDisabled ? '#' : `/all_areas/${area.id+1}`" :class="{ 'disabled': isNextDisabled }" class="area-button" role="button" aria-label="Next area button">
              &#8250;
            </NuxtLink> 

          </div>

          <div class="area-info">
            <div v-html="renderedDescription" class="db-clouds"></div>

              <span class="related-projects-container">
                <div class ="related-projects-title">
                  Related projects:
                </div>

                
            </span>
          </div>

          <div class="related-projects">
            <v-carousel v-if="numOfAreas > 1"
              hide-delimiter-background
              hide-delimiters
              height="500"
            >  
              <v-carousel-item v-for="project of area.Projects">
                <NuxtLink :to="`/projects/${project.id}`">
                  <v-img width="850" height="850" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${project.id}.jpg`" />
                </NuxtLink>
              </v-carousel-item>
            </v-carousel>
            <NuxtLink v-else-if="numOfAreas == 1" :to="`/projects/${area.Projects[0].id}`">
              <v-img width="850" height="850" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${area.Projects[0].id}.jpg`" />
            </NuxtLink>
          </div>
        </div>
    </main>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const route = useRoute()
            const area = await $fetch('/api/all_areas/' + route.params.id)

            const areas = await $fetch('/api/all_areas')
            const numOfAreas = areas.length

            const description = ref('In this page you will find all the information related to ' + area.name + '.')
            const keywords = ref('Area of Investment, ' + area.name)

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
          },

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .area-header {
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 30px;
    width: 100%
  }
  
  .area-info {
    color: ghostwhite;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    gap: 50px;
    width: 80vw;
    margin-top: 30px;
  }

  .db-clouds {
    width: 100%
  }
  
  .full-area-img {
    display: flex;
    width: min(40vw, 40vh);
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
    justify-content: center;
  }
  
  .area-button {
    font-size: 3em;
    color: ghostwhite;
    border-radius: 10px;
    padding: 70px 20px;
    transition: all 0.2s;
  }

  .area-button:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
  }

  .area-button:active {
    box-shadow: 3px 5px 30px 15px rgba(172,172,172,.6);
  }

  .area-button.disabled {
    color: gray;
    cursor: not-allowed;
  }

  .area-button.disabled:hover {
    background-color: transparent;
    box-shadow: 0 0;
  }

  .area-description {
    color: black;
    background-color: #fff6f6e3;
    box-shadow: 15px 15px 30px 0 rgba(172,172,172,.5);
    padding: 3.3vw 4.3vw;
    margin: 25px 0px;
    border-radius: 10px;
    white-space: pre-wrap;
  }

  .related-projects-container {
    text-align: center;
    width: 100%;
  }

  .related-projects-title {
    font-size: xx-large;
    font-weight: bolder;
    margin-top: 20px 0 0;
    align-self: center;
  }

  .related-projects {
    padding: 30px 0;
  }

</style>