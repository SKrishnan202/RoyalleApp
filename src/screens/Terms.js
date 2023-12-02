
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, Linking, ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Terms = () => {

    return (
        <View style={styles.container}>
            <ScrollView >

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <FontAwesomeIcon style={{ marginRight: 20 }} icon={faArrowLeft} size={45} />
                    <Text style={[styles.h1, { marginBottom: 0 }]}>TERMS AND CONDITIONS</Text>
                </View>

                <Text style={styles.h2}>Welcome to the Zero Friction LLC, (“Zero Friction ”) website (“zerofriction.com”).  Like the game of golf, this Site has certain Terms that you must follow during your visit (“Terms”). Please read these Terms carefully before beginning your tour. Most of all have fun while you discover what Zero Friction is all about.</Text>

                <Text style={styles.h2}>Who We Are: When we refer to "Zero Friction," "we," "our" or "us," it means Zero Friction LLC  Zero Friction LLC's headquarters are at1 Trans Am Plaza Drive, Suite 540, and Oakbrook Terrace, IL 60181, USA. Unless otherwise noted, these Terms apply to every website maintained by Zero Friction.</Text>

                <Text style={styles.h2}>Changes To Site: Zero Friction LLC reserves the right to revise these Terms at any time by updating this posting. The Terms were last updated on June 2, 2016.  Your continued use of the Site following the posting of changes to these Terms will mean you accept those changes and that they apply to you.</Text>
             
                <Text style={styles.h2}>Use Of Site Content: Zero Friction maintains this Site and its contents for your personal information, education and purchase choices. You may view and download material displayed on the Site for your personal, non-commercial use only, provided you retain all copyright, trademark and other proprietary notices contained within the materials. You may not distribute, retransmit, republish, reuse, repost, or use the contents of this Site for public or commercial purposes, without Zero Friction ’s prior written permission.  You may not alter or interfere with the content or functioning of the Site, or "mirror" any content contained on this Site on any other server. The materials at this Site are copyrighted and any unauthorized use may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications regulations and statutes. If you breach any of these Terms, your right to use this Site will terminate automatically.</Text>

                <Text style={styles.h2}>Communicating With Us: Zero Friction, welcomes your comments. However, please do not send us any creative ideas, original materials, or suggestions relating to products or marketing plans. Any communication or material you transmit to Zero Friction , or post to the Site by electronic mail or otherwise, including any personal data, questions or answers, comments, suggestions, or the like, will be treated as non-confidential and non-proprietary, and may be disseminated or used by Zero Friction for any purpose including, but not limited to, developing, manufacturing or marketing products. Anything you transmit or post may be used by Zero Friction for any purpose, including but not limited to product solicitations, reproduction, disclosure, transmission, publication, and broadcast. You may not post or transmit to or from the Site any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane material, or any other material that could give rise to any civil or criminal liability under the law.</Text>
                <Text style={styles.h2}>Testimonials on this web site are unsolicited and are non-representative of all golfers. Zero Friction has received many testimonials and has selected appropriate testimonials for posting on this web site. We reserve the right to edit testimonials to clarify content and remove objectionable materials, among other things. Testimonials represent the viewpoints and unique experiences of individual golfers with Zero Friction products and should not be taken as indications or guarantees of future results of other golfers using the same or similar Zero Friction golf products. Although most Zero Friction products are designed to provide optimal performance over a wide range of swing speeds, certain golfers may have a different experience or performance with the same or similar Zero Friction product mentioned in these testimonials. Zero Friction does not represent nor does it warrant that any golfer will or is likely to achieve the same or similar results using these Zero Friction products.</Text>
                <Text style={styles.h2}>Contests, Sweepstakes And Other Interactive Transactions:  The website may offer you opportunities to vote on certain matters and also to enter contests and sweepstakes. By casting a vote or entering contests or sweepstakes, you signify your agreement to all of the terms set forth on the Site applicable to the balloting, contest or sweepstakes, as well as to the terms set forth in these Terms and in our Privacy Policy. See our Privacy Policy for further information.</Text>
                <Text style={styles.h2}>Disclaimer Of Warranty: Zero Friction does not warrant or represent that the content at the Site is accurate, or that the Site’s operation will be error-free or uninterrupted, or that it will be free of viruses or other harmful components. You use the Site at your own risk. Zero Friction does not represent or warrant that your use of materials displayed on this Site will not infringe rights of third parties. Information published at this Site may refer to products, programs or services that are not available in your country. Without limiting the foregoing, the Site is provided "AS IS" and without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Some jurisdictions may not allow exclusion of implied warranties, so some of the above exclusions may not apply to you.</Text>
                <Text style={styles.h2}>Limitation Of Liability: Either Zero Friction nor any third party involved in creating or delivering the Site will be liable under any theory (including negligence) for any incidental, consequential, indirect, special, or punitive damages arising out of your access to or use of the Site, even if we have been advised of the possibility of such damages.</Text>
                <Text style={styles.h2}>Instruction or Fitting Information: From time to time, this Site may feature golf tips, practice pointers, fitting information and instructional videos (collectively, the “Instructional Information”) from a variety of sources.  You are solely responsible for the proper use of the Instructional Information.  We are not responsible for any physical, emotional or property damages resulting from the use or misuse of such Instructional Information, nor are we responsible for the accuracy, reliability, effectiveness or correct use of any Instructional Information that you receive on this Site.  You should consult with your physician or other health care professional before beginning any type of exercise or training program or other physical activity.</Text>
                <Text style={styles.h2}>Links: The Site may from time to time display links to other websites or resources sponsored by third parties as a convenience to you.  We are not responsible or liable for, and does not endorse, the content or operation of such third-party websites, including but not limited to the advertising, products or other materials on or available from such websites or resources. Various third-party websites may provide links to this Site.  We have not reviewed any or all of the third-party websites linked to this Site. We are not responsible for the content of any off-site pages or any other websites linked to this Site. Your linking to this Site, off-site pages or other websites is at your own risk. Note:  Anyone linking to our website must comply with the Link Guidelines for linking to our Site as well as all applicable laws.</Text>
                <Text style={styles.h2}>Copyright Notices: The copyright in all content provided on this Site is held by Zero Friction . Except as provided in these Terms, such content may not be reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise, without the prior written permission of Zero Friction . If you are an owner of intellectual property who believes your intellectual property has been improperly posted or distributed via this Site, please notify us immediately.</Text>
                <Text style={styles.h2}>Trademarks: The trademarks, service marks and logos ("Trademarks") used and displayed on this Site are registered or common law trademarks of Zero Friction and others.  Nothing on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Trademarks displayed on the Site, without the written permission of the trademark owner. Zero Friction aggressively enforces its intellectual property rights to the fullest extent of the law.</Text>
                <Text style={styles.h2}>Our Products: Zero Friction sells performance golf products sold in more than 30 countries around the world. Products displayed on this Site can be found at authorized Zero Friction Retail Locations near you, while supplies last. Please connect to our Retail Locator to find the authorized retail location nearest you. We have done our best to display the true colors of the products found on this Site; however, colors may vary due to the settings of your computer monitor. </Text>
                <Text style={styles.h2}>Site Operation: Zero Friction controls and operates this Site from its headquarters in Oakbrook Terrace, Illinois, United States of America and makes no representation that these materials are appropriate for use in other locations. If you use this Site from other locations you are responsible for compliance with applicable local laws. You may not use or export or re-export the materials at this Site or any copy or adaptation in violation of any applicable laws or regulations including without limitation U.S. export laws and regulations.</Text>
                <Text style={styles.h2}>Governing Law: These Terms and your use of the Site will be governed by the laws of Illinois.   Any dispute arising out of these Terms or your use of the Site will be heard only in the state or federal courts located in Chicago, Cook County, Illinois, USA, and you hereby consent and submit to the personal jurisdiction of such courts. </Text>
                <Text style={styles.h2}>Interpretation: If any provision of these Terms is held to be unlawful, void, or for any reason unenforceable, that provision will be deemed severable and will not affect the validity and enforceability of the remaining provisions. These Terms (and the links contained herein) state the entire agreement between the parties relating to use of the Site.  The Terms may not be amended except as provided above.</Text>
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
   //     fontFamily: 'Arial',
        textAlign: 'left',
        fontSize: 25,
        marginTop:8,
        marginBottom:8
    },
    h2: {
    //    fontFamily: 'Arial',
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

export default Terms;