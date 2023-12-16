import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    faGear,
    faScrewdriverWrench,
    faHome,
    faHeadphones,
    faBackward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Home from '../screens/Home';
import Resources from '../screens/Resources';
import Support from '../screens/Support';
import Settings from '../screens/Settings';
import Landing from '../screens/Landing'
import Terms from '../screens/Terms'
import Privacy from '../screens/Privacy'
import GolfCourse from '../screens/GolfCourse';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function TabNavigator() {
    nav = useNavigation();
    return (
        <BottomTabs.Navigator
            initialRouteName={"Tab1"}
            screenOptions={{
                tabBarActiveTintColor: '#6FA1D3',
                tabBarInactiveTintColor: '#cfcfcf',
                tabBarLabelStyle: { paddingBottom: 3, fontSize: 14, paddingTop: 7 },
                tabBarIconStyle: { paddingBottom: 10 },
                tabBarStyle: { padding: 18, backgroundColor: '#000002', borderBlockColor: '#000002', height: 60 },
                headerShown:false,
                headerStyle: {
                    backgroundColor: '#000002',
                    shadowColor: 'transparent',
                    height: 90,
                    elevation: 0,
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    justifyContent: 'flex-start',
                    flex: 1
                },
                headerLeftContainerStyle: {
                    marginBottom: 10, 
                    marginLeft:20
                },
           
            }}>
            <BottomTabs.Screen name="Tab1" component={Home}
                options={{
                    headerTitle: 'HOME',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen name="Tab2" component={Resources}
                options={{
                    headerTitle: 'RESOURCES',
                    tabBarLabel: 'Resources',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faScrewdriverWrench} size={size} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab3" component={Support}
                options={{
                    headerTitle: 'SUPPORT',
                    tabBarLabel: 'Support',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHeadphones} size={size} color={color} />
                    ),
                }} />
                <BottomTabs.Screen name="Tab6" component={Settings}
                options={{
                    headerTitle: 'SETTINGS',
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faGear} size={size} color={color} />
                    ),
                }} />
     </BottomTabs.Navigator>
 
    );
}

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{
                headerShown: true,
                headerStyle:{
                    backgroundColor:'#000',
                },
                headerTitleAlign:'center',
                headerTitle:()=><Image source={require('../../assets/zerofrictionbanner.png')} style={{ width: 330, height: 40 }} />,
                headerBackVisible:false

            }}
            
        >
            <Stack.Screen name='Landing' component={Landing} />
            <Stack.Screen name='Tabs' component={TabNavigator} />
            <Stack.Screen name='Terms' component={Terms} />
            <Stack.Screen name='Privacy' component={Privacy} />
            <Stack.Screen name='GolfCourse' component={GolfCourse} />
        </Stack.Navigator>
    )
}



const AppContainer = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default AppContainer;

