import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {
    faGear,
    faBell,
    faListCheck,
    faBars,
    faList,
    faHome,
    faListUl,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Home from '../screens/Home';
import Services1 from '../screens/Services1';
import Services2 from '../screens/Services2';
import Services3 from '../screens/Services3';
import Alerts from '../screens/Alerts';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function TabNavigator() {
    nav = useNavigation();
    return (
        <BottomTabs.Navigator
            initialRouteName={"Tab1"}
            screenOptions={{
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#cfcfcf',
                tabBarLabelStyle: { paddingBottom: 3, fontSize: 14, paddingTop: 7 },
                tabBarIconStyle: { paddingBottom: 10 },
                tabBarStyle: { padding: 18, backgroundColor: '#007fff', borderBlockColor: '#007fff', height: 60 },
                headerStyle: {
                    backgroundColor: '#007fff',
                    shadowColor: 'transparent',
                    height: 60,
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
                headerLeft: (() => <TouchableOpacity onPress={()=>nav.toggleDrawer()}><FontAwesomeIcon icon={faBars} color={'#fff'} size={20} /></TouchableOpacity>)
            }}>
            <BottomTabs.Screen name="Tab1" component={Home}
                options={{
                    headerTitle: 'Dashboard',
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen name="Tab2" component={Services1}
                options={{
                    headerTitle: 'Control Panel 1',
                    tabBarLabel: 'Panel 1',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faList} size={size} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab3" component={Services2}
                options={{
                    headerTitle: 'Control Panel 2',
                    tabBarLabel: 'Panel 2',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faListUl} size={size} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab4" component={Services3}
                options={{
                    headerTitle: 'Control Panel 3',
                    tabBarLabel: 'Panel 3',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faListCheck} size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen name="Tab5" component={Alerts}
                options={{
                    headerTitle: 'Alerts',
                    tabBarLabel: 'Alerts',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faList} size={size} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab6" component={Settings}
                options={{
                    headerTitle: 'Settings',
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
            <Stack.Screen name='Services1' component={Services1} />
            <Stack.Screen name='Services2' component={Services2} />
            <Stack.Screen name='Services3' component={Services3} />
            <Stack.Screen name='Alerts' component={Alerts} />
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

const Services1Stack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="services1"
                component={Services1}
            />
        </Stack.Navigator>
    );
}

const Services2Stack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="services2"
                component={Services2}
            />
        </Stack.Navigator>
    );
}

const Services3Stack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="services3"
                component={Services3}
            />
        </Stack.Navigator>
    );
}

const AlertsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="alerts"
                component={Alerts}
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

function MainNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#007fff',
                    shadowColor: 'transparent',
                    height: 60,
                    elevation: 0,
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    justifyContent: 'flex-start',
                    flex: 1
                },
                headerLeftContainerStyle: {
                    marginBottom: 10
                }

            })}
        >
            <Drawer.Screen name="Home" component={TabNavigator} options={{
                drawerIcon: () => <FontAwesomeIcon icon={faHome} color={'#007fff'} size={20} />
            }} />
            <Drawer.Screen name="Services1" component={Services1} options={{
                drawerIcon: () => <FontAwesomeIcon icon={faList} color={'#007fff'} size={20} />
            }} />
            <Drawer.Screen name="Services2" component={Services2} options={{
                drawerIcon: () => <FontAwesomeIcon icon={faListUl} color={'#007fff'} size={20} />
            }} />
            <Drawer.Screen name="Services3" component={Services3} options={{
                drawerIcon: () => <FontAwesomeIcon icon={faListCheck} color={'#007fff'} size={20} />
            }} />
            <Drawer.Screen name="Alerts" component={Alerts} options={{
                drawerIcon: () => <FontAwesomeIcon icon={faBell} color={'#007fff'} size={20} />
            }} />
            <Drawer.Screen name="Settings" component={Settings} options={{
                drawerIcon: () => <FontAwesomeIcon icon={faGear} color={'#007fff'} size={20} />
            }} />

        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin:15 }}>
                <Image source={require('../assets/icons/user.png')} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 18, fontWeight: '600', alignSelf:'flex-end', marginLeft:10 }}>John Smith</Text>
            </View>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem
                label="Dashboard"
                icon={() => <FontAwesomeIcon icon={faHome} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab1' })}
            />
            <DrawerItem
                label="Control Panel 1"
                icon={() => <FontAwesomeIcon icon={faList} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab2' })}
            />

            <DrawerItem
                label="Control Panel 2"
                icon={() => <FontAwesomeIcon icon={faListUl} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab3' })}
            />

            <DrawerItem
                label="Control Panel 3"
                icon={() => <FontAwesomeIcon icon={faListCheck} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab4' })}
            />

            <DrawerItem
                label="Alerts"
                icon={() => <FontAwesomeIcon icon={faBell} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab5' })}
            />

            <DrawerItem
                label="Settings"
                icon={() => <FontAwesomeIcon icon={faGear} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab6' })}
            />



        </DrawerContentScrollView>
    );
}


const AppContainer = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default AppContainer;
