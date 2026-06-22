import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Addbutton = ({text}) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.btntext}>{text}</Text>
    </View>
  );
};

export default Addbutton;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#FF5A00',
    marginHorizontal: s(20),
    paddingVertical: vs(15),
    alignItems: 'center',
    borderRadius: s(30),
  },
  btntext: { color: '#fff', fontSize: s(14), fontFamily: 'Outfit-Regular' },
});
