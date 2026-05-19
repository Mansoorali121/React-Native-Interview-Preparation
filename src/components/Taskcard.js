import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

const Taskcard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Team Meeting</Text>
        <Text>Group disucussion for the new product.</Text>
        <Text>10:00 AM </Text>
        <View>
          <Text>Progress</Text>
        </View>
      </View>
    </View>
  )
}

export default Taskcard;

const styles = StyleSheet.create({
  container:{marginTop:s(10) },
  card:{backgroundColor:"#88b4f5", height:s(200),width:"65%",borderRadius:s(20)},
})