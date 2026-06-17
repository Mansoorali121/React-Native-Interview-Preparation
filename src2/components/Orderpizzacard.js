import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Orderheader1 from './Orderheader1';
import Cfootercard from './Cfootercard';

const Orderpizzacard = () => {
  
  return (
    <View style={styles.cont}>
      <Orderheader1 />
      <View style={styles.container}>
        <Image source={require('../assets/pizza.png')} style={styles.image} />
      </View>
      <Cfootercard />
    </View>
  );
};

export default Orderpizzacard;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#afe1ff',
    height: vs(280),
    width: s(310),
    marginHorizontal: s(20),
    marginTop: vs(15),
    borderRadius: s(20),
  },
  image: { height: vs(150), width: s(150), resizeMode:"contain" },
  container: { alignItems: 'center' },
});
