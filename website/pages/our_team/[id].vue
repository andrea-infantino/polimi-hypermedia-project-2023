<template>
  <Head>
      <Title>{{ person.name }} {{ person.surname }} - Wizarding Ventures</Title>
  </Head>

  <main>
    <MyTitle :title="'OUR TEAM'" :link="'/our_team/'" />

    <div class="person-page">
      
      <NuxtLink :to="isPreviousDisabled ? '#' : `/our_team/${person.id-1}`" :class="{ 'disabled': isPreviousDisabled }" class="person-button" role="button" aria-label="Previous person button">
        &#8249;
      </NuxtLink> 


      <div class="person-container">
        <div class="person-img-info">
            <img class="person-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/People/${person.id}.jpg`" :alt="`${person.name} ${person.surname}'s photo`"/>
            
            <!-- personal information and contacts -->
            <div class="person-info">
              <span class="person-name-and-surname">{{ person.name }} {{ person.surname }}</span>
              <span class="person-role">{{ person.role }}</span>
              <hr class="separator" />

              <div class="label-div"><span class="content-label">Joined</span> &emsp; {{ person.hiring_date }}</div> 
              
              <div class="label-div"><span class="content-label">E-Mail:<br></span>
                <NuxtLink class="small-transparent-btn" :to="`mailto:${person.email}`">
                  <button v-if="showLargeEmail">&#9993;&emsp;{{ person.email }}</button>
                  <button v-else>&emsp;&emsp;&emsp;&#9993;&emsp;&emsp;&emsp;</button>
                </NuxtLink>
              </div>

              <div class="label-div"> <div class="content-label">Social:</div>
                <a href="https://twitter.com/home" target="_blank"><img src="../../assets/img/contacts/twitter_logo_hover.png" class="twitter-logo-hover" alt="Coloured Twitter logo"><img src="../../assets/img/contacts/twitter_logo.png" alt="Black and white Twitter Logo" class="twitter-logo"></a>
                <a href="https://www.instagram.com" target="_blank"><img src="../../assets/img/contacts/instagram_logo_hover.png" class="instagram-logo-hover" alt="Coloured Instagram logo"><img src="../../assets/img/contacts/instagram_logo.png" alt="Black and white Instagram Logo" class="instagram-logo"></a>
                <a href="https://www.linkedin.com" target="_blank"><img src="../../assets/img/contacts/linkedin_logo_hover.png" class="linkedin-logo-hover" alt="Coloured LinkedIn logo"><img src="../../assets/img/contacts/linkedin_logo.png" alt="Black and white LinkedIn Logo" class="linkedin-logo"></a>
              </div>

              <nuxt-link v-if="person.cv_link != null" class="small-light-btn" :to="`${person.cv_link}`" target="_blank">See {{ person.name }} {{ person.surname }}'s CV</nuxt-link>
            </div>
        </div>

        <!-- person description -->
        <span class="desc-container">
            <span class="description-cloud-title">Description:</span> 
            <span class="description-cloud">{{ person.description }}</span>
        </span>
        
      </div>

      <NuxtLink :to="isNextDisabled ? '#' : `/our_team/${person.id+1}`" :class="{ 'disabled': isNextDisabled }" class="person-button"  role="button" aria-label="Next person button">
        &#8250;
      </NuxtLink> 
    </div>

    <hr class="separator " />

    <div class="person-projects-title">{{ person.name }} {{ person.surname }}'s projects</div>
    
    <div class="person-projects-container">    
      <!-- carousel containing projects supervised by this person -->  
      <div v-if="supervised_proj.length!=0" class="team-div-carousel">
          <div class="team-carousel-title">
              As supervisor:
          </div>
          <div class="team-carousel-container">
              <ProjectsCarousel :projectsArray="supervised_proj" class="team-carousel"/>
          </div>
      </div>

      <!-- carousel containing projects participated by the person as team member -->
      <div v-if="team_proj.length!=0" class="team-div-carousel">
          <div class="team-carousel-title">
              As team member:
          </div>
          <div class="team-carousel-container">
              <ProjectsCarousel :projectsArray="team_proj" class="team-carousel"/>
          </div>
        </div>

    </div>

  </main>
</template>

