import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { global_styles } from '../../styles/global';

function PrivacyPolicyScreen() {
    return (
        <SafeAreaView style={global_styles.container}>
            <Text style={[global_styles.text_base, { textAlign: "justify" }]}>
                At our platform, we are committed to safeguarding the privacy of our users and ensuring the security of their personal information. This Privacy Policy outlines how we collect, use, store, and protect the data we gather from users during their interactions with our website and services. By accessing or using our platform, you consent to the practices described in this policy.

                Information Collection:

                We may collect various types of personal information from our users, such as names, addresses, email addresses, phone numbers, and payment details. This data is collected when users register an account, place an order, subscribe to our newsletters, or interact with our website in any other way. Additionally, we may gather anonymous browsing data, including IP addresses, browser type, and device information, to improve our website's performance and user experience.

                Data Usage:

                The personal information collected from users is primarily used to process orders, provide customer support, and deliver a seamless shopping experience. We may also use the data to personalize user experiences, offer product recommendations, and inform users about promotions, discounts, or new products via email or notifications. Rest assured that we will never sell or rent user information to third parties for marketing purposes without explicit consent.

                Data Security:

                We take the security of user data seriously and employ industry-standard measures to protect it from unauthorized access, disclosure, alteration, or destruction. Our website uses encryption protocols to secure sensitive information during transmission, and we maintain strict access controls to limit data access to authorized personnel only. In the event of a data breach, we will promptly notify affected users and take appropriate steps to mitigate any potential harm.

                Third-Party Sharing:

                To enhance the quality of our services, we may share user information with trusted third-party service providers. These parties include payment processors, shipping companies, and marketing partners. However, we ensure that such third parties comply with strict confidentiality requirements and use the data solely for the intended purposes.

                Cookies and Tracking:

                Like many websites, we use cookies and similar technologies to enhance user experience and gather information about website usage patterns. Cookies are small text files stored on a user's device that allow us to recognize and remember users' preferences and activities. By accepting our cookies, users consent to the collection and use of their data for website analytics, personalization, and targeted marketing. Users can manage their cookie preferences through their web browser settings.

                Opt-Out Options:

                We respect our users' preferences, and they have the option to opt-out of certain data collection and marketing communications. Users can unsubscribe from promotional emails or adjust their notification preferences in their account settings. However, please note that opting out of certain services may impact the overall user experience and limit access to specific features.
            </Text>

        </SafeAreaView>
    );
}

export default PrivacyPolicyScreen;