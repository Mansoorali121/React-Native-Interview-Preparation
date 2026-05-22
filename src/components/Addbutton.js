import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Addbutton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Image source={require('../assets/add.png')} style={styles.image} />
        <Text style={styles.btntext}> Add Task </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Addbutton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6089bb',
    width: s(140),
    height: s(50),
    borderRadius: s(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: s(24), width: s(24), tintColor: '#fff' },
  btntext: { color: '#fff', fontSize: s(16), marginLeft: s(5) },
});
