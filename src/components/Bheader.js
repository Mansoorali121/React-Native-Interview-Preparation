import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Bheader = () => {
  return (
    <View style={styles.container}>
        <Image  source={require("../assets/burger/back.png")}
         style={styles.image}
        /> 
        <Image  source={require("../assets/burger/heart.png")}
         style={styles.image}
        /> 
    </View>
  )
}

export default Bheader;

const styles = StyleSheet.create({
    container:{marginTop:vs(15),marginHorizontal:s(20), flexDirection:"row", justifyContent:"space-between"},
    image:{height:vs(25),width:s(25), tintColor:"#fff"},
})