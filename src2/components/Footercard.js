import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Footercard = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.itemcontainer}>
        <Image source={require('../assets/burger.png')} style={styles.image} />
      </View>
      <View style={styles.footercontainer}>
        <Text style={styles.burgertext}>Burger</Text>
        <Image source={require('../assets/next.png')} style={styles.image2} />
      </View>
      <View style={styles.cartbutton}>
        <Image
          source={require('../assets/shopping-cart.png')}
          style={styles.image3}
        />
      </View>
    </View>
  );
};

export default Footercard;
const styles = StyleSheet.create({
  cont: {
    marginTop: vs(6),
    marginHorizontal: s(20),
    backgroundColor: '#c7e0ae',
    height: vs(165),
    width: s(165),
    borderRadius: s(20),
  },
  image: { height: vs(120), width: s(130) },
  itemcontainer: { alignItems: 'center' },
  image2: { height: vs(20), width: s(20), marginStart: s(6) },
  footercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: s(10),
    marginTop:vs(10),
  },
  burgertext: { fontSize: s(14), fontFamily: 'Outfit-Light' },
  image3: { height: vs(25), width: s(25), tintColor: '#fff' },
  cartbutton: {
    backgroundColor: '#000',
    width: s(50),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
    height:vs(50),
    borderColor:"#fff",
    borderWidth:s(2),
    position:"absolute",
    right:s(0),
    bottom:vs(0)
  },
});
