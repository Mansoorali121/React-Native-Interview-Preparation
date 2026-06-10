import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Cpromo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <View style={styles.cardcontainer}>
          <Image
            source={require('../assets/burger/discount.png')}
            style={styles.image}
          />
          <Text style={styles.promotext}>Promo Code</Text>
        </View>
        <View style={styles.applybutton}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cpromo;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(15),
    marginHorizontal: s(20),
    backgroundColor: '#fafafa',
    height: vs(60),
    borderRadius: s(20),
  },
  image: { height: vs(30), width: s(30) },
  promotext: {
    fontSize: s(14),
    fontFamily: 'Outfit-Medium',
    marginStart: s(5),
  },
  cardcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: s(10),
    marginTop: s(16),
  },
  applybutton: { marginTop: s(16) },
  itemcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: s(20),
  },
  btn: {
    backgroundColor: '#FF7A45',
    paddingVertical: s(5),
    paddingHorizontal: s(20),
    borderRadius: s(15),
  },
  btntext:{   fontSize: s(14),
    fontFamily: 'Outfit-Medium',
    color:"#ffff"}
});
