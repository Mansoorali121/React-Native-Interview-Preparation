import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Baddcardbutton = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btntext}>{title}</Text>
    </View>
  );
};

export default Baddcardbutton;
const styles = StyleSheet.create({
  container: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    backgroundColor: '#FF7A45',
    height: vs(55),
    borderRadius: s(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: '#fff',
    fontSize: s(20),
    fontFamily: 'Outfit-Light',
    fontWeight: '600',
  },
});
