// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/styles/main.sass',
        '~/assets/css/default.css',
        '~/assets/css/clouds.css',
        '@mdi/font/css/materialdesignicons.css'
    ],

    build: {
        transpile: ["vuetify"],
    },
    
    modules: ['@nuxtjs/supabase'],
    
    ssr: true,
    
    app: {
        head: {
            title: 'Wizarding Ventures',
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Wizarding Ventures website, where you can find all the information you need about us: projects, investments, areas of investment, contacts.' },
                { name: 'og:image', content: 'https://i.imgur.com/HryjXvt' }, /* check if it works */
                { name: 'author', content: 'Web Wizards' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
        }
    }

})
