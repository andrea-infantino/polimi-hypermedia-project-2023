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
                        size: 24
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
      const {data: areas} = await useFetch('/api/getAreas');
      const {data: people} = await useFetch('/api/getPeople');
      const newData = {
        labels: ['Our Projects','Our Areas of investment', 'Our Members'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#DD1B16', '#00D8FF'],
            data: [projects2, areas, people]
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