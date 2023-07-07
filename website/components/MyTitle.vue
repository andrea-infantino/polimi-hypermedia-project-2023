<template>
    <div class="title-area" :class="{ 'hideTitle' : !scrollUp }"> 
        <MyBackButton class="bb-position"/>   
        <div v-if="link!=null" class="clickable-title">
            <NuxtLink :to="link" class="clickable-title-link" :aria-label="`Link to ${title}`">{{ title }}</NuxtLink>
        </div>
        <div v-else class="title">{{ title }}</div>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'link']);

    let lastScrollTop = ref(0);
    let scrollUp = ref(true);

    const handleScroll = () => {
        const scrollThreshold = 50;

        if (window.pageYOffset > lastScrollTop.value) {
            scrollUp.value = window.pageYOffset < scrollThreshold;
        } else {
            scrollUp.value = true;
        }

        lastScrollTop.value = window.pageYOffset;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<style>

    .bb-position {
        position: absolute;
        left: 2px;
        top: auto;
    }

    .title-area {
      padding: 10px;
      background-color: #E8EEF1;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      position: sticky;
      top: 83px;
      transition: all 0.3s;
      z-index: 98;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title {
        font-weight: bold;
        font-size: 40px;
        margin: 20px;
        text-align: center;
        color: black;
    }

    .hideTitle {
        transform: translateY(-100%);
    }

    .clickable-title {
        margin: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 40px;
        color: black;
        transition: all 0.3s;
        width: fit-content;
    }

    .clickable-title:hover {
        letter-spacing: 2px;
    }

    .clickable-title:active {
        transform: scale(0.95);
    }

    .clickable-title-link::after {
        content: '';
        width: 0;
        height: 4px;
        display: block;
        background: black;
        transition: all 0.3s;
    }

    .clickable-title-link:hover::after {
        width: 100%;
    }

    .clickable-title-link {
        color: black;
    }

</style>