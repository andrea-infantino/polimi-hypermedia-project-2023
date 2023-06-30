<template>
  <v-carousel
    cycle
    hide-delimiter-background
    hide-delimiters
    interval="5000"
    height="600"
  >
    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id1}`">
        <v-img width="1000" height="1000" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id1}.jpg`" />
      </NuxtLink>
    </v-carousel-item>

    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id2}`">
        <v-img width="1000" height="1000" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id2}.jpg`" />
      </NuxtLink>
    </v-carousel-item>

    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id3}`">
        <v-img width="1000" height="1000" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id3}.jpg`" />
      </NuxtLink>
    </v-carousel-item>
  </v-carousel>
     
</template>
<script setup>
  const props = defineProps(['id1', 'title1',
                          'id2', 'title2',
                          'id3', 'title3',
                          'id4', 'title4',
                          'id5', 'title5'
                        ]);
</script>