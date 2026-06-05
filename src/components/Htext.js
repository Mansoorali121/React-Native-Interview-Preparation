import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Htext = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertitle}>Find The<Text style={{color:"#FF7A45"}}> Best Food </Text> Around You</Text>
    </View>
  )
}

export default Htext;
const styles = StyleSheet.create({
    container:{marginTop:vs(20),marginHorizontal:s(20)},
    headertitle:{fontSize:s
        (36),
        fontFamily:"Outfit-ExtraLight",
        fontWeight:"bold",

        
    },
})