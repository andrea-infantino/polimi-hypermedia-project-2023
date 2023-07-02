<template>
    <Head>
        <Title>Privacy Policy - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'PRIVACY POLICY'" />

        <div class="update_date">
            <b>Effective Date: </b> 2023-06-01
        </div>
        
        <div class="paragraphs">
            <section class="white-cloud">
                <p class="white-cloud-text">Welcome to Wizarding Ventures, a venture capital website developed by the team at Web Wizards. At Wizarding Ventures, we understand the importance of your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you interact with our website.<br>
                Please take the time to read this Privacy Policy carefully. By accessing or using Wizarding Ventures, you acknowledge that you have reviewed and understood this Privacy Policy and agree to the practices described herein.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">1. Information we collect</div>
                <h3 class="white-cloud-subtitle">1.1. Personal Information</h3>
                <p class="white-cloud-text">
                We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other information you choose to share when contacting us through our website or subscribing to our newsletter.<br></p>

                <h3 class="white-cloud-subtitle">1.2. Non-Personal Information</h3>
                <p class="white-cloud-text">
                We may automatically collect certain non-personal information when you visit our website. This information may include your IP address, browser type, operating system, referring URLs, and other technical information.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">2. Use of Information</div>
                <h3 class="white-cloud-subtitle">2.1. Personal Information</h3>
                <p class="white-cloud-text">
                We may use your personal information for the following purposes:<br>
                &ensp;• To respond to your inquiries and provide you with information about our services.<br>
                &ensp;• To send you newsletters or promotional emails with your consent.<br>
                &ensp;• To improve and personalize your experience on our website.<br>
                &ensp;• To analyze website usage and trends.<br>
                &ensp;• To enforce our Terms of Service and protect the rights and safety of our users.<br>
                &ensp;• To comply with applicable laws and regulations.<br>
                &ensp;• To perform any other function that we believe in good faith is necessary to protect the security or proper functioning of our website.<br>
                </p>

                <h3 class="white-cloud-subtitle">2.2. Non-Personal Information</h3>
                <p class="white-cloud-text">
                Non-personal information collected may be used for statistical analysis, to diagnose technical problems, and to administer our website. This information helps us understand how visitors use our website and allows us to enhance the user experience.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">3. Sharing of Information</div>
                <h3 class="white-cloud-subtitle">3.1. Third-Party Service Providers</h3>
                <p class="white-cloud-text">
                We may share your personal information with trusted third-party service providers who assist us in operating our website and providing services to you, such as email delivery, analytics, and customer support. These service providers have access to your information solely for the purpose of performing their services and are obligated to maintain its confidentiality.<br></p>

                <h3 class="white-cloud-subtitle">3.2. Legal Compliance and Protection</h3>
                <p class="white-cloud-text">
                We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, or investigate potential violations of applicable laws.<br></p>

                <h3 class="white-cloud-subtitle">3.3. Business Transfers</h3>
                <p class="white-cloud-text">
                In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction. We will take reasonable steps to ensure the confidentiality of your information is maintained.</p>
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">4. Cookies and Similar Technologies</div>
                <p class="white-cloud-text">
                We may use cookies, web beacons, and similar technologies to collect non-personal information about your interactions with our website. These technologies help us analyze trends, administer the website, track users' movements around the site, and gather demographic information. You have the option to disable cookies through your browser settings, but please note that certain features of our website may not function properly without cookies.</p>                
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">5. Data Security</div>
                <p class="white-cloud-text">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security</p>                
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">6. Third-Party Links</div>
                <p class="white-cloud-text">
                Our website may contain links to third-party websites. This Privacy Policy does not apply to any third-party websites, and we are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of third-party websites before providing any personal information.</p>                
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">7. Children's Privacy</div>
                <p class="white-cloud-text">
                Wizarding Ventures is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately, and we will take steps to remove that information from our records.</p>                
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">8. Changes to this Privacy Policy</div>
                <p class="white-cloud-text">
                We may update this Privacy Policy from time to time, and any changes will be effective upon posting the revised version on our website. We encourage you to review this page periodically for any updates. Your continued use of Wizarding Ventures after the posting of changes constitutes your acceptance of such changes.</p>                
            </section>

            <section class="white-cloud">
                <div class="white-cloud-title">9. Contact Us</div>
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
    const description = ref('In this page you will find our Privacy Policy.')
    const keywords = ref('Privacy Policy, Personal Information, Non-Personal Information, Data Security, Children\'s Security')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]
    })
</script>