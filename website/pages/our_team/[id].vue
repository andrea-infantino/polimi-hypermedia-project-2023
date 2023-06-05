<template>
  <main>

    <div class="title-area">
      <NuxtLink to="/our_team">
        <div class="back-button">&lArr;</div>
      </NuxtLink>
      <div class="title">OUR TEAM</div>
    </div>

    <div class="person-container">
      <img class="person-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/People/${person.id}.jpg`" />
      <div class="person-info">
        <span class="person-name-and-surname">{{ person.name }} {{ person.surname }}</span>
        <span class="person-role">{{ person.role }}</span>
        <hr class="separator" />
        <span> <div class="space-between-line">E-Mail:</div>
          <nuxt-link class="mail" :to="`mailto:${person.email}`">{{ person.email }}</nuxt-link>
        </span>
        <span> <div class="space-between-line">Social:</div>
          <a href="https://twitter.com/home"><img src="../../assets/img/contacts/twitter_logo.png" alt="Twitter Logo" class="twitter-logo"></a>
          <a href="https://www.instagram.com"><img src="../../assets/img/contacts/instagram_logo.png" alt="Instagram Logo" class="instagram-logo"></a>
          <a href="https://www.linkedin.com"><img src="../../assets/img/contacts/linkedin_logo.png" alt="LinkedIn Logo" class="linkedin-logo"></a>
        </span>
        <span class="desc-container"><div class="space-between-line">Description:</div> 
          <span class="person-description tab">{{ person.description }}<div class="scrollable-desc"></div></span>
        </span>
        <nuxt-link v-if="person.cv_link != null" id="person-cv" :to="`${person.cv_link}`" target="_blank">See {{ person.name }} {{ person.surname }}'s CV</nuxt-link>
      </div>
    </div>

    <hr class="separator " />
    
    <span class="person-projects-title">{{ person.name }} {{ person.surname }}'s projects:</span>    
      <div class="person-projects-container">
          <ProjectCard v-for = "project of person.Projects" :id="project.id" :title="project.title" :link="'/projects/' + project.id" :img_bool="true" />
      </div>

  </main>
</template>

<script>
  export default defineNuxtComponent({
    async asyncData() {
      const route = useRoute()
      const person = await $fetch('/api/our_team/' + route.params.id)

      return {
        person
      }
    }
  })
</script>

<style>
  .person-container
  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    gap: 60px;
    max-width: 1200px;
    margin: 30px;
  }

  .person-img
  {
    border-radius: 5px;
    height: 420px;
    width: 420px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image:url('~/assets/img/user_default_photo.jpg');
    background-size: cover;
  }

  .person-info
  {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    max-width: 500px;
  }

  .person-name-and-surname
  {
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

  .person-role
  {
    font-size: x-large;
    font-weight: bold;
    align-self: center;
  }

  .desc-container
  {
    overflow: hidden;
  }

  .person-description
  {
    overflow-y: scroll;
    max-height: 130px;
    -webkit-mask-image: -webkit-gradient(linear,right 75%,right bottom,from(black),to(rgba(0,0,0,0)));
  }

  .person-description::-webkit-scrollbar
  {
    display: none;
  }

  .scrollable-desc
  {
    height: 40px;
  }

  #person-cv
  {
    font-size: medium;
    color: black;
    background-color: ghostwhite;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    width: fit-content;
    opacity: 0.9;
    align-self: center;
    text-align: center;
    padding: 5px;
    transition: transform 0.5s, padding-left 0.5s, padding-right 0.5s;
  }

  #person-cv:hover
  {
    transform: translate3d(0px, -5px, 5px);
    padding-left: 30px;
    padding-right: 30px;
  }

  .person-projects-title
  {
    font-size: xx-large;
    font-weight: bolder;
    margin-top: 20px;
    align-self: center;
  }

  .person-projects-container{
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 50px;
    max-width: 1200px;
    
  }

  .tab, .mail
  {
    display: inline-block;
    margin-left: 1em;
  }

  .mail:hover
  {
    text-decoration: underline;
  }

  .space-between-line
  {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .twitter-logo {
    width: 35px;
    height: 40px;
    padding-right: 10px;
  }

  .instagram-logo {
    width: 35px;
    height: 35px;
    padding-right: 10px;
  }

  .linkedin-logo {
    width: 40px;
    height: 35px;
  }

  .twitter-logo:hover, .instagram-logo:hover, .linkedin-logo:hover {
    transform: scale3d(1.3, 1.3, 1.3);
    transition: ease-in-out 0.3s;
  }
</style>