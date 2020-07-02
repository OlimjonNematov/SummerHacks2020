import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { COLORS } from '../../styles'

import { StyleSheet } from 'react-native'

export default function Loader () {
  return (
    <View style={loaderStyles.container}>
      <ActivityIndicator animating color={COLORS.PRIMARY} size="small"/>
    </View>
  )
}

const loaderStyles = StyleSheet.create({
  container: {
    position: 'absolute',

    top: 0,
    left: 0,

    height: '100%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center'
  }
})
