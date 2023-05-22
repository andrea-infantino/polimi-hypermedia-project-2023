<template>
  <main>
    <div class="title-area">
      <div class="title">
        OUR TEAM
      </div>
    </div>

    <div id="list-container">
      <PersonCard v-for = "person of people" :id = "person.id" :name = "person.name" :surname = "person.surname" :role = "person.role" :link = "'/our_team/' + person.id" />
    </div>

  </main>
</template>

<script setup>
  const { data: people } = await useFetch('/api/our_team')
</script>


<style>
  #list-container
  {
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }

  main
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
  }

  .title-area {
    position: sticky;
    top: 0;
    padding: 10px;
    background-color:white;
    opacity: 0.9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .title {
    font-weight: bold;
    font-size: 40px;
    margin: 20px;
    text-align: center;
    color: black;
  }

</style>