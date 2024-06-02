import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export function GradientText(props) {
  return (
    <MaskedView maskElement={ <Text style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Text>}>
     <LinearGradient
       start={{x: 0, y: 1}}
       end={{x: 0, y: 0}}
       colors={['#ebd00a', '#dcbd11']}
     >
        <Text style={[props.style, {opacity: 0}]}>{props.text}</Text>
     </LinearGradient>
    </MaskedView>
  );
}

export function GradientButton(props) {
  return (
    <View>
     <LinearGradient
       start={{x: 0, y: 1}}
       end={{x: 0, y: 0}}
       colors={['#fefefe', '#cfcfcf']}
     >
        <Button style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Button>
     </LinearGradient>
    </View>
  );
}