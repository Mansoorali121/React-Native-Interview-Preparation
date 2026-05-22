import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Backarrow = () => {
  return (
    <TouchableOpacity style={styles.cont}>
      <Image source={require('../assets/left.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Backarrow;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#f0f0f0',
    height: s(50),
    width: s(50),
    borderRadius: s(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { height: s(24), width: s(24) },
});
