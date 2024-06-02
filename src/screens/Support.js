import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import { styles } from './styles'
import GradientButton from '../components/GradientButton';
import { faUserCircle, faCircleXmark, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Support = () => {

  return (
    <Container>
      <View style={[styles.container, {flex: 1, justifyContent: 'space-between' }]}>
        
        <Text style={{fontSize: 40}}>My Chats</Text>
        <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "left", margin: 5 }}>
        <FontAwesomeIcon icon={faUserCircle} size={45} color={'#000000'} />
        <View style={{ backgroundColor: '#0D42E7', width: 200, height: 100, borderRadius: 25 }}>
          <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold', margin: 10}}>Hi, this is Sam. Are we still on for today?I haven't heard back from you, so I thought I'd give you a shout. I had a lot of fun last night.</Text>
        </View>
        <View style={{ backgroundColor: '#E2B900', width: 70, height: 40, borderRadius: 25 }}>
          <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold', margin: 10, alignText: 'center'}}>Bumble</Text>
        </View>
  
        <FontAwesomeIcon icon={faUserCircle} size={45} color={'#000000'} />
        <View style={{ backgroundColor: '#0D42E7', width: 200, height: 100, borderRadius: 25 }}>
          <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold', margin: 10}}>Hi, this is Sam. Are we still on for today?I haven't heard back from you, so I thought I'd give you a shout. I had a lot of fun last night.</Text>
        </View>
        <View style={{ backgroundColor: '#E20078', width: 70, height: 40, borderRadius: 25 }}>
          <Text style={{ fontSize: 10, color: '#ffffff', fontWeight: 'bold', margin: 10, alignText: 'center'}}>Ok Cupid</Text>
        </View>

        <FontAwesomeIcon icon={faUserCircle} size={45} color={'#000000'} />
        <View style={{ backgroundColor: '#0D42E7', width: 200, height: 100, borderRadius: 25 }}>
          <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold', margin: 10}}>Hi, this is Sam. Are we still on for today?I haven't heard back from you, so I thought I'd give you a shout. I had a lot of fun last night.</Text>
        </View>
        <View style={{ backgroundColor: '#C300E2', width: 70, height: 40, borderRadius: 25 }}>
          <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold', margin: 10, alignText: 'center'}}>Tinder</Text>
        </View>


        </View>


      </View>
    </Container>
  );
}

export default Support;


// Rename to Matches.js

