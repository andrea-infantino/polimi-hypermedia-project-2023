<template>
    <div class = 'page'>
        <Header />
        <slot />
        <ScrollToTop />
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
</style>
