import React, { useState, CustomSliderMarkerLeft, CustomSliderMarkerRight } from 'react';
import { View, Image, Text, Button, ScrollView } from 'react-native';
import Container from '../components/Container';
import GradientButton from '../components/GradientButton';
import { styles } from './styles'
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Settings = () => {
const [open, setOpen] = useState(false);
const [value, setValue] = useState(['race', 'hair', 'brunette', 'bodytype']);
const [items, setItems] = useState([
    {label: 'Hair', value: 'hair'},
    {label: 'Blonde', value: 'blonde', parent: 'hair'},
    {label: 'Brunette', value: 'brunette', parent: 'hair'},
    {label: 'Red Head', value: 'readhead', parent: 'hair'},


    {label: 'Race', value: 'race'},
    {label: 'American', value: 'american', parent: 'race'},
    {label: 'Indian', value: 'indian', parent: 'race'},
    {label: 'African', value: 'african', parent: 'race'},

    {label: 'Body Type', value: 'bodytype'},
    {label: 'Skinny', value: 'skinny', parent: 'bodytype'},
    {label: 'Hourglass', value: 'hourglass', parent: 'bodytype'},

    {label: 'Likes', value: 'likes'},
    {label: 'Workout', value: 'workout', parent: 'likes'},
    {label: 'Want Kids', value: 'wantkids', parent: 'likes'},
    {label: 'Has Kid', value: 'haskid', parent: 'likes'},
    {label: 'Other', value: 'other', parent: 'likes'},

    {label: 'Looking For', value: 'lookingfor'},
    {label: 'Long term', values: 'longterm', parent: 'lookingfor'},
    {label: 'Short term', values: 'shortterm', parent: 'lookingfor'},
    {label: 'Time pass', values: 'timepass', parent: 'lookingfor'},
    {label: 'Dating', values: 'dating', parent: 'lookingfor'},
   
    {label: 'Preferences', value: 'preferences'},
    {label: 'Drinking', values: 'drinking', parent: 'preferences'},
    {label: 'Smoking', values: 'smoking', parent: 'preferences'},
    {label: 'Education', values: 'education', parent: 'preferences'},
    {label: 'Outlook', values: 'outlook', parent: 'preferences'},
    {label: 'Non-smoking', values: 'nonsmoking', parent: 'preferences'},
    {label: 'One Night Stand', values: 'onenightstand', parent: 'preferences'},

  ]);

  //enableScroll = () => this.setState({ scrollEnabled: true });
  //disableScroll = () => this.setState({ scrollEnabled: false });
  
  return (
    <Container>
      <View style={[styles.container, {flex: 1, justifyContent: 'space-between' }]}>
      
      <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold', alignSelf: 'left'}}>Age (Years)</Text>

     {/* 
      <ScrollView scrollEnabled={this.state.scrollEnabled}></ScrollView>
      <MultiSlider
      isMarkersSeparated={true}
      customMarkerLeft={(e) => {
         return (<CustomSliderMarkerLeft
          currentValue={e.currentValue}/>)
          }}
         customMarkerRight={(e) => {
         return (<CustomSliderMarkerRight
         currentValue={e.currentValue}/>)
         }}
     />
        */}
      <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold', alignSelf: 'left'}}>Height (m)</Text>
      <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold', alignSelf: 'left'}}>Gender</Text>
      <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "center" }}>
          <GradientButton>Male</GradientButton>
          <GradientButton>Female</GradientButton>
          <GradientButton>Other</GradientButton>
        </View>

        <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold', alignSelf: 'left'}}>Location (km)</Text>


        <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold', alignSelf: 'left'}}>Set Microfilters</Text>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}

        theme="DARK"
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />

      <View style={{ backgroundColor: '#25E0DA', width: 250, height: 50, borderRadius: 50}}>
        <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20}}>Apply Filter</Text>
        </View>

      </View>
    </Container>
  );
}

export default Settings;


// source for multi slider - https://www.npmjs.com/package/@ptomasroos/react-native-multi-slider/v/1.0.0#installation

