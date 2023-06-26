// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/default.css'
    ],
    
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
                { name: 'author', content: 'Web Wizards' },
            ],
        }
    }

})
