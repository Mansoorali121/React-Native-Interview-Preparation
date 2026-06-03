import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Categorycard = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.category}>Category</Text>
      <View style={styles.itemcontainer}>
        <Text style={styles.market}>Marketing</Text>
        <Text style={styles.market}>Meeting</Text>
        <Text style={styles.market}>Dev</Text>
      </View>
      <View style={styles.itemcontainer}>
        <Text style={styles.market}>Mobile</Text>
        <Text
          style={[
            styles.market,
            { backgroundColor: '#d8b8d5', color: '#240d2b' },
          ]}
        >
          UI Design
        </Text>
        <Text style={styles.market}>HTML</Text>
      </View>
      <View style={styles.itemcontainer}>
        <Text style={[styles.market, { width: s(130) }]}>Graphic Design</Text>
        <Text style={[styles.market, { width: s(110) }]}>Android App</Text>
      </View>
      <View style={styles.itemcontainer}>
        <Text style={styles.market}>IOS App</Text>
        <Text style={styles.market}>Magento</Text>
        <Text style={styles.market}>SEO</Text>
      </View>
    </View>
  );
};

export default Categorycard;

const styles = StyleSheet.create({
  cont: { marginHorizontal: s(20), marginTop: s(15) },
  category: { fontSize: s(14), color: 'gray', fontFamily: 'Outfit-Regular' },
  market: {
    backgroundColor: '#deedf6',
    paddingHorizontal: s(12),
    paddingVertical: s(12),
    borderRadius: s(16),
    width: s(90),
    textAlign: 'center',
    fontFamily: 'Outfit-Light',
    fontWeight: 'semibold',
  },
  itemcontainer: {
    marginTop: vs(7),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
