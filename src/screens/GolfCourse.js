import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';

const GeneralIcon = require('../../assets/golf.png');

const GolfCourse = () => {

  const [inputValue, setInputValue] = useState('');
  const data = [
    {
      id: '1',
      title: 'TPC Sawgrass',
      image: GeneralIcon,
    },
    {
      id: '2',
      title: 'Baytone Golf Club',
      image: GeneralIcon,
    },
    {
      id: '3',
      title: 'Grand Cypress golf',
      image: GeneralIcon,
    },
    {
      id: '4',
      title: 'Bears Club',
      image: GeneralIcon,
    },
    {
      id: '5',
      title: 'Montain Lake',
      image: GeneralIcon,
    },
    {
      id: '6',
      title: 'Deer Island Country Club',
      image: GeneralIcon,
    },
    {
      id: '7',
      title: 'Old Marsh Golf Club',
      image: GeneralIcon,
    },
    {
      id: '8',
      title: 'Coral Creek Club',
      image: GeneralIcon,
    },
    {
      id: '9',
      title: 'Pablo Creek Golf Club',
      image: GeneralIcon,
    },
    {
      id: '10',
      title: 'Trump Miami Golf Club',
      image: GeneralIcon,
    },

  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.avatarContainer}>
          <Image source={item.image} style={styles.avatar} />
        </View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.searchContainer}>
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} placeholder='Search course by name...' />
      </View>
      <View style={styles.container}>

        <Text style={styles.title}>Select golf course</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />

      </View>
    </View>

  );
}

export default GolfCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    padding: 25
  },
  contentContainerStyle: {
    borderRadius: 10,
    backgroundColor: '#d1d1d1'

  },
  searchContainer: {
    backgroundColor: '#000',
    height: 40,
    width: '95%',
    marginLeft: 15,
    marginRight: 15,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop:15
  },
  item: {
    padding: 10,
    marginHorizontal: 8,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderTopColor: '#d1d1d1',
    borderRightColor: '#d1d1d1',
    borderLeftColor: '#d1d1d1',
    borderBottomColor: '#555',

  },
  title: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 25,
    textTransform: 'uppercase'
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
    fontSize: 15,
  }
});
