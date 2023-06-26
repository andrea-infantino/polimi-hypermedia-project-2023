<template>
    <html lang="en">
        <div class = 'page'>
            <Header />
            <slot />
            <ScrollToTop />
            <Footer />
        </div>
    </html>
</template>

<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }
</style>
