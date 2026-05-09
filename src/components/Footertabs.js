import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

// Tabs Array
const tabsArr = ["All","In Progress","Completed","Overdue"];

const Active_Bg="#75563B";
const Active_Text = "#FFFFF";

const Footertabs = () => {
  return (
    <View style={styles.container}>
      <Text>Footertabs</Text>
    </View>
  )
}

export default Footertabs;

const styles = StyleSheet.create({
    container:{backgroundColor:"#F5F5F5",
        borderRadius:s(12),

    },
})