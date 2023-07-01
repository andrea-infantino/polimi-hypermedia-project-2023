<template>
  <v-carousel cycle hide-delimiter-background hide-delimiters interval="5000">
    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id1}`">
        <v-img :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id1}.jpg`" />
      </NuxtLink>
    </v-carousel-item>

    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id2}`">
        <v-img :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id2}.jpg`" />
      </NuxtLink>
    </v-carousel-item>

    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id3}`">
        <v-img :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id3}.jpg`" />
      </NuxtLink>
    </v-carousel-item>

    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id4}`">
        <v-img :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id4}.jpg`" />
      </NuxtLink>
    </v-carousel-item>

    <v-carousel-item cover>
      <NuxtLink :to="`/projects/${id5}`">
        <v-img :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Projects/${id5}.jpg`" />
      </NuxtLink>
    </v-carousel-item>
  </v-carousel>
     
</template>

<script setup>
  const props = defineProps(['id1',
                             'id2',
                             'id3',
                             'id4',
                             'id5',
                            ]);
</script>