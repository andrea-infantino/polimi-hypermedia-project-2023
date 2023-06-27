<template>
    <header>            
        <nav>
            <div class="branding">
                <NuxtLink to="/">
                    <img src="../assets/img/logo.png" id="logo" class="logo-header" alt="Company logo" />
                </NuxtLink>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><NuxtLink class="landmark" to="/most_relevant_projects">Most Relevant Projects</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/portfolio">Portfolio</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/projects">All Projects</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/projects_by_area">Projects By Area</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/all_areas">All Areas</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/our_team">Our Team</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/about_us">About Us</NuxtLink></li>
                <li><NuxtLink class="landmark" to="/contacts">Contacts</NuxtLink></li>
            </ul>

            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }">
                    <svg viewBox="0 0 100 67" width="40" height="40">
                        <rect width="100" height="17" rx="10"></rect>
                        <rect y="33" width="100" height="17" rx="10"></rect>
                        <rect y="66" width="100" height="17" rx="10"></rect>
                    </svg>
                </i>
            </div>

            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <NuxtLink to="/">
                        <img src="../assets/img/logo.png" class="logo-mobile" alt="Company logo" @click="toggleMobileNav" />
                    </NuxtLink>
                    <hr class="separator-mobile " />
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/most_relevant_projects">MOST RELEVANT PROJECTS</NuxtLink></li>
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/portfolio">PORTFOLIO</NuxtLink></li>
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/projects">ALL PROJECTS</NuxtLink></li>
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/projects_by_area">PROJECTS BY AREA</NuxtLink></li>
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/all_areas">ALL AREAS</NuxtLink></li>
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/our_team">OUR TEAM</NuxtLink></li>
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/about_us">ABOUT US</NuxtLink></li>
                    <li @click="toggleMobileNav"><NuxtLink class="landmark" to="/contacts">CONTACTS</NuxtLink></li>
                </ul>
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

        created() {
            if (process.client) {
                window.addEventListener('resize', this.checkScreen);
                this.checkScreen();
                console.log("sono dentro con " + this.windowWidth);
            }
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },

            checkScreen() {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth < 800) {
                    this.mobile = true;
                } else {
                    this.mobile = false;
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
        padding-right: 4%;
    }

    img {
        height: 40px;
        width: auto;
        transition: 0.5s ease all;
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

    i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
    }

    .icon-active {
        transition: 0.8s ease all;
        transform: rotate(180deg);
    }

    .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        height: 100%;
        max-width: 250px;

        background-color: #E8EEF1;
        top: 0;
        left: 0;
        border-right: 5px solid #1E3D58;
    }

    .mobile-nav-enter-active, .mobile-nav-leave-active {
        transition: 1s ease all;
    }

    .mobile-nav-enter-from, .mobile-nav-leave-to {
        transform: translateX(-280px);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }

    .logo-mobile {
        width: 50%;
        height: auto;
        padding: 10% 0;
    }

    .scrolled-nav {
        background-color: black;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

        nav {
            padding: 8px 0;

            .branding {
                img {
                    width: 40px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
                }
            }
        }
    }

</style>
