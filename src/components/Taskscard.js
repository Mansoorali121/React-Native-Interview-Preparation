import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Taskscard = () => {
  return (
    <View style={styles.cont}>
      <Text>Taskscard</Text>
    </View>
  );
};

export default Taskscard;

const styles = StyleSheet.create({
  cont: {
    width: '90%',
    height: vs(130),
    backgroundColor: '#fc569e',
    marginHorizontal: s(30),
    borderRadius: s(25),
  },
});
