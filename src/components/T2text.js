import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const T2text = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainheader}>Hello, John!</Text>
      <Text style={styles.subheader}>Have a nice day</Text>
    </View>
  );
};

export default T2text;

const styles = StyleSheet.create({
  container: { marginTop: s(30) },
  mainheader: { fontSize: s(30), fontFamily: 'Outfit-Medium', fontweight:'bold' },
  subheader: { fontSize: s(12), fontFamily: 'Outfit-Regular' },
});
