import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../style/colors';

const Maininput = ({options}) => {
  return (
    <View style={styles.cont}>
      <TextInput placeholder='Enter Name: ' style={styles.input} {...options} />
    </View>
  )
}

export default Maininput;

const styles = StyleSheet.create({
    cont:{height:48,borderRadius:8,
        width:"100%",
        backgroundColor:colors.lightGray,
        justifyContent:"center",
        marginBottom:8
    },
    input:{padding:5,
            fontSize:16,
            marginHorizontal:5,
            color:"#9b9b9b",

    },
})