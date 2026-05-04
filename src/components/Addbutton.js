import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../style/colors';

const Addbutton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../assets/add.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Addbutton;

const styles = StyleSheet.create({
  image: { height: 20, width: 20 },
  container: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: colors.mainCOlor,
    zIndex: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
