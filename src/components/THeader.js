import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const THeader = () => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.menubutton}>
        <Image
          source={require('../assets/menu.png')}
          style={styles.menuimage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menubutton, { backgroundColor: 'yellow' }]}
      >
        <Image
          source={require('../assets/profile.png')}
          style={[styles.menuimage, { height: vs(30), width: s(30) }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default THeader;

const styles = StyleSheet.create({
  menuimage: { height: vs(30), width: s(30) },
  menubutton: {
    height: vs(45),
    width: s(40),
    backgroundColor: '#edf8ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(20),
  },
  cont: { flexDirection: 'row', justifyContent: 'space-between' },
});
