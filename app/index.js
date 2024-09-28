import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from '../navigation/StackNavigator'
import TabNavigator from '../navigation/TabNavigator'
import DrawerNavigator from '../navigation/DrawerNavigator'


const index = () => {
  return (
      <DrawerNavigator></DrawerNavigator>
  )
}

export default index