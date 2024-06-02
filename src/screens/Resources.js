import React from 'react';
import { View, Image, TouchableOpacity, Linking, Text } from 'react-native';
import Container from '../components/Container';
import GradientButton from '../components/GradientButton';
import { styles } from './styles'
import {
  faBluetooth,
  faBluetoothB,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const Resources = () => {

  return (
    <Container>
      <View style={[styles.container, { flex: 1, justifyContent: 'space-between' }]}>
        <View>
         
         <Container style={{ backgroundColor: '#E0E0E0', height: 530, width: 400}}>
          <View style={{ borderColor: 'gray', borderWidth: 2, borderRadius: 50, height: 40, width: 300, alignItems: 'center'}}>
            <Text style={{ color: '#000000', fontSize: 18}}>
              Hi, how can I help you today?
            </Text>
          </View>
          <View style={{ borderColor: 'gray', borderWidth: 2, borderRadius: 50, height: 50, width: 300, alignItems: 'left', paddingLeft: 12}}>
            <Text style={{ color: '#000000', fontSize: 18}}>
              I'm looking for....
            </Text>
          </View>

          <TouchableOpacity>
          <GradientButton styles>
            Chat Bot <FontAwesomeIcon icon={faRobot} size={20} color={'#ffffff'} />
          </GradientButton>
          </TouchableOpacity>
          </Container>
        </View>


      </View>
    </Container>
  );
}

export default Resources;


// rename to AI

