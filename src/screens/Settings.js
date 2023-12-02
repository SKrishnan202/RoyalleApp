import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
//import { GradientText } from './screens/GradientText';
//import { LinearGradient } from 'expo-linear-gradient';
//import MaskedView from '@react-native-masked-view/masked-view';


const Settings = () => {

 return (
  
   <View style={styles.container}>
    <Image source={require('../../assets/zerofrictionbanner.png')} style={{ width: 330, height: 42, alignSelf: 'center', marginLeft: 5}} />

    <TouchableOpacity
        // onPress={() => navigation.navigate('updates')}
      >
    <View style={styles.buttonContainer}>
    <Text style={styles.text1}>
      CHECK FOR UPDATES
    </Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
        // onPress={() => navigation.navigate('push')}
      >
    <View style={styles.buttonContainer}>
    <Text style={styles.text2}>
      PUSH NOTIFICATIONS: OFF
    </Text>
    </View>
  </TouchableOpacity>

    <View style={styles.banner1}>
      <View style={styles.banner2}>
  <Image source={require('../../assets/gpsglove.png')} style={{ width: 330, height: 90, alignSelf: 'center', marginTop: 10}} />
     </View>
  </View>

    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
     />
    <StatusBar style="auto" />
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 25
  },
  contentContainerStyle: {
    paddingHorizontal: 4,
    paddingBottom: 49,
  },
  text1: {
    fontSize: 25,
  //  fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 12,
  },
  text2: {
    fontSize: 22,
    textAlign: 'center',
  //  fontFamily: 'Arial',
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 15,
  },
  buttonContainer: {
    borderColor: '#aeaaaa',
    borderWidth: 4,
    height: 70,
    width: 320,
    borderRadius: 50,
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
  banner3: {
    backgroundColor: '#ffffff',
    height: 60,
    width: 350,
    borderWidth: 4,
    borderColor: '#989898',
    alignSelf: 'center',
    marginTop: 5,
  },
  banner4: {
    backgroundColor: '#ffffff',
    height: 75,
    width: 360,
    borderWidth: 3,
    borderColor: '#000000',
    alignSelf: 'center',
  },
});
