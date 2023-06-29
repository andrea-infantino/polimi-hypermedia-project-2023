<template>
    <div class = 'page'>
        <Header />
        <slot />
        <div class="scroll-button"><ScrollToTop /></div>
        <Footer />
    </div>
</template>

<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    .scroll-button {
        position: sticky;
        width: 50px;
        margin: 0 0 15px auto;
        bottom: 3vh;
        right: 3vh;
        z-index: 99;
    }
</style>
