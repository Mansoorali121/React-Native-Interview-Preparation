import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Backarrow from '../components/Backarrow';
import Addbutton from '../components/Addbutton';
import { s } from 'react-native-size-matters';
import Tasksheader from "../components/Tasksheader";
const Tasks = () => {
  return (
    <View style={styles.container}>
      <Tasksheader />
     
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', },
 
});
