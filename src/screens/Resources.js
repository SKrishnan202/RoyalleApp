import React from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import Container from '../components/Container';
import GradientButton from '../components/GradientButton';
import { styles } from './styles'
import {
  faBluetooth,
  faBluetoothB,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Resources = () => {

  const bIcon = <FontAwesomeIcon icon={faBluetoothB} size={40} color={'white'} style={{ marginRight: 15, marginLeft: -20 }} />;
  {/* <Image source={require('../../assets/bluetooth.png')} style={{ width: 35, height: 50, marginLeft: 15, marginRight: 15 }} /> */ }

  return (
    <Container>
      <View style={[styles.container, { flex: 1, justifyContent: 'space-between' }]}>
        <View>
          <GradientButton icon={bIcon}>PAIR DEVICE</GradientButton>
          <GradientButton textStyle={{ fontSize: 17 }} onPress={() => Linking.openURL('https://zerofriction.com/rangefinders/distance-pro-gps-gloves/distance-pro-gps-glove-faqs-trouble-shooting-guide')}>
            FAQs and TROUBLESHOOTING GUIDE
          </GradientButton>
          <GradientButton textStyle={{ fontSize: 17 }} onPress={() => Linking.openURL('https://zerofriction.com/rangefinders/distance-pro-gps-gloves/distance-pro-gps-glove-user-manual')}>
            BASIC INSTRUCTIONS MANUAL
          </GradientButton>
          <GradientButton textStyle={{ fontSize: 17 }} onPress={() => Linking.openURL('https://zerofriction.com/rangefinders/distance-pro-gps-gloves/distance-pro-gps-glove-user-manual')}>
            SUPPLEMENTAL INSTRUCTIONS MANUAL
          </GradientButton>
        </View>

        <View style={styles.banner1}>
          <View style={styles.banner2}>
            <Image source={require('../../assets/gpsglove.png')} style={{ width: 330, height: 90, alignSelf: 'center', marginTop: 10 }} />
          </View>
        </View>


      </View>
    </Container>
  );
}

export default Resources;

