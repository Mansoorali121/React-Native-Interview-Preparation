import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Theader = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.imagecontainer}>
        <Image
          source={require('../assets/left-arrow.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.ordertext}>Details</Text>
      </View>
      <View style={styles.imagecontainer}>
        <Image source={require('../assets/share.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default Theader;

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
    backgroundColor: '#c7e0ae',
    height: vs(50),
    width: s(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(25),
    borderWidth: s(0.7),
    borderColor:"#fff"
  },
  ordertext: { fontSize: s(16), fontFamily: 'Outfit-Regular' },
});
