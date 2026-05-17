import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Myinput = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={require('../assets/search.png')} />
        <TextInput placeholder="Search..." style={styles.input} />
      </TouchableOpacity>
    </View>
  );
};

export default Myinput;

const styles = StyleSheet.create({
  container: { marginTop: vs(15) },
  button: {
    height: vs(60),
    backgroundColor: '#fafafa',
    // justifyContent: 'center',
    padding: s(5),
    borderRadius: s(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { height: vs(30), width: s(30), marginStart: s(10), tintColor:"gray" },
  input: { marginStart: s(10) },
});
