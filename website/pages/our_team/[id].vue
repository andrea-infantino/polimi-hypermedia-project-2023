<template>
    <main>
        <div class="title-area">
            <div class="title">
                OUR TEAM
            </div>
        </div>

        <div class="person-container">
            <img class="person-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/People/${person.id}.jpg`" />
            <div class="person-info">
                <span class="person-name-and-surname">{{ person.name }} {{ person.surname }}</span>
                <span class="person-role">{{ person.role }}</span>
                <span class="person-email"> <b>E-Mail:</b> <br>
                    <span class="tab">{{ person.email }} </span></span>
                <span class="person-description"><b>Description:</b> <br> 
                    <span class="tab">{{ person.description }}</span></span>
                <span>
                    <b>Projects:</b> <br>
                    <div class="person-projects-container tab">
                        <span v-for = "project of person.Projects">• {{ project.title }}</span>
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
            const person = await $fetch('/api/our_team/' + route.params.id)

            return {
                person
            }
        }
    })
</script>

<style>
  .person-info
  {
    color: ghostwhite;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    max-width: 520px;
  }
  .person-img
  {
    border-radius: 5px;
    height: 420px;
    width: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image:url('~/assets/img/user_default_photo.jpg');
  }
  .person-container
  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    width: auto;
    max-width: 1000px;
    align-self: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .person-name-and-surname
  {
    font-size: xx-large;
    font-weight: bold;
    color: black;
    background-color: ghostwhite;
    opacity: 0.9;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: fit-content;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
  .person-role
  {
    font-size: x-large;
    font-weight: bold;
  }
  .tab
  {
    display: inline-block;
    margin-left: 1em;
  }
  .person-projects-container
  {
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: baseline;
  }
  .person-projects-container>*
  {
    padding: 3px;
    text-decoration: underline;
  }
  .person-projects-container>*:hover
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