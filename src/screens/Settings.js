import React from 'react';
import { View, Image } from 'react-native';
import Container from '../components/Container';
import GradientButton from '../components/GradientButton';
import { styles } from './styles'

const Settings = () => {

  return (
    <Container>
      <View style={styles.container}>
        <GradientButton>CHECK FOR UPDATES</GradientButton>
        <GradientButton>PUSH NOTIFICATIONS: OFF</GradientButton>
        <View style={styles.banner1}>
          <View style={styles.banner2}>
            <Image source={require('../../assets/gpsglove.png')} style={{ width: 330, height: 90, alignSelf: 'center', marginTop: 10 }} />
          </View>
        </View>
      </View>
    </Container>
  );
}

export default Settings;


