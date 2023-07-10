// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/styles/main.sass',
        '~/assets/css/default.css',
        '~/assets/css/clouds.css',
        '~/assets/css/buttons.css',
        '~/assets/css/carousels.css',
        '@fortawesome/fontawesome-free/css/all.css'
    ],

    build: {
        transpile: ["vuetify"],
    },
    
    modules: ['@nuxtjs/supabase', '@nuxt/content'],

    content: {
        // Options
    },
    
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
                { name: 'keywords', content: 'Wizarding Ventures, Venture Capital Firm, Projects, Investments, Areas of investment, Contacts' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                //social media meta tags
                { name: 'og:title', content: 'Wizarding Ventures' },
                { name: 'og:description', content: 'Wizarding Ventures website, where you can find all the information you need about us: projects, investments, areas of investment, contacts.' },
                { name: 'og:url', content: 'https://hypermedia-project-2023.vercel.app/' },
                { name: 'og:image', content: 'https://i.imgur.com/HryjXvt.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'author', content: 'Web Wizards' },
            ],
        }
    }

})
