import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import RootStackParamList from '../../navigations/type'

interface ProfileProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>
  route: RouteProp<RootStackParamList, 'Profile'>
}

const Profile:React.FC<ProfileProps> = ({navigation, route}) => {

  const username = route.params.username
  // console.log(route.params.username)
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
      <Text style={{fontSize:20}}>Profile :{username} </Text>

      <TouchableOpacity
        onPress={()=>navigation.navigate('Explore', {explorename:username})}
        style={{ backgroundColor: 'red', paddingVertical: 10, borderRadius:150, paddingHorizontal: 30 }}>
        
        <Text style={{color:'white', fontWeight:'700'}}>Go to Explore</Text>
      </TouchableOpacity>

    
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})