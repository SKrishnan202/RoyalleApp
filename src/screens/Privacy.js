
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, Linking, ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Privacy = () => {

    return (
        <View style={styles.container}>
            <ScrollView >

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <FontAwesomeIcon style={{ marginRight: 20 }} icon={faArrowLeft} size={45} />
                    <Text style={[styles.h1, { marginBottom: 0 }]}>PRIVACY AND COOKIE POLICY</Text>
                </View>

                <Text style={styles.h2}>At Zero Friction LLC, we are committed to respecting your privacy (click here to find out who we are). As a visitor to one of our websites, we only want to contact you if you wish to be contacted by us.  With that in mind, we offer you the following details of how we gather, use, share and protect the information collected at this website and, as applicable, through our customer service department in connection with this website.  This Privacy Policy does not apply to your use of non-Zero Friction LLC websites linked to or from this website.</Text>
                 
                <Text style={styles.h2}>By visiting our website, you are accepting the terms and conditions described in this Privacy Policy.</Text>
                
                {
                    [
                        { key: '1. What kinds of information does Zero Friction LLC collect?' },
                        { key: '2. What are cookies?' },
                        { key: '3. Why does Zero Friction LLC collect this information and how is it used?' },
                        { key: '4. How do I let Zero Friction LLC know that it is okay to contact me?' },
                        { key: '5. What happens when I make an online purchase at a Zero Friction LLC website?' },
                        { key: '6. Where does Zero Friction LLC store this information and is it secure?' },
                        { key: '7. How long will Zero Friction LLC store this Personal Information?' },
                        { key: '8. Does Zero Friction LLC share this information with anyone?' },
                        { key: '9. What is the process for reviewing and correcting information?' },
                        { key: '10. Does Zero Friction LLC offer links to other websites?' },
                        { key: '11. What about Personal Information received from 3rd parties?' },
                        { key: '12. What about the privacy of children?' },
                        { key: '13. What happens if Personal Information is not provided?' },
                        { key: '14. How can I stop receiving communications from Zero Friction LLC?' },
                        { key: '15. What happens when changes are made to this Privacy Policy?' },
                        { key: '16. When was the Privacy Policy last updated and when do those changes take effect?' },

                    ].map((item, index) => {
                        return (
                            <View style={styles.listView} key={index}>
                                <Text style={styles.listText}>{item.key}</Text>
                            </View>
                        )
                    })
                }

                <Text style={styles.h1}>1. What kinds of information does Zero Friction LLC collect?</Text>

                <Text style={styles.h2}>Zero Friction LLC websites can collect information about you in a number of ways. One way we do this is by directly requesting information from you (such as on a product order form when you make a purchase, during customer service communications, as part of a sweepstakes or contest entry form, on registration pages, in response to a survey or on similar web pages where you are able to enter information into data fields and then send this information back to Zero Friction LLC). You may be asked to provide us with your name, address, credit card number, credit card expiration date, password reminders (such as your mother’s maiden name or the name of your favorite pet), phone number, fax number, email address, shipping address and similar information about you as an individual. We may also ask you questions about your golf game, your buying preferences or your lifestyle. We refer to all of this information as your "Personal Information."</Text>

                <Text style={styles.h2}>Another way we collect information is by automatically recording information about your visit to our websites. For example, we might collect data regarding your activity while on our websites or record the web pages that you have chosen to visit. This is a common practice for many websites on the Internet. The information collected does not personally identify you, but may be helpful to us for marketing purposes or improving the services we offer. We refer to this type of information as "General Data." For example, we automatically log visitors' domain and IP addresses (a unique string of numbers that identifies a computer on the Internet). At times, this General Data may be combined with the Personal Information that you have provided.  As described below, we also use cookies to enable the website to personalize your future visits and to help you navigate.</Text>

                <Text style={styles.h2}>From time to time, you may also be given the opportunity to give us feedback about our products or services or to post messages for others to read. Sometimes this is done anonymously. Other times your name or other identifying features may be attached. This process will always be voluntary and we will explain to you how the information will be used whenever we ask for it.</Text>

                <Text style={styles.h2}>Zero Friction LLC intends to give you as much control as possible over your Personal Information. In general, you can visit Zero Friction LLC on the Internet without telling us who you are or revealing any Personal Information about yourself. There are times, however, when we may need your Personal Information in order to do such things as process an order, respond to your information requests or to allow you to participate in online promotions.</Text>

                <Text style={styles.h2}>If you choose to give Zero Friction LLC Personal Information via the Internet, it is also our intent to let you know how we will use such information. If you tell us that you do not wish to have this Personal Information used as a basis for further contact with you, we will respect your wishes.  For information about online shopping, please call 1-877-316-7492.  You can also email us at info@zerofriction.com  for more information or you can write to us by addressing requests to Internet Customer Service Representative, 1 Trans Am Plaza Drive, Suite 540, Oakbrook Terrace, IL 60181.</Text>

                <Text style={styles.h1}>2. What are cookies?</Text>

                <Text style={styles.h2}>"Cookies" are pieces of information that a website transfers to your hard drive for record-keeping and other purposes. Cookies allow the website to remember important information that will make your use of the site more convenient and efficient. Like many websites, Zero Friction LLC uses cookies for a variety of purposes in order to improve your online experience. For example, we may track the total number of visitors to our site on an anonymous aggregate basis. We may also employ cookies so that we remember you when you return to the site, to keep track of the web pages that you have looked at, to administer certain online contests, sweepstakes and promotions, and to help customize your Zero Friction LLC web experience. We also may associate Personal Information with a cookie file in those instances.  Additionally, we may also use third party cookies to display advertisements on external websites.</Text>

                <Text style={styles.h2}>Use the Options menu in your web browser if you do not wish to receive a cookie or if you wish to set your browser to notify you when you receive a cookie. Click on the "Help" section of your browser to learn how to change your cookie preferences. If you disable all cookies, you may not be able to take advantage of all the features offered on Zero Friction LLC websites.  In addition, the Federal Trade Commission provides helpful information about online privacy on their website: <Text style={{color: '#000000'}} onPress={() =>Linking.openURL('http://www.ftc.gov/')}>http://www.ftc.gov/</Text>.</Text>
                 
                <Text style={styles.h1}>3. What does Zero Friction LLC collect this information and how it used?</Text>
                 
                <Text style={styles.h2}>We need this information to process your orders and to help us improve our services to you; we want to make it easier to tailor our products and services to your particular needs. We also want you to have the most enjoyable Internet and shopping experiences possible.</Text>

                <Text style={styles.h2}>With that in mind, Zero Friction LLC collects Personal Information and General Data in order to:</Text>

                {
                    [
                        { key: '- Conduct and facilitate online transactions.' },
                        { key: '- Maintain purchasing records and understand shopping patterns.' },
                        { key: '- Make the website easier for you to use by not having to enter information more than once.' },
                        { key: '- Provide information faster.' },
                        { key: '- Create content more relevant to you.' },
                        { key: '- Adjust the website to your personal preferences.' },
                        { key: '- Process your product orders.' },
                        { key: '- Conduct contests, sweepstakes and promotions.' },
                        { key: '- Help you quickly find products, services or information available from Zero Friction LLC.' },
                        { key: '- Make improvements to the website.' },
                        { key: '- Assess general trends within the website.' },
                        { key: '- Alert you to new products, contests, sweepstakes, special offers, updated information and other services that Zero Friction LLC thinks might be of interest to you. This might be done through direct contact with you or by customized postings on our websites.' },
                        { key: '- Where you have given us your permission we also might authorize other companies to contact you directly.' },
                        { key: '- Enable you to use certain customized features and to save information for later visits to the website.' },
                        { key: '- Create and deliver other similar business-related features and services.' },
                        { key: '- Offer you occasional opportunities to provide us with feedback about our products or services.' },
                    ].map((item, index) => {
                        return (
                            <View style={styles.listView} key={index}>
                                <Text style={styles.listText}>{item.key}</Text>
                            </View>
                        )
                    })
                }
               
                <Text style={styles.h1}>4. How do I let Zero Frction LLC know that it is okay to contact me?</Text>
     
                <Text style={styles.h2}>When you make a purchase online at one of our websites, you will be asked to provide certain Personal Information that will allow us to process the order.  By making a purchase with us online, you agree that Zero Friction LLC and its fulfillment partners may contact you regarding your order status and other order fulfillment issues.  If you are uncomfortable providing Personal Information online, you can also make a purchase by calling 1-877-316-7492.  You can also email orders@zerofriction.com  for more information or you can write to us by addressing requests to Internet Customer Service Representative, 1 Trans Am Plaza Drive, Suite 540, Oakbrook Terrace, IL 60181.</Text>

                <Text style={styles.h2}>When you provide us with your Personal Information, you also may be asked whether you would like to receive future contacts from Zero Friction LLC and from our select business partners and affiliates (as described in Section 8 below).  You elect to receive these future contacts by “opting in” in the designated check box.  Once you opt-in, you are granting us permission to use the Personal Information as described in this Privacy Policy, including transferring and storing your Personal Information at one or more locations within the United States of America. Your election to opt-in also is your agreement that we may share your Personal Information with selected business partners and affiliates. The opt-in process further means that Zero Friction LLC and the entities that we share your Personal Information with (as described below) may contact you directly in accordance with this Privacy Policy. Whenever we share Personal Information pursuant to this Privacy Policy, we will inform the party receiving it that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLCWe also may use confidentiality agreements to further protect Personal Information that becomes the property of Zero Friction LLC.</Text>
                
                <Text style={styles.h2}>If you provide us with your mailing address, telephone number or facsimile number, and tell us that we may contact you, we may also get in touch with you by one of these methods.</Text>

                <Text style={styles.h1}>5. What happens when I make an online purchase at a Zero Friction LLC website?</Text>
                 
                <Text style={styles.h2}>Zero Friction LLC collects and stores Personal Information that you provide to us when you make an online purchase, conduct certain online transactions or communicate offline with our customer service department.  When you place an order, open an account or make certain inquiries, you will be asked to provide various Personal Information that we will collect, use and store as described in this Privacy Policy.  Among other things, this Personal Information will be used to facilitate your online transactions (including the processing and shipping of your orders), send you order-related confirmations and provide you with customer service support. This Personal Information also may be used to contact you about sales, special offers and new site features, unless you have elected not to receive promotional communications in connection with this website.</Text>

                <Text style={styles.h2}>In some instances, your Personal Information will be shared with and stored by third parties who perform services and carry out functions on our behalf and/or in connection with an order.  These include, among others, third party payment and order processors, our network of fulfillment entities (such as local retailers and other product distributors), package delivery services, data management and analysis companies, marketing professionals, fraud protection services, website evaluators and the like.</Text>
                
                <Text style={styles.h2}>For example, we may disclose Personal Information that we collect about you to third parties who we use to provide order processing, fulfillment, financial, marketing or other services on our behalf or as otherwise permitted or required by law.  In some cases, we use these companies or individuals to service, process and fulfill transactions, to protect against fraud, for institutional risk control, to respond to judicial process or to perform other duties on our behalf.</Text>

                <Text style={styles.h2}>We also may collect and store information about you that we receive from other sources, to enable us to update and correct the Personal Information contained in our database and to provide product recommendations and special offers that we think will interest you.</Text>

                <Text style={styles.h1}>6. WHere does Zero Friction LLC store this information and is it secure?</Text>

                <Text style={styles.h2}>Zero Friction LLC operates in many countries throughout the world. To enable us to offer consistent service to our customers, wherever they may live, we manage most of our Internet sites from within the United States. Information may be collected outside of the U.S. and transferred to the U.S. in certain instances.  Information that we collect may also be transferred to and stored by third parties who perform services and carry out functions on our behalf and/or in connection with an order.  These include, among others, third party payment and order processors, our network of fulfillment entities (such as local retailers and other product distributors), package delivery services, data management and analysis companies, marketing professionals, fraud protection services, website evaluators and the like.</Text>

                <Text style={styles.h2}>Zero Friction LLC takes precautions to protect your Personal Information, including our policy of allowing access to this Personal Information to only to those individuals and entities with a need to know. We also use available technology and encryption, when legally required or when appropriate for your protection, to provide a more secure environment and to reduce the chance of unauthorized access.</Text>

                <Text style={styles.h2}>Personal Information is stored in a secure environment protected by a combination of physical and technical measures. The information may be kept in separate locations or it may be aggregated into reports, lists or databanks. There is no general public access to this information. In some cases, the Personal Information may be encrypted before you conduct your transaction, using appropriate secure technology. If you send us correspondence such as email or postal mail, or contact us by phone, we may collect such information in a file specific to you. These files will also be stored in secure locations.</Text>

                <Text style={styles.h2}>Always keep in mind, however, that the Internet is not a secure system and you should be cautious about the information you disclose while you are online. Although we take steps to protect your Personal Information against loss, misuse and alteration, as is the case with all computer networks linked to the Internet, we cannot absolutely guarantee the security of your Personal Information provided over the Internet and we will not be responsible for loss, misuse or alteration of the Personal Information.  Click here to find out more about online security.  In addition, the Federal Trade Commission provides helpful information about online privacy on their website: <Text style={{color: '#000000'}} onPress={() => Linking.openURL('http://www.ftc.gov')}>http://www.ftc.gov/</Text>.</Text>
                
                <Text style={styles.h1}>7. How long will Zero Friction LLC store this Personal Information?</Text>

                <Text style={styles.h2}>We will remove the Personal Information within a reasonable period of time after receiving your request to do so. Otherwise, the information will be stored in a secure and protected environment for as long as we believe it necessary to serve you and to carry out the other purposes for which we collected the Personal Information and General Data. In addition, legislation might oblige us to store this Personal Information for a certain period of time.</Text>

                <Text style={styles.h2}>To understand how you can amend or update your Personal Information, please refer to the appropriate question in this Privacy Policy.</Text>
                
                <Text style={styles.h1}>8. Does Zero Friction LLC share this information with anyone?</Text>
      
               <Text style={styles.h2}>We understand that your privacy is important to you. It is our policy not to disclose Personal Information about our website visitors without your explicit consent. This consent is given by your election to "opt-in" at the time you provide us with the Personal Information or by your making a purchase at one of our websites. Once you opt-in or make a purchase, you are granting us permission to use the Personal Information as described in this Privacy Policy, including transferring to and storing your Personal Information at our central website located in the United States of America and to third parties who perform services and carry out functions on our behalf and/or in connection with an order.  Your election to opt-in and/or your online purchase constitute your agreement that we may share your Personal Information with selected business partners and affiliates. The opt-in process further means that Zero Friction LLC and the entities that we share your Personal Information with (as described below) may contact you directly in accordance with this Privacy Policy. Whenever we share Personal Information pursuant to this Privacy Policy, we will inform the party receiving it that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC  We also may use confidentiality agreements to further protect Personal Information that becomes the property of Zero Friction LLC.</Text>

                <Text style={styles.h2}>From time-to-time, in order to provide you with the services, information and products that you have requested, to fulfill an order, to conduct contests, promotions or sweepstakes or to provide you with services, information and products that we think might be of interest to you, we may share your Personal Information with the following entities and individuals:</Text>

                <Text style={styles.h2}>Licensees, Licensors and other Business Partners:  The Excel Golf  Companies may enter into business dealings, license agreements or other contracts with third parties (we call these relationships "Third Party Agreements"). In connection with these Third Party Agreements, the Excel Golf Companies may license various trademarks and other intellectual property rights to third parties. At other times, Zero Friction LLC may receive permission from a third party to use the third party’s trademarks or intellectual property rights. In addition, Zero Friction LLC may enter into business relationships or contracts with other companies for a variety of goods and services. To the extent that Personal Information is shared with these third parties, we will inform them that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC.</Text>

                <Text style={styles.h2}>Third Party Service Providers and Golf Retailers:  In some instances, your Personal Information will be shared with third parties who perform services and carry out functions on our behalf and/or in connection with a product order.  These include, among others, third party payment and order processors, our network of fulfillment entities (such as local retailers and other product distributors), package delivery services, data management and analysis companies, marketing professionals, fraud protection services, website evaluators and the like.  These companies and individuals may be used, among other ways, to fulfill orders, process credit card payments, provide customer service, deliver packages, send emails or post mailings, update customer lists and provide marketing services and support.</Text>

                <Text style={styles.h2}>Marketing, Advertising and Website Hosting Companies:  Occasionally, the Zero Friction LLC Companies utilize the services of outside agencies, companies or individuals to run marketing campaigns, respond to information requests, coordinate contests, sweepstakes and promotions or to host or operate websites and web pages that are connected with our business. We may also contract with third parties to help us better understand your web usage preferences or to analyze data that we collect on our websites and elsewhere. To the extent that Personal Information is shared with these third parties, we will inform them that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC Consultants and Corporate Service Providers:  The Zero Friction LLC Companies may use third parties to help us operate various aspects of our business. This might include people or companies that we bring in to help us understand how to more efficiently operate our business. It also might include third parties that we may use to outsource or help facilitate one or more aspects of our business (e.g. order fulfillment, customer service, co-branding issues, manufacturing, payment processing, etc.). To the extent that Personal Information is shared with these third parties, we will inform them that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC.</Text>

                <Text style={styles.h2}>Business Transfers: As noted above, in the event that all or substantially all of our assets are sold or transferred to another party, or in case a transaction occurs in which your Personal Information is one of the business assets transferred, all Personal Information that has been collected and stored may be one of the business assets that we transfer.  You will be notified of such a transfer in accordance with Paragraph 16, below.</Text>

                <Text style={styles.h2}>Law Enforcement, Regulatory Agencies and Legal Proceedings: The Excel Golf Companies may share your information with government entities, authorized law enforcement personnel, regulatory bodies or as part of legal proceedings, in response to a valid subpoena or court order or as required by applicable law. </Text>


                <Text style={styles.h1}>9. What is the process for reviewing and correcting information?</Text>

                <Text style={styles.h2}>You may request a copy of the Personal Information that Zero Friction LLC has collected. You may also correct any inaccuracies contained in this Personal Information. We do not charge for information requests, although we may charge you a fee to cover our reasonable costs of actually providing you with a copy of your Personal Information. We will require proof of your identity. Please address requests to Internet Customer Service Representative, Zero Friction LLC, 1 Trans Am Plaza Drive- Suite 540, Oakbrook Terrace, IL 60181 or email info@zerofriction.com.  We will provide you with a readable copy of the Personal Information within a reasonable time period after your request usually 30 days. You may challenge the data that we hold about you, and, where appropriate, you may have the data corrected or completed. In some instances recognized by law, we may refuse to provide you with a copy of the Personal Information or change the data, but we will give you reasons for our refusal.</Text>

                <Text style={styles.h2}>We also welcome your questions, comments and suggestions about our Privacy Policy. Please send your comments to info@zerofriction.com.</Text>
       
                <Text style={styles.h1}>10. Does Zero Friction LLC offer links to other websites?</Text>

                <Text style={styles.h2}>We also may offer links to websites that are not operated by Zero Friction LLC If you visit one of these linked sites, you should review their privacy and other policies. We are not responsible for the policies and practices of other companies. Similarly, while all websites operated by the Excel Golf Companies have similar privacy policies that govern their use and operation, policies may vary from site to site based upon local customs, practices or laws or due to circumstances unique to that site. Please review the privacy policy of each site to determine the privacy policies of that site.</Text>

                <Text style={styles.h1}>11. What about Personal Information received from third parties?</Text>

                <Text style={styles.h2}>Any Personal Information that Zero Friction LLC receives from third parties is subject to the privacy policies of those entities. We are not responsible for the policies and practices of other companies. You should carefully review the privacy policy of any third party to make sure you are comfortable with how they are going to treat your personal data. For example, some companies may require you to opt-out of their information exchange programs. In those instances, Zero Friction LLC may receive and/or use information gathered by these outside companies or agencies, and the handling and processing of your data will be governed by such third parties’ policies and not by this Zero Friction LLC policy.</Text>

                 <Text style={styles.h1}>12. What about the privacy of children?</Text>

                 <Text style={styles.h2}>Protecting the privacy of children is important. Our website is not directed at children under the age of 13, nor do we knowingly solicit or collect Personal Information from children under the age of 13. If we become aware that a user is under the age of 13 and has signed up without prior verifiable parental consent, we will remove his or her Personal Information from our files.  We do not sell or ship any items ordered through this website to anyone who we know to be under the age of 18.</Text>

                 <Text style={styles.h1}>13. What happens if Personal Informatinon is not provided?</Text>

                 <Text style={styles.h2}>If you choose not to provide Personal Information, you will still, in most cases, be able to use many of the website features. However you will not be able to access areas that require registration or participate over the Internet in contests, sweepstakes or similar promotions, nor will you be able to make purchases.Even if you do not provide Personal Information, we will sometimes collect anonymous information about how you have used the website. This is information that does not personally identify you, but which may be helpful for marketing or improving the services we offer. (Click here for more information on general data that is collected when you visit our websites and on how we use cookies.)  In addition, the Federal Trade Commission provides helpful information about online privacy its website: <Text style={{color: '#000000'}} onPress={() => Linking.openURL('http://www.ftc.gov/')}>http://www.ftc.gov/</Text>.  For information about online shopping, please call 1-877-316-7492.</Text>

                 
                 <Text style={styles.h1}>14. How can I stop receiving communications from Zero Friction LLC?</Text>

                 <Text style={styles.h2}>If you wish to stop receiving communications from us or would like us to cease processing your information in any other way, you can write to us at: Internet Customer Service Representative, Zero Friction LLC, 1 Trans Am Plaza Drive- Suite 540, Oakbrook Terrace, IL 60181 or email info@zerofriction.com.  We will also provide you with a return email opt-out address in each email that we send to you so that you may opt out of receiving future email communications. This return opt-out address will be operational for at least 30 days following the date the email was originally sent to you.</Text>

                 <Text style={styles.h1}>15. What happens when changes are made to this Privacy Policy?</Text>

                 <Text style={styles.h2}>From time to time, it may be necessary for Zero Friction LLC to change this privacy policy. We suggest that you check here periodically. Such modifications are automatically effective upon posting. You can be assured, however, that any changes will not be retroactively applied and will not alter how we handle previously collected information.  If at any point we desire to use your Personal Information in a manner different than that stated at the time it was collected, we will notify you by email and give you the chance to indicate whether you consent to the proposed use.</Text>

                 <Text style={styles.h2}>By visiting our website, you are accepting the terms and conditions described in this Privacy Policy, on our Legal Statement and on other locations throughout these web pages. Please see our terms and conditions for additional information.</Text>

                 <Text style={styles.h1}>16. When was the Privacy Policy last updated and when do those changes take effect?</Text>

                 <Text style={styles.h2}>This Privacy Policy was last updated on May 1, 2011 and all changes are effective immediately.</Text>

                 <Text style={styles.h2}>Zero Friction LLC</Text>
                 <Text style={styles.h2}>1 Trans Am Plaza Drive, Suite 540</Text>
                 <Text style={styles.h2}>Oakbrook Terrace, IL 60181</Text>
                 <Text style={styles.h2}>(877) 316-7492</Text>
                 
                 </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    h1: {
       // fontFamily: 'Arial',
        textAlign: 'left',
        fontSize: 25,
        marginTop:8,
        marginBottom:8
    },
    h2: {
       // fontFamily: 'Arial',
        textAlign: 'left',
        fontSize: 15,
    },
    listView:{
        margin: 8
    },
    listText:{
        fontSize: 16,
        color:'#555'
    },
    link:{
        color:'#0C8081'

    }
});

