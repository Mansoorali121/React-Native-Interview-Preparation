import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Categorytab = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.imagecontainer}>
        <Image source={require('../assets/burger.png')} style={styles.image} />
      </View>
      <View style={styles.burgertext}>
        <Text >Burger</Text>
      </View>
    </View>
  );
};

export default Categorytab;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(40),
    marginHorizontal: s(20),
    backgroundColor: '#c7e0ae',
    paddingVertical: vs(2),
    width: s(150),
    borderRadius: s(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: { height: vs(30), width: s(30) },
  burgertext: { marginHorizontal: s(20) },
  imagecontainer: {
    backgroundColor: '#fff',
    marginHorizontal: s(4),
   
    borderRadius:s(20),
    height:vs(60),
    width:s(60),
    alignItems:"center",
    justifyContent:"center"
  },
});
