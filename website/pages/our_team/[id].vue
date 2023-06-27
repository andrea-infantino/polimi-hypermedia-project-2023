<template>
  <Head>
      <Title>{{ person.name }} {{ person.surname }} - Wizarding Ventures</Title>
  </Head>

  <main>

    <div class="title-area">
      <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#8630;</a>
      <div class="clickable-title">
        <NuxtLink to="/our_team" class="clickable-title">
          OUR TEAM
        </NuxtLink>
      </div>
    </div>


    <div class="person-page">

      <NuxtLink v-if="person.id!=0" :to="`/our_team/${person.id-1}`">
        <span class="prs-arrow-enabled" role="button" aria-label="Previous person button">&#8249;</span>
      </NuxtLink>

      <span v-if="person.id==0">
          <span class="prs-arrow-disabled" role="button" aria-label="Disabled previous person button">&#8249;</span>
      </span>


      <div class="person-container">
        <img class="person-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/People/${person.id}.jpg`" :alt="`${person.name} ${person.surname}'s photo`"/>
        <div class="person-info">
          <span class="person-name-and-surname">{{ person.name }} {{ person.surname }}</span>
          <span class="person-role">{{ person.role }}</span>
          <hr class="separator" />

          <div><strong>Joined</strong> &emsp; {{ person.hiring_date }}</div> 
          
          <span> <div class="space-between-line">E-Mail:</div>
            <nuxt-link class="mail" :to="`mailto:${person.email}`">&#9993;&emsp;{{ person.email }}</nuxt-link>
          </span>

          <span> <div class="space-between-line">Social:</div>
            <a href="https://twitter.com/home"><img src="../../assets/img/contacts/twitter_logo_hover.png" class="twitter-logo-hover" alt="Coloured Twitter logo"><img src="../../assets/img/contacts/twitter_logo.png" alt="Black and white Twitter Logo" class="twitter-logo"></a>
            <a href="https://www.instagram.com"><img src="../../assets/img/contacts/instagram_logo_hover.png" class="instagram-logo-hover" alt="Coloured Instagram logo"><img src="../../assets/img/contacts/instagram_logo.png" alt="Black and white Instagram Logo" class="instagram-logo"></a>
            <a href="https://www.linkedin.com"><img src="../../assets/img/contacts/linkedin_logo_hover.png" class="linkedin-logo-hover" alt="Coloured LinkedIn logo"><img src="../../assets/img/contacts/linkedin_logo.png" alt="Black and white LinkedIn Logo" class="linkedin-logo"></a>
          </span>
          <span class="desc-container"><div class="space-between-line">Description:</div> 
            <div class="person-description-tab">{{ person.description }}</div>
          </span>
          <nuxt-link v-if="person.cv_link != null" id="person-cv" :to="`${person.cv_link}`" target="_blank">See {{ person.name }} {{ person.surname }}'s CV</nuxt-link>
        </div>
      </div>

      <NuxtLink v-if="person.id<14" :to="`/our_team/${person.id+1}`">
          <span class="prs-arrow-enabled" role="button" aria-label="Next person button">&#8250;</span>
        </NuxtLink>

        <span v-if="person.id>=14">
          <span class="prs-arrow-disabled" role="button" aria-label="Disabled next person button">&#8250;</span>
        </span>

    </div>




    <hr class="separator " />
    
    <div class="person-projects-container">
        <div class="person-projects-title">{{ person.name }} {{ person.surname }}'s projects</div>    
        
        <div class="supervised-projects-container" v-show="supervised_proj.length!=0">
            <div class="supervised-title">As supervisor:</div>
            <div class="person-supervised-projects">
                <ProjectCard v-for = "project of supervised_proj" :id="project.id" :title="project.title" :link="'/projects/' + project.id" :img_bool="true" />
            </div>
        </div>

        <div class="team-projects-container">
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
        person, supervised_proj, team_proj
      }
    }
  })
</script>

<style>
  .person-page {
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  .clickable-title {
    font-weight: bold;
    font-size: 40px;
    margin: 20px;
    text-align: center;
    color: black;
    transition: all 0.3s;
  }

  .clickable-title:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
    transform: translateY(-5px);
  }

  .clickable-title:active {
    transform: scale(0.95);
  }

  .prs-arrow-enabled {
    font-size: 3em;
    color: ghostwhite;
    margin: 0px 10px;
    border-radius: 10px;
    padding: 70px 20px;
    transition: all 0.2s;
  }

  .prs-arrow-enabled:hover {
    color: black;
    background-color: ghostwhite;
    box-shadow: 3px 5px 30px 0 rgba(172,172,172,.5);
  }

  .prs-arrow-disabled {
    font-size: 3em;
    margin: 0px 10px;
    border-radius: 10px;
    padding: 10px 25px;
    color: gray;
    cursor: not-allowed;
    
  }

  .person-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    gap: 60px;
    max-width: 1200px;
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
    justify-content: center;
    gap: 20px;
    max-width: 500px;
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
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .person-role {
    font-size: x-large;
    font-weight: bold;
    align-self: center;
  }

  .desc-container {
    overflow: hidden;
  }

  #person-cv {
    font-size: medium;
    color: black;
    background-color: ghostwhite;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    width: fit-content;
    opacity: 0.9;
    align-self: center;
    text-align: center;
    padding: 5px 15px;
    transition: opacity 0.1s, padding 0.3s;
  }

  #person-cv:hover {
    padding: 5px 30px;
    text-decoration: underline;
    opacity: 1;
    box-shadow: 4px 4px 8px 1px rgba(141, 141, 141, 0.462);
  }

  .person-description-tab {
    color: black;
    background-color: #fff6f6d2;
    box-shadow: 15px 15px 30px 0 rgba(172,172,172,.5);
    padding: 10px 20px;
    border-radius: 10px;
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

  .tab, .mail {
    display: inline-block;
    margin-left: 1em;
    border-radius: 5px;
    padding: 2px 5px;
    transition: padding 0.3s, background-color 0.3s, color 0.3s;
  }

  .mail:hover {
    text-decoration: underline;
    color: black;
    background-color: rgba(248, 248, 255, 0.900);
    padding: 2px 15px;
  }

  .space-between-line {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .twitter-logo, .twitter-logo-hover, .instagram-logo, .instagram-logo-hover, .linkedin-logo, .linkedin-logo-hover {
    width: 35px;
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