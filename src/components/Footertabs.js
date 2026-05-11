import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { s, vs } from 'react-native-size-matters';

// Tabs Array
const tabsArr = ["All","In Progress","Completed","Overdue"];

const Active_Bg="#75563B";
const Active_Text = "#FFFFF";

const Footertabs = () => {
  const [activetab,setActivetab] = useState("Completed");
  return (
    <View style={styles.container}>
      {
        tabsArr.map((tabName)=>{
          return <TouchableOpacity style={[styles.tabbutton,{}]}>
            <Text>{tabName}</Text>

          </TouchableOpacity>
        })
      }
    </View>
  )
}

export default Footertabs;

const styles = StyleSheet.create({
    container:{backgroundColor:"#F5F5F5",
        borderRadius:s(12),
        height:vs(48),
        flexDirection:"row",
        marginTop:s(10),
        alignItems:"center",
        padding:s(4)


    },
    tabbutton:{height:vs(32),
      flex:1,
      borderRadius:s(8),
      justifyContent:"center",
      alignItems:"center",

    },
})