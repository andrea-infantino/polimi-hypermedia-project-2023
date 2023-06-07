<template>
  <Head>
        <Title>Our Team - Wizarding Ventures</Title>
    </Head>

    <main>

    <div class="title-area">
      <div class="title">
        OUR TEAM
      </div>
    </div>

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

</script>


<style>
  #people-container
  {
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