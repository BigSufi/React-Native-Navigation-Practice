import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import RootStackParamList from '../../navigations/type'
 
 
interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
  route: RouteProp<RootStackParamList, 'Home'>
}

const Home:React.FC<HomeScreenProps> = ({navigation, route}) => {
  let profile = 'Prop from Homescreen'
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20 }}>Home:{route.params?.homeName}</Text>
      <TouchableOpacity
        onPress={() =>navigation.navigate('Profile', {username: profile})}
        style={{ backgroundColor: 'yellow', paddingVertical: 10, paddingHorizontal: 30 }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})