{/*

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Slider, Text, Icon, Image } from '@rneui/themed';

type SlidersComponentProps = {};

const Sliders: React.FunctionComponent<SlidersComponentProps> = () => {
const [value, setValue] = useState(0);
const [vertValue, setVertValue] = useState(0);

const interpolate = (start: number, end: number) => {
  let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
  return Math.ceil((1 - k) * start + k * end) % 256;
};

const color = () => {
  let r = interpolate(255, 0);
  let g = interpolate(0, 255);
  let b = interpolate(0, 0);
  return `rgb(${r},${g},${b})`;
};

return (
  <>
    <Text style={styles.subHeader}>Energy Usage</Text>
    <ScrollView style={styles.scrollView}>
    <View style={[styles.contentView]}>

      <View style={styles.calendar}>
      <Text style={styles.month}>January</Text>
      <Text style={{ paddingTop: 20 }}>{value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 35, width: 35, backgroundColor: '#8acc58' }}
        thumbProps={{
          children: (
            <Image
            source={require('./bolticon.png')}
           // type="font-awesome"
            style={{width: 22, height: 22}}
            //reverse
            //containerStyle={{ bottom: 20, right: 20 }}
            //color="#8acc58"
          />
          ),
        }}
      />
      </View>

    
       <Text style={styles.month}>February</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
            name="heartbeat"
            type="font-awesome"
            size={20}
            reverse
            containerStyle={{ bottom: 20, right: 20 }}
            color="#8acc58"
          />
          ),
        }}
      />
       <Text style={styles.month}>March</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
       <Text style={styles.month}>April</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
       <Text style={styles.month}>May</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
       <Text style={styles.month}>June</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
      <Text style={styles.month}>July</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
      <Text style={styles.month}>August</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
      <Text style={styles.month}>September</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
      <Text style={styles.month}>October</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
      <Text style={styles.month}>November</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
      <Text style={styles.month}>December</Text>
       <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={3000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 12, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#8acc58"
            />
          ),
        }}
      />
    </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
contentView: {
  padding: 20,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'stretch',
},
verticalContent: {
  padding: 20,
  flex: 1,
  flexDirection: 'row',
  height: 500,
  justifyContent: 'center',
  alignItems: 'stretch',
},
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
},
month: {
  fontFamily: 'Arial',
  fontSize: 20,
  color: '#000000',
  fontWeight: 'bold'
},
calendar: {
  height: 100,
  width: 350,
  backgroundColor: '#f4f5fa',
  borderWidth: 1,
  borderRadius: 8,
  borderColor: '#e4e8ef',
},
scrollView : {
  
},
});

export default Sliders;

// how to source an image using React Native Element

*/}