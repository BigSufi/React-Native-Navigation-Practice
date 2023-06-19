import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import RootStackParamList from '../../navigations/type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'

interface ExploreProps{
  navigation: NativeStackNavigationProp<RootStackParamList, 'Explore'>
  route: RouteProp<RootStackParamList, 'Explore'>
}


const Explore:React.FC<ExploreProps> = ({route, navigation}) => {

  const username = route.params.explorename

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
      <Text style={{fontSize:20}}>Explore: {username}</Text>

      <TouchableOpacity
        onPress={()=>navigation.navigate('Home', {homeName:username})}
        style={{ backgroundColor: 'red', paddingVertical: 10, borderRadius:150, paddingHorizontal: 30 }}>
        
        <Text style={{color:'white', fontWeight:'700'}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({})