import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const T4text = ({ title, description }) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default T4text;

const styles = StyleSheet.create({
  line: {
    backgroundColor: 'blue',
    height: vs(1),
    marginTop: vs(7),
    opacity: 0.2,
  },
  cont: { marginHorizontal: s(20), marginTop: vs(15), gap: vs(5) },
  title: { fontSize: s(15), color: 'gray', fontFamily: 'Outfit-Regular' },
  description: { fontSize: s(16), fontFamily: 'Outfit-Medium' },
});
