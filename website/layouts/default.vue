<template>
    <div class = 'page'>
        <Header />
        <slot />
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
