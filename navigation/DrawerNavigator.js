import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen'; 
import ProfileScreen from '../components/ProfileScreen'; 
import SettingsScreen from '../components/SettingsScreen';

import SoNguyenTo from '../components/SoNguyenTo';
import KiemTraTamGiac from '../components/KiemTraTamGiac';
import SoBinhPhuong from '../components/SoBinhPhuong';
import QuanLyNhietDo from '../components/QuanLyNhietDo';
import StepCounter from '../components/BuocChan';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    
      <Drawer.Screen name="SoNguyenTo" component={SoNguyenTo} />
      <Drawer.Screen name="KiemTraTamGiac" component={KiemTraTamGiac} />
      <Drawer.Screen name="SoBinhPhuong" component={SoBinhPhuong} />
      <Drawer.Screen name="QuanLyNhietDo" component={QuanLyNhietDo} />
      <Drawer.Screen name="StepCounter" component={StepCounter} />
    </Drawer.Navigator>
  );
}
