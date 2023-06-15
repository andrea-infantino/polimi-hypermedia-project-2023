<template>
  <div>
    <div v-if="showButton" @click="scrollToTop" class="scroll-to-top-btn">&#8679;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      if (window.pageYOffset > 200) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>

.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 17px;
  border-radius: 15px;
  background-color: #E8EEF1;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  border: 3px solid #1E3D58;
}

.scroll-to-top-btn:hover {
  font-weight: bold;
  padding-bottom: 12px;
  box-shadow: 3px 5px 10px 0 rgba(172,172,172,.5);
}

.scroll-to-top-btn:active {
  transform: scale(0.9);
}

</style>