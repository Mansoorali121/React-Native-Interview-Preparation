import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import T3header from '../components/T3header';
import { s } from 'react-native-size-matters';
import T3text from "../components/T3text";

const Tasks3 = () => {
  return (
    <View style={styles.cont}>
      <T3header />
      <T3text  title={"New Task"}
       />
    </View>
  );
};

export default Tasks3;

const styles = StyleSheet.create({
  cont: { marginHorizontal: s(10), backgroundColor: '#fff' },
});
