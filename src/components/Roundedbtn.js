import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters';

const Roundedbtn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} >
        <Image source={require("../assets/add.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

export default Roundedbtn;

const styles = StyleSheet.create({
    container:{marginTop:vs(20)},
    btn:{height:vs
        (55),
        backgroundColor:"#0000",
        width:vs(55),
        borderRadius:vs(27),
        position:"absolute",
        right:vs
        (130),
        top:vs
        (40),
        borderWidth:s
        (0.2),
        borderColor:"blue",
    },
    image:{height:vs(30),width:vs(30),alignSelf:"center",justifyContent:"center",marginVertical:vs
        (13), tintColor:"blue"
    },
})