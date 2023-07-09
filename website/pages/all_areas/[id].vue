<template>
    <Head>
        <Title>{{ area.name }} - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="area.name" />
        
        <div class="area-container">
          <!-- area header (image + next and previous buttons) -->
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

          <!-- area description -->
          <div class="area-info">
            <div v-for="(col,index) of desc_columns" class="area-description">
              <img class="area-decorative-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas_Decorative_Imgs/${area.name}_${index}.jpg`" alt="">  
              <p v-html="col"></p>
            </div>
          </div>

          <!-- carousel with preview of the projects related to this area -->
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
            const area = await $fetch('/api/all_areas/' + route.params.id)  //get the specific area from its id

            const { data: numOfAreas } = await useFetch('/api/getAreas')  //get the total number of areas

            const desc_columns = [area.desc_col1, area.desc_col2, area.desc_col3] //array with the 3 columns containing the description

            //Search Engine Optimization
            const description = ref('In this page you will find all the information related to ' + area.name + '.')
            const keywords = ref('Area of Investment, ' + area.name)

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
    box-shadow: 15px 15px 30px 0 rgba(172, 172, 172, 0.5);
    padding: 3.3vw 4.3vw;
    margin: 30px 0px;
    border-radius: 10px;
  }
  

  .area-decorative-img {
    height: 30vh;
    width: auto;
    border-radius: 10px;
    float: right;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
    margin: 0 0 20px 20px;
  }

  @media screen and (max-width: 768px) {
    .area-info {
      width: 95%;
      margin: 30px 20px 0;
    }

    .area-description {
      padding: 30px 4vw;
      margin: 30px 0px;
    }

    .area-decorative-img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      float: none;
      margin: 0 0 20px;
    }
  }
</style>