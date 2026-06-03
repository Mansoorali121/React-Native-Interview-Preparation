import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';


const NewTaskbutton = () => {
  return (
    <View style={styles.cont}>
        <TouchableOpacity style={styles.button}>
                  <Text style={styles.btntext}>Create New Task</Text>

        </TouchableOpacity>
    </View>
  )
}

export default NewTaskbutton;

const styles = StyleSheet.create({
    cont:{marginTop:vs
        (30),
        marginHorizontal:s
        (20)
    },
    button:{backgroundColor:"#3F51F7",paddingVertical:vs
        (17),borderRadius:s
        (19),
        alignItems:"center",
        justifyContent:"center",
        width:s
        (280)
    },
    btntext:{color:"#ffffff", fontFamily:"Outfit-Medium",fontSize:s
        (14)
    },
})