import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import { styles } from './styles';
import GradientButton from '../components/GradientButton';

const Home = ({ navigation }) => {

  return (
    <Container>
      <View style={[styles.container, { flex: 1, justifyContent: 'space-between' }]}>
        <View>
          <View style={styles.banner4}>
            <View style={styles.banner3}>
              <Text style={styles.bannerText}>Legacy Hills Golf Club</Text>
            </View>
          </View>
        </View>
        <View>
          <GradientButton onPress={() => navigation.navigate('GolfCourse')}>PLAY GOLF</GradientButton>
          <GradientButton>REGISTER</GradientButton>
          <GradientButton>DISTANCE PRO SHOP</GradientButton>
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

export default Home;


