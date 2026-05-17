import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import THeader from './src/components/THeader';
import Myinput from './src/components/Myinput';
import Status from './src/components/Status';

const App = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.container}>
        <THeader />
        <View style={styles.titlesscontainer}>
          <Text style={styles.title}>Good Morning, Rifat!</Text>
          <Text style={styles.description}>
            You have <Text style={styles.descpt}>49 tasks</Text> this month
          </Text>
        </View>
        <Myinput />
        <Status />
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
  titlesscontainer: { marginTop: vs(25) },
  title: { fontSize: s(15), fontFamily: 'Outfit-Thin', color: 'gray' },
  description: { fontSize: s(33), fontFamily: 'Outfit-Medium' },
  descpt: { color: '#5959e19f', fontWeight: 'bold' },
});
