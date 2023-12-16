import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



const SearchBar = ({inputValue,setInputValue,placeholder}) => {


    return (
        <View style={styles.inputContainer}>
          <FontAwesomeIcon style={styles.inputIcon} icon={faMagnifyingGlass} size={20} color={'#000'} />
          <TextInput
            style={styles.input}
            //ref={textInputRef}
            value={inputValue}
            multiline={false}
            placeholder={placeholder?placeholder:'Search...'}
            placeholderTextColor='#000'
            underlineColorAndroid="transparent"
            onChangeText={(text) => setInputValue(text)}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    inputIcon: {
      backgroundColor: '#FFF',
      marginLeft:10
    },
    inputContainer: {
      flex: 1,
      borderRadius: 8,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      alignSelf: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 16,
      lineHeight: 22,
      color: '#000',
      height: 40,
    },
  });

export default SearchBar;