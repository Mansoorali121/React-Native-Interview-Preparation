import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Homedescription = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.description}>Get Your Favorite Dishes Delievered Fresh</Text>
    </View>
  )
}

export default Homedescription;

const styles = StyleSheet.create({
    cont:{marginTop:vs(20),marginHorizontal:s(20)},
    description:{fontSize:s(20),fontFamily:"Outfit-Medium"},
})