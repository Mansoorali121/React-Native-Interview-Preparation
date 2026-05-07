import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Header = () => {
  return (
    <View style={styles.cont}>
      <Image source={require('../assets/menu.png')} style={styles.image} />
      <Image source={require('../assets/active.png')} style={styles.image} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: { height: s(25), width: vs(25) },
  cont: { flexDirection: 'row', justifyContent: 'space-between' },
});
