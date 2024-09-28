import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/ProfileScreen';
import ProfileScreen from '../components/SettingsScreen';
import { Ionicons } from '@expo/vector-icons'; // Sử dụng các biểu tượng từ thư viện Ionicons

import TinhTong from '../components/BuocChan';
import SoNguyenTo from '../components/SoNguyenTo';
import KiemTraTamGiac from '../components/KiemTraTamGiac';
import SoBinhPhuong from '../components/SoBinhPhuong';
import QuanLyNhietDo from '../components/QuanLyNhietDo';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="TinhTong" component={TinhTong} />
      <Tab.Screen name="SoNguyenTo" component={SoNguyenTo} />
      <Tab.Screen name="KiemTraTamGiac" component={KiemTraTamGiac} />
      <Tab.Screen name="SoBinhPhuong" component={SoBinhPhuong} />
      <Tab.Screen name="QuanLyNhietDo" component={QuanLyNhietDo} />

    </Tab.Navigator>
  );
}
