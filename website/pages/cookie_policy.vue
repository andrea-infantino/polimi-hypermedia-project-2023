<template>
    <Head>
        <Title>Cookie Policy - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'COOKIE POLICY'" />

        <div class="update_date">
            <b>Effective Date: </b> 2023-06-01
        </div>
        
        <div class="paragraphs">
            <section class="white-cloud">
                <p class="white-cloud-text">
                Welcome to Wizarding Ventures, a venture capital website developed by the team at Web Wizards. This Cookie Policy explains how we use cookies and similar technologies on our website. By accessing or using Wizarding Ventures, you acknowledge that you have reviewed and understood this Cookie Policy and agree to the practices described herein.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">1. What Are Cookies?</div>
                <p class="white-cloud-text">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide a better user experience. Cookies enable websites to remember your preferences, track your activities, and gather information about your browsing behavior.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">2. Types of Cookies We Use</div>
                <h3 class="white-cloud-subtitle">2.1. Necessary Cookies</h3>
                <p class="white-cloud-text">
                These cookies are essential for the operation of our website and enable you to navigate and use its features. They are usually set in response to your actions, such as filling out forms or setting preferences. Without these cookies, certain features and functionalities may be unavailable.</p>

                <h3 class="white-cloud-subtitle">2.2. Analytical and Performance Cookies</h3>
                <p class="white-cloud-text">
                We use these cookies to collect information about how visitors interact with our website. This helps us analyze data, identify usage patterns, and improve the overall performance and functionality of our website. The information collected is aggregated and anonymous.</p>

                <h3 class="white-cloud-subtitle">2.3. Functional Cookies</h3>
                <p class="white-cloud-text">
                Functional cookies enable our website to remember your choices and provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have integrated into our website. These cookies may store information such as your username, language preference, or region.</p>

                <h3 class="white-cloud-subtitle">2.4. Advertising and Targeting Cookies</h3>
                <p class="white-cloud-text">
                We may use advertising and targeting cookies to deliver advertisements and promotional content that is relevant to your interests. These cookies collect information about your browsing activities across different websites and may be set by our advertising partners.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">3. Third-Party Cookies</div>
                <p class="white-cloud-text">
                We may allow third-party service providers, such as analytics providers and advertisers, to place cookies on our website. These third parties may use cookies and similar technologies to collect information about your interactions with our website and other websites you visit. They use this information to provide analytics, personalize advertisements, and measure the effectiveness of their campaigns. We do not have control over these third-party cookies, and their use is subject to their respective privacy policies.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">4. Cookie Consent and Control</div>
                <p class="white-cloud-text">
                Upon your first visit to our website, we will request your consent to the use of cookies, except for necessary cookies that are essential for the website's functioning. You have the option to manage or withdraw your consent at any time through the cookie settings or preferences in your browser. Please note that disabling certain cookies may impact the functionality and performance of our website.</p>                
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">5. Updates to this Cookie Policy</div>
                <p class="white-cloud-text">
                We may update this Cookie Policy from time to time, and any changes will be effective upon posting the revised version on our website. We encourage you to review this page periodically for any updates. Your continued use of Wizarding Ventures after the posting of changes constitutes your acceptance of such changes.</p>                
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">6. Contact Us</div>
                <p class="white-cloud-text">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact us using the information available at <NuxtLink id="to_contacts" to="/contacts" class="contact-link-text">this link</NuxtLink>.</p>                
            </section>

            <section class="white-cloud">
                <p class="white-cloud-text">
                Thank you for trusting <strong>Wizarding Ventures</strong> with your personal information.</p>                
            </section>

        </div>
    </main>
</template>

<script setup>
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