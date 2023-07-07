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
            <div class="full-area-img-container">
              <img class="full-area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} logo`"/>
            </div>
            <NuxtLink :to="isNextDisabled ? '#' : `/all_areas/${area.id+1}`" :class="{ 'disabled': isNextDisabled }" class="area-button" role="button" aria-label="Next area button">
              &#8250;
            </NuxtLink> 
          </div>

          <div class="area-info">
            <div v-for="col of desc_columns" v-html="col" class="area-description"></div>
          </div>
          <!--<img class="area-decorative-img" :src="`../../assets/img/all_areas/${area.name}_1.jpg`" alt="">-->

          <div class="area-div-carousel">
            <div class="area-carousel-title">
                Related projects:
            </div>
            <div class="area-carousel-container">
                <ProjectsCarousel :projectsArray="area.Projects" class="area-carousel"/>
            </div>
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

            const desc_columns = [area.desc_col1, area.desc_col2, area.desc_col3]

            useHead({
              meta: [
                { name: 'description', content: description },
                { name: 'keywords', content: keywords }
              ]
            })

            return {
                area, numOfAreas, desc_columns
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
    width: 80vw;
    margin-top: 30px;
  }

  .full-area-img-container {
    padding: 2%;
  }
  
  .full-area-img {
    display: flex;
    width: min(40vw, 40vh);
    height: auto;
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
    margin: 30px 0px;
    border-radius: 10px;
  }
  
  /*
  .area-decorative-img {
    width: 100%;
    height: auto;
  }*/
</style>