export default Privacy;




























{/*
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, Linking, ScrollView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Privacy = () => {

    return (
        <View style={styles.container}>
            <ScrollView >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <FontAwesomeIcon style={{ marginRight: 20 }} icon={faArrowLeft} size={45} />
                    <Text style={[styles.h1, { marginBottom: 0 }]}>PRIVACY AND COOKIE POLICY</Text>
                </View>

                <Text style={styles.h1}>Privacy Policy</Text>
                <Text style={styles.h2}>At Zero Friction LLC, we are committed to respecting your privacy (click here to find out who we are). As a visitor to one of our websites, we only want to contact you if you wish to be contacted by us.  With that in mind, we offer you the following details of how we gather, use, share and protect the information collected at this website and, as applicable, through our customer service department in connection with this website.  This Privacy Policy does not apply to your use of non-Zero Friction LLC websites linked to or from this website.</Text>
                {
                    [
                        { key: 'Google Play Services', Link: 'https://policies.google.com/privacy' },
                        { key: 'Apple Privacy Policy', Link: 'https://www.apple.com/legal/privacy/en-ww/' },
                    ].map((item, index) => {
                        return (
                            <View style={styles.listView} key={index}>
                                <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.Link)}>
                                <Text style={[styles.listText,styles.link]}>{item.key}</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })
                }

                <Text style={styles.h2}>By visiting our website, you are accepting the terms and conditions described in this Privacy Policy.</Text>

                {
                    [
                        { key: '1. What kinds of information does Zero Friction LLC collect?' },
                        { key: '2. What are cookies?' },
                        { key: '3. Why does Zero Friction LLC collect this information and how is it used?' },
                        { key: '4. How do I let Zero Friction LLC know that it is okay to contact me?' },
                        { key: '5. What happens when I make an online purchase at a Zero Friction LLC website?' },
                        { key: '6. Where does Zero Friction LLC store this information and is it secure?' },
                        { key: '7. How long will Zero Friction LLC store this Personal Information?' },
                        { key: '8. Does Zero Friction LLC share this information with anyone?' },
                        { key: '9. What is the process for reviewing and correcting information?' },
                        { key: '10. Does Zero Friction LLC offer links to other websites?' },
                        { key: '11. What about Personal Information received from 3rd parties?' },
                        { key: '12. What about the privacy of children?' },
                        { key: '13. What happens if Personal Information is not provided?' },
                        { key: '14. How can I stop receiving communications from Zero Friction LLC?' },
                        { key: '15. What happens when changes are made to this Privacy Policy?' },
                        { key: '16. When was the Privacy Policy last updated and when do those changes take effect?' },

                        
                    ].map((item, index) => {
                        return (
                            <View style={styles.listView} key={index}>
                                <Text style={styles.listText}>{item.key}</Text>
                            </View>
                        )
                    })
                }
               
                  <Text style={styles.h1}>1. What kinds of information does Zero Friction LLC collect?</Text>
                <Text style={styles.h2}>Zero Friction LLC websites can collect information about you in a number of ways. One way we do this is by directly requesting information from you (such as on a product order form when you make a purchase, during customer service communications, as part of a sweepstakes or contest entry form, on registration pages, in response to a survey or on similar web pages where you are able to enter information into data fields and then send this information back to Zero Friction LLC). You may be asked to provide us with your name, address, credit card number, credit card expiration date, password reminders (such as your mother’s maiden name or the name of your favorite pet), phone number, fax number, email address, shipping address and similar information about you as an individual. We may also ask you questions about your golf game, your buying preferences or your lifestyle. We refer to all of this information as your "Personal Information."</Text>
             
                <Text style={styles.h2}>Another way we collect information is by automatically recording information about your visit to our websites. For example, we might collect data regarding your activity while on our websites or record the web pages that you have chosen to visit. This is a common practice for many websites on the Internet. The information collected does not personally identify you, but may be helpful to us for marketing purposes or improving the services we offer. We refer to this type of information as "General Data." For example, we automatically log visitors' domain and IP addresses (a unique string of numbers that identifies a computer on the Internet). At times, this General Data may be combined with the Personal Information that you have provided. As described below, we also use cookies to enable the website to personalize your future visits and to help you navigate.</Text>

                <Text style={styles.h2}>From time to time, you may also be given the opportunity to give us feedback about our products or services or to post messages for others to read. Sometimes this is done anonymously. Other times your name or other identifying features may be attached. This process will always be voluntary and we will explain to you how the information will be used whenever we ask for it.</Text>
                <Text style={styles.h2}>Zero Friction LLC intends to give you as much control as possible over your Personal Information. In general, you can visit Zero Friction LLC on the Internet without telling us who you are or revealing any Personal Information about yourself. There are times, however, when we may need your Personal Information in order to do such things as process an order, respond to your information requests or to allow you to participate in online promotions.</Text>
                <Text style={styles.h2}>If you choose to give Zero Friction LLC Personal Information via the Internet, it is also our intent to let you know how we will use such information. If you tell us that you do not wish to have this Personal Information used as a basis for further contact with you, we will respect your wishes.  For information about online shopping, please call 1-877-316-7492.  You can also email us at info@zerofriction.com  for more information or you can write to us by addressing requests to Internet Customer Service Representative, 1 Trans Am Plaza Drive, Suite 540, Oakbrook Terrace, IL 60181.</Text>
               
                 <Text style={styles.h1}>What are cookies?</Text>
                 <Text style={styles.h2}>"Cookies" are pieces of information that a website transfers to your hard drive for record-keeping and other purposes. Cookies allow the website to remember important information that will make your use of the site more convenient and efficient. Like many websites, Zero Friction LLC uses cookies for a variety of purposes in order to improve your online experience. For example, we may track the total number of visitors to our site on an anonymous aggregate basis. We may also employ cookies so that we remember you when you return to the site, to keep track of the web pages that you have looked at, to administer certain online contests, sweepstakes and promotions, and to help customize your Zero Friction LLC web experience. We also may associate Personal Information with a cookie file in those instances.  Additionally, we may also use third party cookies to display advertisements on external websites.</Text>


                <Text style={styles.h2}>Use the Options menu in your web browser if you do not wish to receive a cookie or if you wish to set your browser to notify you when you receive a cookie. Click on the "Help" section of your browser to learn how to change your cookie preferences. If you disable all cookies, you may not be able to take advantage of all the features offered on Zero Friction LLC websites.  In addition, the Federal Trade Commission provides helpful information about online privacy on their website: <Text style={[styles.h2,styles.link]} onPress={() => Linking.openURL('http://www.ftc.gov/')}>http://www.ftc.gov/.</Text>

                <Text style={styles.h1}>Why does Zero Friction LLC collect this information and how is it used?</Text>
                <Text style={styles.h2}>We need this information to process your orders and to help us improve our services to you; we want to make it easier to tailor our products and services to your particular needs. We also want you to have the most enjoyable Internet and shopping experiences possible.</Text>
                
                <Text style={styles.h1}>With that in mind, Zero Friction LLC collects Personal Information and General Data in order to:</Text>
                {
                    [
                        { key: '- Conduct and facilitate online transactions.' },
                        { key: '- Maintain purchasing records and understand shopping patterns.' },
                        { key: '- Make the website easier for you to use by not having to enter information more than once.' },
                        { key: '- Provide information faster.' },
                        { key: '- Create content more relevant to you.' },
                        { key: '- Adjust the website to your personal preferences.' },
                        { key: '- Process your product orders.' },
                        { key: '- Conduct contests, sweepstakes and promotions.' },
                        { key: '- Help you quickly find products, services or information available from Zero Friction LLC' },
                        { key: '- Make improvements to the website.' },
                        { key: '- Assess general trends within the website.' },
                        { key: '- Alert you to new products, contests, sweepstakes, special offers, updated information and other services that Zero Friction LLC thinks might be of interest to you. This might be done through direct contact with you or by customized postings on our websites. ' },
                        { key: '- Where you have given us your permission we also might authorize other companies to contact you directly.' },
                        { key: '- Enable you to use certain customized features and to save information for later visits to the website.' },
                        { key: '- Create and deliver other similar business-related features and services.' },
                        { key: '- Offer you occasional opportunities to provide us with feedback about our products or services.' },
                        
                    ].map((item, index) => {
                        return (
                            <View style={styles.listView} key={index}>
                                <Text style={styles.listText}>{item.key}</Text>
                            </View>
                        )
                    })
                }

                <Text style={styles.h1}>How do I let Zero Friction LLC know that it okay to contact me?</Text>
                <Text style={styles.h2}>When you make a purchase online at one of our websites, you will be asked to provide certain Personal Information that will allow us to process the order.  By making a purchase with us online, you agree that Zero Friction LLC and its fulfillment partners may contact you regarding your order status and other order fulfillment issues.  If you are uncomfortable providing Personal Information online, you can also make a purchase by calling 1-877-316-7492.  You can also email orders@zerofriction.com  for more information or you can write to us by addressing requests to Internet Customer Service Representative, 1 Trans Am Plaza Drive, Suite 540, Oakbrook Terrace, IL 60181.</Text>

                <Text style={styles.h2}>When you provide us with your Personal Information, you also may be asked whether you would like to receive future contacts from Zero Friction LLC and from our select business partners and affiliates (as described in Section 8 below).  You elect to receive these future contacts by “opting in” in the designated check box.  Once you opt-in, you are granting us permission to use the Personal Information as described in this Privacy Policy, including transferring and storing your Personal Information at one or more locations within the United States of America. Your election to opt-in also is your agreement that we may share your Personal Information with selected business partners and affiliates. The opt-in process further means that Zero Friction LLC and the entities that we share your Personal Information with (as described below) may contact you directly in accordance with this Privacy Policy. Whenever we share Personal Information pursuant to this Privacy Policy, we will inform the party receiving it that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLCWe also may use confidentiality agreements to further protect Personal Information that becomes the property of Zero Friction LLC.</Text>

                <Text style={styles.h1}>Changes to the This Privacy Policy</Text>
                <Text style={styles.h2}>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of 09/16/2023</Text>

                <Text style={styles.h2}>If you provide us with your mailing address, telephone number or facsimile number, and tell us that we may contact you, we may also get in touch with you by one of these methods.</Text>

                <Text style={styles.h1}>What happens when I make an online purchase at a Zero Friction LLC website?</Text>
                <Text style={styles.h2}>Zero Friction LLC collects and stores Personal Information that you provide to us when you make an online purchase, conduct certain online transactions or communicate offline with our customer service department.  When you place an order, open an account or make certain inquiries, you will be asked to provide various Personal Information that we will collect, use and store as described in this Privacy Policy.  Among other things, this Personal Information will be used to facilitate your online transactions (including the processing and shipping of your orders), send you order-related confirmations and provide you with customer service support. This Personal Information also may be used to contact you about sales, special offers and new site features, unless you have elected not to receive promotional communications in connection with this website.</Text>
            
                <Text style={styles.h2>In some instances, your Personal Information will be shared with and stored by third parties who perform services and carry out functions on our behalf and/or in connection with an order.  These include, among others, third party payment and order processors, our network of fulfillment entities (such as local retailers and other product distributors), package delivery services, data management and analysis companies, marketing professionals, fraud protection services, website evaluators and the like.</Text>
                <Text style={styles.h2>For example, we may disclose Personal Information that we collect about you to third parties who we use to provide order processing, fulfillment, financial, marketing or other services on our behalf or as otherwise permitted or required by law.  In some cases, we use these companies or individuals to service, process and fulfill transactions, to protect against fraud, for institutional risk control, to respond to judicial process or to perform other duties on our behalf.</Text>
                <Text style={styles.h2>We also may collect and store information about you that we receive from other sources, to enable us to update and correct the Personal Information contained in our database and to provide product recommendations and special offers that we think will interest you.</Text>

                <Text style={styles.h1}>Where does Zero Friction LLC store this information and is it secure?</Text>
                <Text style={styles.h2}>Zero Friction LLC operates in many countries throughout the world. To enable us to offer consistent service to our customers, wherever they may live, we manage most of our Internet sites from within the United States. Information may be collected outside of the U.S. and transferred to the U.S. in certain instances.  Information that we collect may also be transferred to and stored by third parties who perform services and carry out functions on our behalf and/or in connection with an order.  These include, among others, third party payment and order processors, our network of fulfillment entities (such as local retailers and other product distributors), package delivery services, data management and analysis companies, marketing professionals, fraud protection services, website evaluators and the like.</Text>
                <Text style={styles.h2}>Zero Friction LLC takes precautions to protect your Personal Information, including our policy of allowing access to this Personal Information to only to those individuals and entities with a need to know. We also use available technology and encryption, when legally required or when appropriate for your protection, to provide a more secure environment and to reduce the chance of unauthorized access.</Text>
                <Text style={styles.h2}>Personal Information is stored in a secure environment protected by a combination of physical and technical measures. The information may be kept in separate locations or it may be aggregated into reports, lists or databanks. There is no general public access to this information. In some cases, the Personal Information may be encrypted before you conduct your transaction, using appropriate secure technology. If you send us correspondence such as email or postal mail, or contact us by phone, we may collect such information in a file specific to you. These files will also be stored in secure locations.</Text>
                <Text style={styles.h2}>Always keep in mind, however, that the Internet is not a secure system and you should be cautious about the information you disclose while you are online. Although we take steps to protect your Personal Information against loss, misuse and alteration, as is the case with all computer networks linked to the Internet, we cannot absolutely guarantee the security of your Personal Information provided over the Internet and we will not be responsible for loss, misuse or alteration of the Personal Information.  Click here to find out more about online security.  In addition, the Federal Trade Commission provides helpful information about online privacy on their website: <Text style={[styles.h2,styles.link]} onPress={() => Linking.openURL('http://www.ftc.gov/')}>http://www.ftc.gov/.</Text></Text>

                <Text style={styles.h1}>How long will Zero Friction LLC store this Personal Information?</Text>
                <Text style={styles.h2}>We will remove the Personal Information within a reasonable period of time after receiving your request to do so. Otherwise, the information will be stored in a secure and protected environment for as long as we believe it necessary to serve you and to carry out the other purposes for which we collected the Personal Information and General Data. In addition, legislation might oblige us to store this Personal Information for a certain period of time.</Text>

                <Text style={styles.h2}>To understand how you can amend or update your Personal Information, please refer to the appropriate question in this Privacy Policy.</Text>

                <Text style={styles.h1}>Does Zero Friction LLC share this information with anyone?</Text>
                <Text style={styles.h2}>We understand that your privacy is important to you. It is our policy not to disclose Personal Information about our website visitors without your explicit consent. This consent is given by your election to "opt-in" at the time you provide us with the Personal Information or by your making a purchase at one of our websites. Once you opt-in or make a purchase, you are granting us permission to use the Personal Information as described in this Privacy Policy, including transferring to and storing your Personal Information at our central website located in the United States of America and to third parties who perform services and carry out functions on our behalf and/or in connection with an order.  Your election to opt-in and/or your online purchase constitute your agreement that we may share your Personal Information with selected business partners and affiliates. The opt-in process further means that Zero Friction LLC and the entities that we share your Personal Information with (as described below) may contact you directly in accordance with this Privacy Policy. Whenever we share Personal Information pursuant to this Privacy Policy, we will inform the party receiving it that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC  We also may use confidentiality agreements to further protect Personal Information that becomes the property of Zero Friction LLC</Text>

                <Text style={styles.h2}>From time-to-time, in order to provide you with the services, information and products that you have requested, to fulfill an order, to conduct contests, promotions or sweepstakes or to provide you with services, information and products that we think might be of interest to you, we may share your Personal Information with the following entities and individuals:</Text>
                <Text style={styles.h2}>Licensees, Licensors and other Business Partners:  The Excel Golf  Companies may enter into business dealings, license agreements or other contracts with third parties (we call these relationships "Third Party Agreements"). In connection with these Third Party Agreements, the Excel Golf Companies may license various trademarks and other intellectual property rights to third parties. At other times, Zero Friction LLC may receive permission from a third party to use the third party’s trademarks or intellectual property rights. In addition, Zero Friction LLC may enter into business relationships or contracts with other companies for a variety of goods and services. To the extent that Personal Information is shared with these third parties, we will inform them that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC</Text>

                <Text style={styles.h2}>Third Party Service Providers and Golf Retailers:  In some instances, your Personal Information will be shared with third parties who perform services and carry out functions on our behalf and/or in connection with a product order.  These include, among others, third party payment and order processors, our network of fulfillment entities (such as local retailers and other product distributors), package delivery services, data management and analysis companies, marketing professionals, fraud protection services, website evaluators and the like.  These companies and individuals may be used, among other ways, to fulfill orders, process credit card payments, provide customer service, deliver packages, send emails or post mailings, update customer lists and provide marketing services and support.</Text>
                <Text style={styles.h2}>Marketing, Advertising and Website Hosting Companies:  Occasionally, the Zero Friction LLC Companies utilize the services of outside agencies, companies or individuals to run marketing campaigns, respond to information requests, coordinate contests, sweepstakes and promotions or to host or operate websites and web pages that are connected with our business. We may also contract with third parties to help us better understand your web usage preferences or to analyze data that we collect on our websites and elsewhere. To the extent that Personal Information is shared with these third parties, we will inform them that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC</Text>
                <Text style={styles.h2}>Consultants and Corporate Service Providers:  The Zero Friction LLC Companies may use third parties to help us operate various aspects of our business. This might include people or companies that we bring in to help us understand how to more efficiently operate our business. It also might include third parties that we may use to outsource or help facilitate one or more aspects of our business (e.g. order fulfillment, customer service, co-branding issues, manufacturing, payment processing, etc.). To the extent that Personal Information is shared with these third parties, we will inform them that the Personal Information may only be used for a specific, limited purpose in accordance with this Privacy Policy and as agreed upon in advance by Zero Friction LLC</Text>
                <Text style={styles.h2}>Business Transfers: As noted above, in the event that all or substantially all of our assets are sold or transferred to another party, or in case a transaction occurs in which your Personal Information is one of the business assets transferred, all Personal Information that has been collected and stored may be one of the business assets that we transfer.  You will be notified of such a transfer in accordance with Paragraph 16, below.</Text>
                 <Text style={styles.h2}>Law Enforcement, Regulatory Agencies and Legal Proceedings: The Excel Golf Companies may share your information with government entities, authorized law enforcement personnel, regulatory bodies or as part of legal proceedings, in response to a valid subpoena or court order or as required by applicable law. </Text>


                 <Text style={styles.h1}>What is the process for reviewing and correcting information?</Text>
                 <Text style={styles.h2}>You may request a copy of the Personal Information that Zero Friction LLC has collected. You may also correct any inaccuracies contained in this Personal Information. We do not charge for information requests, although we may charge you a fee to cover our reasonable costs of actually providing you with a copy of your Personal Information. We will require proof of your identity. Please address requests to Internet Customer Service Representative, Zero Friction LLC, 1 Trans Am Plaza Drive- Suite 540, Oakbrook Terrace, IL 60181 or email info@zerofriction.com.  We will provide you with a readable copy of the Personal Information within a reasonable time period after your request (usually 30 days. You may challenge the data that we hold about you, and, where appropriate, you may have the data corrected or completed. In some instances recognized by law, we may refuse to provide you with a copy of the Personal Information or change the data, but we will give you reasons for our refusal.</Text>
                
                <Text style={styles.h2}>We also welcome your questions, comments and suggestions about our Privacy Policy. Please send your comments to info@zerofriction.com.</Text>
                

                <Text style={styles.h1}>Does Zero Friction LLC offer links to other websites?</Text>
                <Text style={styles.h2}>We also may offer links to websites that are not operated by Zero Friction LLC If you visit one of these linked sites, you should review their privacy and other policies. We are not responsible for the policies and practices of other companies. Similarly, while all websites operated by the Excel Golf Companies have similar privacy policies that govern their use and operation, policies may vary from site to site based upon local customs, practices or laws or due to circumstances unique to that site. Please review the privacy policy of each site to determine the privacy policies of that site.</Text>
                <Text style={styles.h1}>What about Personal Information received from third parties?</Text>
                <Text style={styles.h2}>Any Personal Information that Zero Friction LLC receives from third parties is subject to the privacy policies of those entities. We are not responsible for the policies and practices of other companies. You should carefully review the privacy policy of any third party to make sure you are comfortable with how they are going to treat your personal data. For example, some companies may require you to opt-out of their information exchange programs. In those instances, Zero Friction LLC may receive and/or use information gathered by these outside companies or agencies, and the handling and processing of your data will be governed by such third parties’ policies and not by this Zero Friction LLC policy.</Text>
                <Text style={styles.h1}>What about the privacy of children?</Text>
                <Text style={styles.h2}>Protecting the privacy of children is important. Our website is not directed at children under the age of 13, nor do we knowingly solicit or collect Personal Information from children under the age of 13. If we become aware that a user is under the age of 13 and has signed up without prior verifiable parental consent, we will remove his or her Personal Information from our files.  We do not sell or ship any items ordered through this website to anyone who we know to be under the age of 18.</Text>
                <Text style={styles.h1}>What happens if Personal Information is not provided?</Text>
                <Text style={styles.h2}>If you choose not to provide Personal Information, you will still, in most cases, be able to use many of the website features. However you will not be able to access areas that require registration or participate over the Internet in contests, sweepstakes or similar promotions, nor will you be able to make purchases.</Text>
                <Text style={styles.h2}>Even if you do not provide Personal Information, we will sometimes collect anonymous information about how you have used the website. This is information that does not personally identify you, but which may be helpful for marketing or improving the services we offer. (Click here for more information on general data that is collected when you visit our websites and on how we use cookies.)  In addition, the Federal Trade Commission provides helpful information about online privacy its website: <Text style={[styles.h2,styles.link]} onPress={() => Linking.openURL('http://www.ftc.gov/')}>http://www.ftc.gov/.</Text>.  For information about online shopping, please call 1-877-316-7492.</Text>
                <Text style={styles.h1}>How can I stop receiving communications from Zero Friction LLC?</Text>
                <Text style={styles.h2}>If you wish to stop receiving communications from us or would like us to cease processing your information in any other way, you can write to us at: Internet Customer Service Representative, Zero Friction LLC, 1 Trans Am Plaza Drive- Suite 540, Oakbrook Terrace, IL 60181 or email info@zerofriction.com.  We will also provide you with a return email opt-out address in each email that we send to you so that you may opt out of receiving future email communications. This return opt-out address will be operational for at least 30 days following the date the email was originally sent to you.</Text>
                <Text style={styles.h1}>What happens when changes are made to this Privacy Policy?</Text>
                <Text style={styles.h2}>From time to time, it may be necessary for Zero Friction LLC to change this privacy policy. We suggest that you check here periodically. Such modifications are automatically effective upon posting. You can be assured, however, that any changes will not be retroactively applied and will not alter how we handle previously collected information.  If at any point we desire to use your Personal Information in a manner different than that stated at the time it was collected, we will notify you by email and give you the chance to indicate whether you consent to the proposed use.</Text>
                <Text style={styles.h2}>By visiting our website, you are accepting the terms and conditions described in this Privacy Policy, on our Legal Statement and on other locations throughout these web pages.</Text>
                <Text style={styles.h2}>Please see our terms and conditions for additional information.</Text>
                <Text style={styles.h1}>When was the Privacy Policy last updated and when do those changes take effect?</Text>
                <Text style={styles.h2}>This Privacy Policy was last updated on May 1, 2011 and all changes are effective immediately.</Text>

                 {
                    [
                        { key: 'Zero Friction LLC' },
                        { key: '1 Trans Am Plaza Drive, Suite 540' },
                        { key: 'Oakbrook Terrace, IL 60181' },
                        { key: '(877) 316-7492' },
                    ]
                }
                
                 </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    h1: {
        //fontFamily: 'roboto',
        textAlign: 'left',
        fontSize: 25,
        marginTop:8,
        marginBottom:8
    },
    h2: {
        //fontFamily: 'roboto',
        textAlign: 'left',
        fontSize: 15,
    },
    listView:{
        margin: 8
    },
    listText:{
        fontSize: 16,
        color:'#555'
    },
    link:{
        color:'#0C8081'

    }
});

export default Privacy;

*/}