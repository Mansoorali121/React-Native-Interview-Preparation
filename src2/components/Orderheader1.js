import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Orderheader1 = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.imagecontainer}>
        <Image source={require('../assets/burger.png')} style={styles.image} />
      </View>
      <View style={styles.burgertext}>
        <Text style={styles.text}>Burger Bang</Text>
      </View>
      <View style={styles.imagecontainer}>
        <Text style={styles.price}>$8.20</Text>
      </View>
    </View>
  );
};

export default Orderheader1;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: { height: vs(30), width: s(30) },
  imagecontainer: {
    backgroundColor: '#fff',
    height: vs(40),
    width: s(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(20),
  },
  burgertext: { marginRight: s(80) },
  text: { fontSize: s(16), fontFamily: 'Outfit-Regular' },
  price: { fontSize: s(13), fontFamily: 'Outfit-Regular' },
});
