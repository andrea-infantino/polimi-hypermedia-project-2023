<template>
  <Doughnut v-if="loaded" :data="data" :options="options" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  components: {
    Doughnut
  },
  data() {
    return {
      loaded: false,
      data: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 19,
                        family: 'Poppins'
                    }
                }
            }
        }
      }
    }
  },

  async mounted() {
    this.loaded = false;
    try {
      await useFetch();  //Without this, # of projects isn't shown when page is reloaded
      const {data: projects2} = await useFetch('/api/getProjects');
      const {data: people} = await useFetch('/api/getPeople');
      const {data: areas} = await useFetch('/api/getAreas');
      const newData = {
        labels: ['Our Projects', 'Our Members','Our Areas of Investment'],
        datasets: [
          {
            backgroundColor: ['#43B0F1', '#057DCD', '#1E3D58'],
            data: [projects2, people, areas]
          }
        ]
      }
      this.data = newData;
      this.loaded = true;
    }
    catch(e) {
      console.error(e);
    }
  }
}
</script>