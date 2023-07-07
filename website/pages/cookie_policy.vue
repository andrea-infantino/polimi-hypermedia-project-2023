<template>
    <Head>
        <Title>Cookie Policy - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'COOKIE POLICY'" />

        <ContentRenderer :data="data">
            <div class="update_date" v-html="data[0].date"></div>
            
            <div class="paragraphs">
                <section v-for="paragraph in data[0].paragraphs" class="white-cloud">
                    <div v-if="paragraph.title!=null" class="white-cloud-title">{{ paragraph.title }}</div>
                    
                    <!-- the specific case in which the text contains a link is handled separately -->
                    <p v-if="paragraph.id==7" class="white-cloud-text">If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact us using the information available at <NuxtLink id="to_contacts" to="/contacts" class="contact-link-text" title="Link to Contacts">this link</NuxtLink>.</p>
                    <p v-else class="white-cloud-text" v-html="paragraph.content"></p>

                    <!-- if the paragraph also has sub-paragraphs -->
                    <div v-if="paragraph.subparagraphs!=null" v-for="subpar in paragraph.subparagraphs">
                        <h3 class="white-cloud-subtitle">{{ subpar.title }}</h3>
                        <p class="white-cloud-text" v-html="subpar.content"></p>
                    </div>
                </section>
            </div>
        </ContentRenderer>

    </main>
</template>

<script setup>
    //get text content from the JSON file
    const { data } = await useAsyncData('cookie_policy', () => { return queryContent('/cookie_policy').find()})

    //Search Engine Optimization
    const description = ref('In this page you will find our Cookie Policy.')
    const keywords = ref('Cookie Policy, Consent, Necessary Cookies, Analytical and Performance Cookies, Functional Cookies, Advertising and Targeting Cookies, Third-Party Cookies')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]
    })
</script>