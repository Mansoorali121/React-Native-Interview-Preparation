import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import T3header from '../components/T3header';
import { s } from 'react-native-size-matters';
import T3text from '../components/T3text';
import T4text from '../components/T4text';
import Categorycard from '../components/Categorycard';
import NewTaskbutton from '../components/NewTaskbutton';
const Tasks3 = () => {
  return (
    <View style={styles.cont}>
      <T3header />
      <T3text title={'New Task'} />
      <View style={{ gap: s(2) }}>
        <T4text title="Title" description="UI Design" />
        <T4text title="Date" description="Tuesday, 22 Sep 2025" />
        <T4text title="Time" description="Start 1:00 PM , 22 Aug 2026" />
        <T4text
          title="Discription"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      </View>
      <Categorycard />
      <NewTaskbutton />
    </View>
  );
};

export default Tasks3;

const styles = StyleSheet.create({
  cont: { marginHorizontal: s(10), backgroundColor: '#fff' },
});
