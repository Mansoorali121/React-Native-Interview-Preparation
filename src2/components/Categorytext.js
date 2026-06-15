import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Categorytext = () => {
  return (
    <View style={styles.cont}>
           <View style={styles.categorytext}> 
                  <Text style={styles.text1}>Popular Food</Text>
                  <Text style={styles.text2}>See All</Text>
                </View>
    </View>
  )
}

export default Categorytext;

const styles = StyleSheet.create({
      categorytext:{flexDirection:"row", justifyContent:"space-between"},
      text1:{fontSize:s(15),fontFamily:"Outfit-SemiBold"},
      text2:{color:"gray",fontFamily:"Outfit-Light"},
      cont:{marginTop:vs(15),marginHorizontal:s(20)},
})