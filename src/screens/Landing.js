import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { GradientText } from './screens/GradientText';

export default function App() {
  return (
    <View style={styles.container}>
           <Image source={require('./assets/zerofrictionbanner.png')} style={{ width: 330, height: 40, alignSelf: 'center'}} />
      
      <GradientText text="ENTER" style={{fontSize: 60}}/>
      <Image source={require('./assets/zerofrictionglove.png')} style={{ width: 195, height: 300, alignSelf: 'center'}} />
  <View style={styles.banner}>
    <View style={styles.banner1}>
      <View style={styles.banner2}>
  <Image source={require('./assets/gpsglove.png')} style={{ width: 330, height: 90, alignSelf: 'center', marginTop: 10}} />
     </View>
  </View>
  </View>

  <TouchableOpacity
        //  onPress={() => navigation.navigate('Terms')}
        activeOpacity={0.5}>
        <Text style={styles.buttonTextStyle}>
        TERMS AND CONDITIONS
       </Text>
  </TouchableOpacity>

  <TouchableOpacity
        //  onPress={() => navigation.navigate('Privacy')}
        activeOpacity={0.5}>
        <Text style={styles.buttonTextStyle}>
        PRIVACY POLICY
       </Text>
  </TouchableOpacity>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: '#ffffff',
    height: 130,
    width: 370,
    marginTop: 10,
  },
  buttonTextStyle: {
  //  fontFamily: 'Arial',
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  banner1: {
    backgroundColor: '#ffffff',
    height: 120,
    width: 360,
    borderWidth: 3,
    borderColor: '#989898',
    alignSelf: 'center',
    marginTop: 5,
  },
  banner2: {
    backgroundColor: '#ffffff',
    height: 114,
    width: 354,
    borderWidth: 3,
    borderColor: '#000000',
    alignSelf: 'center',
  },
  bannerText: {
  //  fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 7,
    fontWeight: 'bold'
  },
});


// Source - https://www.youtube.com/watch?v=vl7r_GNd6As