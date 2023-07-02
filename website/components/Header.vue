<template>
    <header>            
        <nav>
            
            <div class="branding">
                <NuxtLink to="/">
                    <img src="../assets/img/logo.png" id="logo" class="logo-header" alt="Company logo" title="Homepage"/>
                </NuxtLink>
            </div>
            
            <ul v-if="!mobile" class="navigation">
                <li><NuxtLink class="landmark" to="/most_relevant_projects">Most Relevant Projects</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/portfolio">Portfolio</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/projects">Projects</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/projects_by_area">Projects By Area</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/all_areas">Areas</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/our_team">Our Team</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/about_us">About Us</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/contacts">Contacts</NuxtLink></li>
            </ul>   

            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="hamburger-menu" :class="{ 'icon-active': mobileNav }">
                    <svg viewBox="0 0 100 67" width="40" height="40">
                        <rect width="100" height="17" rx="10"></rect>
                        <rect y="33" width="100" height="17" rx="10"></rect>
                        <rect y="66" width="100" height="17" rx="10"></rect>
                    </svg>
                </i>
            </div>

            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav" ref="dropdownNav">
                    <NuxtLink to="/">
                        <img src="../assets/img/logo.png" class="logo-mobile" alt="Company logo" @click="toggleMobileNav" />
                    </NuxtLink>
                    <hr class="separator-mobile" />
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/most_relevant_projects">Most Relevant Projects</NuxtLink></li>
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/portfolio">Portfolio</NuxtLink></li>
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/projects">Projects</NuxtLink></li>
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/projects_by_area">Projects By Area</NuxtLink></li>
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/all_areas">Areas</NuxtLink></li>
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/our_team">Our Team</NuxtLink></li>
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/about_us">About Us</NuxtLink></li>
                    <li><NuxtLink @click="toggleMobileNav" class="landmark" to="/contacts">Contacts</NuxtLink></li>
                    <li @click="toggleMobileNav" class="close-cross">&#10006;</li>
                </ul>
            </transition>
            
            <transition name="dropdown-overlay">
                <div v-if="mobileNav" class="dropdown-overlay" @click="toggleMobileNav"></div>
            </transition>

        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                mobile: null,
                mobileNav: null,
                windowWidth: null,
            };
        },

        mounted() {
            if (process.client) {
                window.addEventListener('resize', this.checkScreen);
                this.checkScreen();

                document.addEventListener('click', this.handleClickOutside);
            }
        },

        beforeUnmount() {
            if (process.client) {
                window.removeEventListener('resize', this.checkScreen);
                document.removeEventListener('click', this.handleClickOutside);
            }
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },

            checkScreen() {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth < 1000) {
                    this.mobile = true;
                } else {
                    this.mobile = false;
                    this.mobileNav = false;
                }
            },

            handleClickOutside(event) {
                if (!this.$refs.dropdownNav.contains(event.target) && !this.$refs.dropdownNav.previousElementSibling.contains(event.target)) {
                    this.mobileNav = false;
                }
            },
        },
    };
</script>

<style>
    header {
        background-color: #E8EEF1;
        position: sticky;
        top: 0;
        z-index: 99;
        max-width: 100%;
        border-bottom: 5px solid #1E3D58;
        transition: 0.5s ease all;
        color: black;
        text-align: center;
    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: 0.5s ease all;
        width: 95%;
        margin: 0 auto;
    }

    ul, .link {
        font-weight: 600;
        color: white;
        list-style: none;
        text-decoration: none;
    }

    li {
        text-transform: uppercase;
        padding: 15px;
    }

    .link {
        font-size: 14px;
        transition: 0.5s ease all;
        padding-bottom: 4px;
    }

    .branding {
        display: flex;
        align-items: center;
        margin: 0.5vh 1vh;
    }

    .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
    }

    .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
    }

    .hamburger-menu {
        cursor: pointer;
        transition: 0.5s ease all;
        padding: 7px 10px;
        border-radius: 50%;
    }

    .hamburger-menu:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .hamburger-menu:active {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .icon-active {
        transition: 0.8s ease all;
        transform: rotate(180deg);
    }

    .dropdown-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        width: 60%;
        height: 100%;
        min-width: 270px;
        background-color: #E8EEF1;
        top: 0;
        left: 0;
        margin-top: 0;
        z-index: 500;
        border-right: 5px solid #1E3D58;
    }

    .mobile-nav-enter-active, .mobile-nav-leave-active {
        transition: 1s ease all;
    }

    .mobile-nav-enter-from, .mobile-nav-leave-to {
        transform: translateX(-100%);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }

    .logo-mobile {
        max-width: 200px;
        min-width: 120px;
        height: auto;
        margin-top: 5vh;
    }

    .separator-mobile {
        margin: 3vh 0;
    }

    .close-cross {
        color: black;
        margin: 20px;
        transition: 0.3s;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }

    .close-cross:hover {
        color: rgb(200, 0, 0)  ;
        text-decoration: underline;
        text-underline-offset: 6px;
        transform: translateY(-5px);
    }

    .close-cross:active {
        transform: scale(0.95);
    }

    .dropdown-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
        transition: opacity 0.5s;
    }

    .dropdown-overlay-enter-active, .dropdown-overlay-leave-active {
        transition: opacity 0.5s;
    }

    .dropdown-overlay-enter-from, .dropdown-overlay-leave-to {
        opacity: 0;
    }

    .dropdown-overlay-enter-to, .dropdown-overlay-leave-from {
        opacity: 1;
    }

    .landmark {
      color: black;
      padding: 0 10px;
      display: inline-block;
      transition: 0.3s;
    }

    .landmark:hover {
          color: #1E3D58;
          text-decoration: underline;
          text-underline-offset: 6px;
          transform: translateY(-5px);
    }

    .landmark:active {
          transform: scale(0.95);
    }
</style>
