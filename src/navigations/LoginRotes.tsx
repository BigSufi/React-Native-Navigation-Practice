import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { News, Profile } from '../screens'
import navigationStrings from '../Constants/navigationStrings'
import RootStackParamList from './type'

const Tab = createBottomTabNavigator<RootStackParamList>()

const LoginRotes = () => {
  return (

    <Tab.Navigator>
        <Tab.Screen name={navigationStrings.NEWS} component={News} />
        <Tab.Screen name={navigationStrings.PROFILE} component={Profile} />
    </Tab.Navigator>

  )
}

export default LoginRotes

const styles = StyleSheet.create({})