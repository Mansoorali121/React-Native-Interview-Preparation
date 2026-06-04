import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const BAddbutton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}> - </Text>
        <Text style={styles.btntext}>1 </Text>
        <Text style={styles.btntext}>+ </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BAddbutton;

const styles = StyleSheet.create({
  container: { marginTop: vs(120), alignItems: 'center' },
  btn: { flexDirection: 'row', backgroundColor:"#FF7A45", borderRadius:s(30), width:s
    (80),
    paddingVertical:vs
    (3),
    alignItems:"center",
    justifyContent:"center"
   },
  btntext:{fontSize:s(20),fontFamoly:"Outfit-Medium", color:"#fff"

  },
});
