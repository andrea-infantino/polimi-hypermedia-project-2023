<template>
  <Head>
        <Title>Our Team - Wizarding Ventures</Title>
    </Head>

    <main>

    <div class="title-area">
      <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#10554;</a>
      <div class="title">
        OUR TEAM
      </div>
    </div>

    <span class="our-team-text">Meet our team. We include talented individuals, unified by our purpose and our core values of <b>teamwork</b>, <b>continuos learning</b> and <b>leadership</b>.<br>
      We inspire and encourage people to believe in and challenge themselves, discover their passion and realize their potential.</span>

    <hr class="separator " />

    <div id="people-container">
      <PersonCard v-for = "person of importance_order" :id = "person.id" :name = "person.name" :surname = "person.surname" :role = "person.role" :link = "'/our_team/' + person.id" />
    </div>

  </main>
</template>

<script setup>
  const { data: people } = await useFetch('/api/our_team')

  //to order people by role
  const roles = ['Founder', 'Co-Founder', 'CFO', 'Investment Manager', 'Investment Analyst', 'Head of Impact', 'Office Manager', 'Partner']

  const importance_order = ref([])

  for (let role of roles) {
    for (let person of people.value) {
      if (person.role === role) {
        importance_order.value.push(person)
      }
    }
  }

  const description = ref('In this page you will find all of our team members.')
  const keywords = ref('Team, Teamwork, People, Members, ' + roles.join(', '))

  useHead({
      meta: [
          { name: 'description', content: description },
          { name: 'keywords', content: keywords }
      ]
  })

</script>


<style>
  .our-team-text {
      text-align: center;
      font-size: 18px;
      margin: 30px;
  }

  #people-container {
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