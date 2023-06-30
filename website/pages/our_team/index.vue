<template>
    <Head>
        <Title>Our Team - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'OUR TEAM'" />

        <span class="our-team-text">Meet our team. We include talented individuals, unified by our purpose and our core values of <b>teamwork</b>, <b>continuous learning</b> and <b>leadership</b>.<br>
          We inspire and encourage people to believe in and challenge themselves, discover their passion and realize their potential.</span>

        <hr class="separator " />

        <div id="sorting-selector-team">
        <label for="sorting-selector-team">Sort by:</label>
            <select class="menu" id="order" v-model="order">
              <option value="Role">Role</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
        </div>

        <div id="people-container">
          <PersonCard v-for = "person of sorted" :id = "person.id" :name = "person.name" :surname = "person.surname" :role = "person.role" :link = "'/our_team/' + person.id" />
        </div>

    </main>

</template>

<script setup>
  const { data: people } = await useFetch('/api/our_team')

  const order = ref("Role") // default order
  const roles = ['Founder', 'Co-Founder', 'CFO', 'Investment Manager', 'Investment Analyst', 'Head of Impact', 'Office Manager', 'Partner']

  const sorted = computed ( () => {
      if (order.value == "Role" || order.value == null || order.value == undefined || order.value == "") {
        let importance_order = []

        for (let role of roles) {
          for (let person of people.value) {
            if (person.role === role) {
              importance_order.push(person)
            }
          }
        }
        return importance_order
      }
      else if (order.value == "A-Z") 
        return [...people.value]
      else if (order.value == "Z-A") 
        return [...people.value].reverse()
  })

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

  #sorting-selector-team, #sorting-selector-proj {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-self: center;
    margin: 2%;
    gap: 10px;
    font-size: 18px;
    min-width: 300px;
  }

  label {
    font-weight: bold;
  }

  .menu {
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-family: inherit;
    padding: 0 2vh;
    cursor: pointer;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    appearance: auto;
  }

</style>