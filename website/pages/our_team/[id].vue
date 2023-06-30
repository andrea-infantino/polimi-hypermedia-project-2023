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
            <div class="person-info">
              <span class="person-name-and-surname">{{ person.name }} {{ person.surname }}</span>
              <span class="person-role">{{ person.role }}</span>
              <hr class="separator" />

              <div><strong>Joined</strong> &emsp; {{ person.hiring_date }}</div> 
              
              <span> <div class="content-label">E-Mail:</div>
                <nuxt-link class="small-transparent-btn" :to="`mailto:${person.email}`">&#9993;&emsp;{{ person.email }}</nuxt-link>
              </span>

              <span> <div class="content-label">Social:</div>
                <a href="https://twitter.com/home" target="_blank"><img src="../../assets/img/contacts/twitter_logo_hover.png" class="twitter-logo-hover" alt="Coloured Twitter logo"><img src="../../assets/img/contacts/twitter_logo.png" alt="Black and white Twitter Logo" class="twitter-logo"></a>
                <a href="https://www.instagram.com" target="_blank"><img src="../../assets/img/contacts/instagram_logo_hover.png" class="instagram-logo-hover" alt="Coloured Instagram logo"><img src="../../assets/img/contacts/instagram_logo.png" alt="Black and white Instagram Logo" class="instagram-logo"></a>
                <a href="https://www.linkedin.com" target="_blank"><img src="../../assets/img/contacts/linkedin_logo_hover.png" class="linkedin-logo-hover" alt="Coloured LinkedIn logo"><img src="../../assets/img/contacts/linkedin_logo.png" alt="Black and white LinkedIn Logo" class="linkedin-logo"></a>
              </span>

              <nuxt-link v-if="person.cv_link != null" class="small-light-btn" :to="`${person.cv_link}`" target="_blank">See {{ person.name }} {{ person.surname }}'s CV</nuxt-link>
        
            </div>
        </div>

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
    
    <div class="person-projects-container">
        <div class="person-projects-title">{{ person.name }} {{ person.surname }}'s projects</div>    
        
        <div class="supervised-projects-container" v-if="supervised_proj.length!=0">
            <div class="supervised-title">As supervisor:</div>
            <div class="person-supervised-projects">
                <ProjectCard v-for = "project of supervised_proj" :id="project.id" :title="project.title" :link="'/projects/' + project.id" :img_bool="true" />
            </div>
        </div>

        <div class="team-projects-container" v-if="team_proj.length!=0">
            <div class="team-title">As team member:</div>
            <div class="person-team-projects">
                <ProjectCard v-for = "project of team_proj" :id="project.id" :title="project.title" :link="'/projects/' + project.id" :img_bool="true" />
            </div>
        </div>

    </div>

  </main>
</template>

<script>
  export default defineNuxtComponent({
    async asyncData() {
      const route = useRoute()
      const person = await $fetch('/api/our_team/' + route.params.id)

      const people = await $fetch('/api/our_team')
      const numOfPeople = people.length

      const supervised_proj = ref([])
      const team_proj = ref([])

      for (let project of person.Projects) {
          for(let entry of person.Partecipations) {
              if (project.id == entry.project_id && entry.is_project_manager) {
                  supervised_proj.value.push(project)
              } else if (project.id == entry.project_id && !entry.is_project_manager) {
                  team_proj.value.push(project)
              }
          }
      }

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
    }
  })
</script>

<style>
  .person-page {
    justify-content: space-around;
    display: flex;
    margin-top: 30px;
  }

  .person-button {
    position: sticky;
    top: 35vh;
    font-size: 3em;
    height: 12vh;
    color: ghostwhite;
    margin: 0px 10px 50px;
    border-radius: 10px;
    padding: 90px 20px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
  }

  .person-button:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
  }

  .person-button:active {
    box-shadow: 3px 5px 30px 15px rgba(172,172,172,.6);
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
    flex-direction: column !important;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    gap: 60px;
    width: 70%;
    margin: 30px;
  }

  .person-img {
    border-radius: 5px;
    height: 420px;
    width: 420px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image:url('~/assets/img/user_default_photo.jpg');
    background-size: cover;
  }

  .person-info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
  }

  .person-img-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }

  .person-name-and-surname {
    font-size: xx-large;
    font-weight: bold;
    color: black;
    background-color: ghostwhite;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    width: fit-content;
    opacity: 0.9;
    align-self: center;
    padding: 10px 30px;
    margin-top: 10px;
  }

  .person-role {
    font-size: x-large;
    font-weight: bold;
    align-self: center;
  }

  .desc-container {
    overflow: hidden;
  }

  .person-projects-title {
    font-size: xx-large;
    font-weight: bolder;
    margin-top: 20px;
    align-self: center;
  }

  .person-projects-container {
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 50px;
    max-width: 90%;
  }

  .supervised-projects-container, .team-projects-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-bottom: 3%;
  }

  .person-supervised-projects, .person-team-projects {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-self: center;
  }

  .supervised-title, .team-title {
    font-size: x-large;
    align-self: center;
    padding-bottom: 12px;
  }

  .content-label {
    font-weight: bold;
    margin-bottom: 5px;
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