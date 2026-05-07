import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Header from './src/components/Header';
import Subheader from './src/components/subheader';
import ScheduleCard from './src/components/ScheduleCard';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Subheader />
      <ScheduleCard />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { marginTop: s(20), marginHorizontal: vs(20) },
});
