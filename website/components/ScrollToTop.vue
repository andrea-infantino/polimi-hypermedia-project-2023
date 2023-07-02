<template>
  <div>
    <transition name="slide-up">
      <div v-if="showButton" @click="scrollToTop" class="scroll-to-top-btn" role="button" aria-label="Scroll to top button">&#8679;</div>
    </transition>
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
      });
    },

    handleScroll() {
      if (window.pageYOffset > 300) {
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
    padding: 10px 17px;
    border-radius: 15px;
    background-color: #E8EEF1;
    color: black;
    font-size: 16px;
    cursor: pointer;
    border: 3px solid #1E3D58;
  }

  .slide-up-enter, .slide-up-leave-to {
    opacity: 0;
    transform: translateY(150%);
  }

  .slide-up-enter-active, .slide-up-leave-active {
    transition: all 0.2s ease-in-out;
  }
</style>
