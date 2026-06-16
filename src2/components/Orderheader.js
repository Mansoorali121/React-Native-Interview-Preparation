import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Orderheader = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.imagecontainer}>
        <Image
          source={require('../assets/left-arrow.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.ordertext}>Orders</Text>
      </View>
      <View style={styles.imagecontainer}>
        <Image source={require('../assets/dots.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default Orderheader;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: { height: vs(15), width: s(15) },
  imagecontainer: {
    backgroundColor: '#fff',
    height: vs(50),
    width: s(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(25),
    borderWidth: s(0.3),
  },
  ordertext: { fontSize: s(16), fontFamily: 'Outfit-Regular' },
});
