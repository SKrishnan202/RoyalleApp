import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const GolfCourse = () => {

 return (
  
   <View style={styles.container}>
    <Image source={require('../../assets/zerofrictionbanner.png')} style={{ width: 330, height: 42, alignSelf: 'center', marginLeft: 5}} />
    const DATA = [
  {
    id: '1',
    title: 'First Item',
    image: require('./golf.png'),
  },
  {
    id: '2',
    title: 'Second Item',
    image: require('./golf.png'),
  },
  {
    id: '3',
    title: 'Third Item',
    image: require('./golf.png'),
  },
    {
    id: '4',
    title: 'Third Item',
    image: require('./golf.png'),
  },
    {
    id: '5',
    title: 'Third Item',
    image: require('./golf.png'),
  },
    {
    id: '6',
    title: 'Third Item',
    image: require('./golf.png'),
  }, 
  {
    id: '7',
    title: 'Third Item',
    image: require('./golf.png'),
  },
  
  ];

type ItemProps = {title: string};

const Item = ( {item} ) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.avatarContainer}>
          <Image source={item.image} style={styles.avatar} />
        </View>
      <Text style={styles.name}>{item.name}</Text>
       <Text style={styles.text}>{item.text}</Text>
  </View>
);


    <StatusBar style="auto" />
    </View>
  );
}

export default GolfCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 25
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  avatarContainer: {
    backgroundColor: '#38c172',
    borderRadius: 50,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
},
name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 15,
  }
});
