import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Items = () => {
  return (
    <View style={styles.cont}>
      <View>
        <Image source={require("../assets/Burgerr.jpg")} />
      </View>
    </View>
  )
}

export default Items;

const styles = StyleSheet.create({
  cont:{},
})