import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MAIN_HomeScreen, InfoScreen, StructureScreen, } from '../screens/main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();
const FindScreen = () => {
    return null;
  };
const TabDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false,}}
            initialRouteName="homeScreen">
            <Drawer.Screen name="TrangChủ" component={MAIN_HomeScreen}
                options={{
                    title: 'Trang chủ',
                    drawerIcon: ({ tintColor, size}) => (
                          <Ionicons
                            name="home"
                            size={24}
                            color={'black'}
                          />
                    ),
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Find" component={FindScreen}
                options={{
                    title: 'Tìm Kiếm',
                    drawerIcon: ({ tintColor, size }) => (
                          <Ionicons
                            name="md-search-outline"
                            size={24}
                            color={'black'}
                          />
                    ),
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Struc" component={StructureScreen}
                options={{
                    title: 'Sơ đồ tổng hợp',
                    drawerIcon: ({ tintColor, size }) => (
                          <FontAwesome
                            name="map-o"
                            size={24}
                            color={'black'}
                          />
                    ),
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Info" component={InfoScreen}
                options={{
                    title: 'Thông tin',
                    drawerIcon: ({ tintColor, size }) => (
                          <Entypo
                            name="info-with-circle"
                            size={24}
                            color={'black'}
                          />
                    ),
                }}>
            </Drawer.Screen> 
        </Drawer.Navigator>
    );
}

export default TabDrawer

const styles = StyleSheet.create({})