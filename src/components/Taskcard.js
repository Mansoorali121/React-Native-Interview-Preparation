import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

const Taskcard = () => {
  return (
    <View style={styles.container}>
      <Text>Taskcard</Text>
    </View>
  )
}

export default Taskcard;

const styles = StyleSheet.create({
  container:{marginTop:s(20)},
})