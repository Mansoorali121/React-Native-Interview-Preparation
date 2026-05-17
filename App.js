import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import THeader from './src/components/THeader';


const App = () => {
  return (
    <View style={{ backgroundColor: '#fff',
    flex:1}}>
      <View style={styles.container}>
      <THeader />
   
    </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: s(20),
    marginHorizontal: vs(20),
   
  },
});
