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
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Home from '../screens/Home';
import Resources from '../screens/Resources';
import Support from '../screens/Support';
import Settings from '../screens/Settings';

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
            initialRouteName="Tabs"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Tabs' component={TabNavigator} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Resources' component={Resources} />
            <Stack.Screen name='Support' component={Support} />
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="home"
                component={Home}
            />
        </Stack.Navigator>
    );
}

const ResourcesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="resources"
                component={Resources}
            />
        </Stack.Navigator>
    );
}

const SupportStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="support"
                component={Support}
            />
        </Stack.Navigator>
    );
}

const SettingsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="settings"
                component={Settings}
            />
        </Stack.Navigator>
    );
}


const AppContainer = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default AppContainer;

//Difference between Tab and Stack Navigator?? Line 161. We removed all parts of the drawer navigator (headerLeft)