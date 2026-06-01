import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters';

const Roundedbtn = () => {
  return (
    <View style={styles.container}>
      <Text>Roundedbtn</Text>
    </View>
  )
}

export default Roundedbtn;

const styles = StyleSheet.create({
    container:{marginTop:vs(20)},
})