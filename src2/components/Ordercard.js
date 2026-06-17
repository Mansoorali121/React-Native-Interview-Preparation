import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Ordercard = () => {
  return (
    <View style={styles.cont}>
      <Text>Ordercard</Text>
    </View>
  );
};

export default Ordercard;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#c7e0ae',
    height: vs(151),
    width: s(150),
    marginHorizontal: s(20),
    marginTop: vs(15),
  },
});
