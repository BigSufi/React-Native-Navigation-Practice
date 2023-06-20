import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Close1 from '../assets/images/svg/Close1.svg'
import LeftArrow from '..//assets/images/svg/LeftArrow.svg'

interface HeaderCompProps {
  gobackFun: () => void;
  closeFun: () => void;
}

const HeaderComp: React.FC<HeaderCompProps> = ({gobackFun=()=>{}, closeFun=()=>{}}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >

      <TouchableOpacity onPress={() => gobackFun()}>
        <LeftArrow width={30} height={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => closeFun()}>
        <Close1 width={20} height={20} />
      </TouchableOpacity>

    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({})