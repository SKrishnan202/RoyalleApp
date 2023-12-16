import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppContainer from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
          <StatusBar style='light' />
          <AppContainer />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );

}