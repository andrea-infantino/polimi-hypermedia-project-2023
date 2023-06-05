<template>
    <header>
        <div id="landmarks-list">
            <NuxtLink to="/">
                <img src="../assets/img/logo.png" id="logo" />
            </NuxtLink>
            <nav id="top-bar">
                <NuxtLink class="landmark" to="/top_projects">TOP 5 PROJECTS</NuxtLink>
                <NuxtLink class="landmark" to="/portfolio">PORTFOLIO</NuxtLink>
                <NuxtLink class="landmark" to="/projects">PROJECTS</NuxtLink>
                <NuxtLink class="landmark" to="/all_areas">AREAS</NuxtLink>
                <NuxtLink class="landmark" to="/our_team">OUR TEAM</NuxtLink>
                <NuxtLink class="landmark" to="/about_us">ABOUT US</NuxtLink>
                <NuxtLink class="landmark" to="/contacts">CONTACTS</NuxtLink>
            </nav>
        </div>
        <hr class="separator" id="landmarks-separator"/>
    </header>
</template>

<style>
    header
    {
        background-color: ghostwhite;
        position: sticky;
        top: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
    }

    #landmarks-list
    {
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    #top-bar 
    {
        display: flex;
        padding: 10px;
        font-size: 15px;
        font-weight: bold;
        height: fit-content;
        gap: 5px;
    }

    #logo
    {
        height: 33px;
        width: auto;
        padding: 10px 20px 10px 20px;
        align-self: center;
        vertical-align: center;
    }

    #landmarks-separator
    {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(200, 200, 200, 1), rgba(0, 0, 0, 0));
        width: 99%;
    }
</style>
