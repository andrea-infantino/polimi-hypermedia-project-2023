<template>
  <main>

    <div class="title-area">
      <div class="title">
        OUR TEAM
      </div>
    </div>

    <div id="people-container">
      <PersonCard v-for = "person of people" :id = "person.id" :name = "person.name" :surname = "person.surname" :role = "person.role" :link = "'/our_team/' + person.id" />
    </div>

  </main>
</template>

<script setup>
  const { data: people } = await useFetch('/api/our_team')
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
    max-width: 1100px;
  }
</style>