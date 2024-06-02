import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Color, Button } from 'react-native';
import Container from '../components/Container';
import { styles } from './styles';
import GradientButton from '../components/GradientButton';
import { faBars, faCheckCircle, faCircleChevronLeft, faCircleChevronRight, faCircleXmark,faComment,faCommentDots,faHeart,faHouse,faInfoCircle,faMapMarker, faQuoteRight, faQuoteRightAlt, faRobot, faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Home = ({ navigation }) => {

  return (
    <Container>
      <View style={[styles.container, { flex: 1, justifyContent: 'space-between' }]}>
      
          <TouchableOpacity>
         <View style={{ height: 40, width: 45, backgroundColor: '#0D42E7', alignItems: 'center', borderRadius: 5}}>
         <FontAwesomeIcon icon={faBars} size={38} color={'#B2B2B2'} />
         </View>
         </TouchableOpacity>

         <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "center"}}>
         <Image source={require('../../assets/model.png')} style={{ width: 300, height: 320, alignSelf: 'center', top: 10, position: 'absolute' }} />
         </View>
      
         <Text style={{fontSize: 22, color: '#ffffff', alignContent: 'left', fontWeight: 'bold'}}>
             Andrila Ramsey <FontAwesomeIcon icon={faInfoCircle} size={20} color={'#07F1F1'} />
            </Text>
            <View style={{backgroundColor: 'rgba(52, 52, 52, .3)', height: 130, width: 290, borderRadius: 20}}>
         <Text style={{fontSize: 14, color: '#ffffff', alignContent: 'left', fontWeight: 'bold', margin: 10}}>
             An accomplished technology entrepreneur, innovator, and thought leader <FontAwesomeIcon icon={faQuoteRightAlt} size={25} color={'#a2a7a6'} /> 
            </Text>
            


            <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "center"}}>
          <View style={{backgroundColor: 'rgba(52, 52, 52, .2)', height: 30, width: 100, borderRadius: 50}}>
            <Text style={{fontSize: 12, color: '#ffffff', textAlign: 'center'}}>
            <FontAwesomeIcon icon={faMapMarker} size={12} color={'#ffffff'} /> 2KM of you
            </Text>
          </View>
          <View style={{backgroundColor: 'rgba(52, 52, 52, .2)', height: 30, width: 80, borderRadius: 50}}>
            <Text style={{fontSize: 12, color: '#ffffff', textAlign: 'center'}}>
             New York
            </Text>
          </View>
          <View style={{backgroundColor: 'rgba(52, 52, 52, .2)', height: 30, width: 80, borderRadius: 50}}>
            <Text style={{fontSize: 12, color: '#ffffff', textAlign: 'center'}}>
              24 Years
            </Text>
          </View>
        </View>
        </View>

        
            <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "center", marginTop: 150}}>
            <TouchableOpacity><FontAwesomeIcon icon={faCircleChevronLeft} size={25} color={'#bec3c3'} /></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon icon={faRotateLeft} size={30} color={'#364cec'} /></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon icon={faHeart} size={30} color={'#dc200d'} /></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon icon={faComment} size={30} color={'#0ed098'} /></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon icon={faCircleChevronRight} size={25} color={'#bec3c3'} /></TouchableOpacity>
              </View>
           
              <View style={{backgroundColor: 'rgba(52, 52, 52, .5)', height: 50, width: 300, borderRadius: 50}}>
              <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "center"}}>
            <TouchableOpacity><FontAwesomeIcon icon={faHouse} size={30} color={'#0ed098'} /></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon icon={faCommentDots} size={30} color={'#0ed098'} /></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon icon={faRobot} size={30} color={'#0ed098'} /></TouchableOpacity>
              </View>
              </View>

      </View>
    </Container>

  );
}

export default Home;


// blue color - 0D42E7
//</View>onPress={() => navigation.navigate('GolfCourse')

{/*
 <Container>
      <View style={[styles.container, { flex: 1, justifyContent: 'space-between' }]}>
      
          <TouchableOpacity>
         <View style={{ height: 40, width: 45, backgroundColor: '#0D42E7', alignItems: 'center', borderRadius: 5}}>
         <FontAwesomeIcon icon={faBars} size={38} color={'#B2B2B2'} />
         </View>
         </TouchableOpacity>

         <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "center", marginTop: 50 }}>
         <TouchableOpacity><FontAwesomeIcon icon={faCircleXmark} size={45} color={'#E23E00'} /></TouchableOpacity>
         <Image source={require('../../assets/model.png')} style={{ width: 190, height: 260, alignSelf: 'center', marginTop: 40 }} />
         <TouchableOpacity><FontAwesomeIcon icon={faCheckCircle} size={45} color={'#1BD102'} /></TouchableOpacity>
         </View>

        

        <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "center", marginTop: 50 }}>
        <GradientButton style={{width: 45}}>Existing Matches</GradientButton>
          <GradientButton style={{width: 45}}>AI Assistant</GradientButton>
          <GradientButton style={{width: 45}}>TBD</GradientButton>
        </View>
      </View>
    </Container>









*/}
