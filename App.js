import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Header from './src/components/Header';
import Subheader from './src/components/subheader';
import ScheduleCard from './src/components/ScheduleCard';
import Footertabs from './src/components/Footertabs';
import Footerlist from './src/components/Footerlist';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Subheader />
      <ScheduleCard />
      <View style={styles.titles}>
        <Text style={styles.tastsktext}>My Tasks </Text>
        <Text style={styles.viewalltext}>View All </Text>
      </View>
      <Footertabs />
      {/* <Footerlist /> */}
            <Footerlist />

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { marginTop: s(20), marginHorizontal: vs(20) },
  titles: {
    marginTop: s(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tastsktext: { fontSize: s(18), fontFamily: 'Outfit-Medium' },
  viewalltext: { fontSize: s(18), fontFamily: 'Outfit-Medium', color: 'blue' },
});
