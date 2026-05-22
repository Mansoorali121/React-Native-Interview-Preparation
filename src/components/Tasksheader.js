import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Backarrow from '../components/Backarrow';
import Addbutton from '../components/Addbutton';

const Tasksheader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headeritems}>
        <Backarrow />
      <Addbutton />
      </View>
    </View>
  );
};

export default Tasksheader;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headeritems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
