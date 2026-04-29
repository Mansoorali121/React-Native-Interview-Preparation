import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third party APIS  </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', marginTop: 30 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'Arial',
  },
});
