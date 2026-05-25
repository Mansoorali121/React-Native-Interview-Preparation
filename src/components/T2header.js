import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import colors from '../style/colors';

const T2header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle}>
        <Image source={require('../assets/menu.png')} style={styles.menu} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circle}>
        <Image source={require('../assets/profile.png')} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default T2header;

const styles = StyleSheet.create({
  circle: {
    width: s(50),
    height: vs(50),
    borderRadius: s(25),
    backgroundColor: colors.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: s(24),
    height: vs(24),
  },
  logo: {
    width: s(50),
    height: vs(50),
  },
  container: { flexDirection: 'row', justifyContent: 'space-between', marginTop:vs
    (15)
   },
});
