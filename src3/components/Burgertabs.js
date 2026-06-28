import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Burgertabs = () => {
  return (
    <View style={styles.cont}>
      {/* Margin Horizontal */}
      <View style={styles.itemscontainer}>
        <View style={styles.circle}>
          <Image source={require('../assets/cover.png')} style={styles.image} />
        </View>
        <View style={{ marginStart: s(10) }}>
          <Text>The Burger Factory</Text>
          <Text>Main str 20/13</Text>
        </View>
        {/* Icons circles */}
        <View style={{ flexDirection: 'row', gap: s(5) }}>
          <View
            style={{ backgroundColor: 'black', height: vs(25), width: vs(25) }}
          ></View>
          <View
            style={{ backgroundColor: 'black', height: vs(25), width: vs(25) }}
          ></View>
        </View>
      </View>
    </View>
  );
};

export default Burgertabs;

const styles = StyleSheet.create({
  cont: { marginTop: vs(10) },
  circle: {
    backgroundColor: 'orange',
    width: s(80),
    height: vs(60),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: vs(40), width: s(40), borderRadius: s(10) },
  itemscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: s(20),
    justifyContent: 'space-between',
  },
});
