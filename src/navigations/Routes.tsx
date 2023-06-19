import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStackParamList from '../navigations/type'
import { Home, Profile, Explore } from '../screens';
import navigationStrings from '../Constants/navigationStrings';


const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={navigationStrings.HOME} screenOptions={{headerShown: false}}>
            <Stack.Screen name={navigationStrings.HOME}    component={Home}    />
            <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
            <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})