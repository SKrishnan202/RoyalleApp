import React from 'react';
import { View, Image } from 'react-native';
import Container from '../components/Container';
import { styles } from './styles'
import GradientButton from '../components/GradientButton';

const Support = () => {

  return (
    <Container>
      <View style={styles.container}>
        <GradientButton>SUPPORT</GradientButton>
        <GradientButton>DISTANCE PRO SHOP</GradientButton>
        <GradientButton>UNITS OF MEASURE YARDS</GradientButton>
        <GradientButton>FAQs & TROUBLESHOOTING</GradientButton>
        <View style={styles.banner1}>
          <View style={styles.banner2}>
            <Image source={require('../../assets/gpsglove.png')} style={{ width: 330, height: 90, alignSelf: 'center', marginTop: 10 }} />
          </View>
        </View>

      </View>
    </Container>
  );
}

export default Support;


