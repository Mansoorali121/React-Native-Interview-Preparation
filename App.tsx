import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Check Mobile App </Text>
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  container:{marginTop:50,alignItems:"center"},
  title:{fontSize:20,fontWeight:"bold"},
})