<script>
  export default defineNuxtComponent({
    async asyncData() {
      const route = useRoute()
      const person = await $fetch('/api/our_team/' + route.params.id) //get the specific person from their id

      const people = await $fetch('/api/our_team')  //get all the people to calculate the total number
      const numOfPeople = people.length

      //distinguish between projects where the person is supervisor/team member
      const supervised_proj = ref([])
      const team_proj = ref([])

      for (let project of person.Projects) {
          for(let entry of person.Participations) {
              if (project.id == entry.project_id && entry.is_project_supervisor) {
                  supervised_proj.value.push(project)
              } else if (project.id == entry.project_id && !entry.is_project_supervisor) {
                  team_proj.value.push(project)
              }
          }
      }

      //Search Engine Optimization
      const description = ref('In this page you will find ' + person.name + ' ' + person.surname + '\'s personal information.')
      const keywords = ref('Team, ' + person.name + ' ' + person.surname + ', ' + person.role)

      useHead({
        meta: [
          { name: 'description', content: description },
          { name: 'keywords', content: keywords }
        ]
      })

      return {
        person, supervised_proj, team_proj, numOfPeople
      }
    },

    computed: {
      isNextDisabled() {
        return this.person.id === this.numOfPeople - 1;
      },

      isPreviousDisabled() {
        return this.person.id === 0;
      }
    },

    data() {
      return {
        showLargeEmail: null
      };
    },

    mounted() {
      this.checkWindowWidth();
      window.addEventListener('resize', this.checkWindowWidth);
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.checkWindowWidth);
    },

    methods: {
      checkWindowWidth() {
        this.showLargeEmail = window.innerWidth >= 550;
      }
    }
  })
</script>

<style>
  .person-page {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 30px;
    width: 100%;
  }

  .person-button {
    position: sticky;
    top: 35vh;
    font-size: 3em;
    height: 12vh;
    color: ghostwhite;
    margin-bottom: 50px;
    border-radius: 10px;
    padding: 90px 20px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
  }

  .person-button:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172, 172,1 72, 0.5);
  }

  .person-button:active {
    box-shadow: 3px 5px 30px 15px rgba(172, 172, 172, 0.6);
  }

  .person-button.disabled {
    color: gray;
    cursor: not-allowed;
    
  }

  .person-button.disabled:hover {
    background-color: transparent;
    box-shadow: 0 0;
  }

  .person-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    gap: 60px;
    width: 70%;
    overflow: hidden;
  }

  .person-img {
    border-radius: 5px;
    width: min(50vw, min(60vh, 80vh));
    height: min(50vw, min(60vh, 80vh));
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image:url('~/assets/img/user_default_photo.jpg');
    background-size: cover;
  }

  .person-info {
    width: min(50vw, min(60vh, 80vh));
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 20px;
  }

  .person-img-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    width: 100%;
  }

  .person-name-and-surname {
    font-size: min(5vh, 8vw);
    font-weight: bold;
    color: black;
    background-color: ghostwhite;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    opacity: 0.9;
    align-self: center;
    text-align: center;
    padding: 10px 30px;
    margin-top: 10px;
  }

  .person-role {
    font-size: min(3.5vh, 6.5vw);
    font-weight: bold;
    align-self: center;
  }

  .label-div {
    width: 100%;
  }

  .desc-container {
    overflow: hidden;
    width: 100%;
  }

  .person-projects-title {
    font-size: xx-large;
    font-weight: bolder;
    margin: 40px 0;
    text-align: center;
  }

  .person-projects-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    width: 100%;
    margin-bottom: 3vw;
    background-color: rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }

  .supervised-projects-container, .team-projects-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-bottom: 3%;
  }

  .supervised-title, .team-title {
    font-size: x-large;
    align-self: center;
    padding-bottom: 12px;
  }

  .content-label {
    font-weight: bold;
    margin-bottom: 5px;
    width: 100%;
    font-size: min(2.2vh, 5.2vw);
  }

  .twitter-logo, .twitter-logo-hover, .instagram-logo, .instagram-logo-hover, .linkedin-logo, .linkedin-logo-hover {
    width: 40px;
    height: auto;
    padding-right: 10px;
    position: relative;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  .twitter-logo-hover, .instagram-logo-hover, .linkedin-logo-hover {
    position: absolute;
  }

  .twitter-logo:hover, .linkedin-logo:hover, .instagram-logo:hover {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
</style>