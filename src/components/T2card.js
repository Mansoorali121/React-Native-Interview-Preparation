import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import colors from "../style/colors";

const T2card = () => {
  return (
    <View style={styles.cont}>
      <Text>T2card</Text>
    </View>
  )
}

export default T2card;

const styles = StyleSheet.create({
  cont:{marginTop:s(30),
    height:vs
    (200),
    widhth:s
    (20),
    backgroundColor:colors.gradientEnd

  },
})