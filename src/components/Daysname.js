import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Daysname = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dayscontainer}>
        <Text style={styles.day}> Mon </Text>
        <Text style={styles.day}> Tue </Text>
        <Text style={styles.day}> Wed </Text>
        <Text style={styles.day}> Thu </Text>
        <Text style={styles.day}> Fri </Text>
        <Text style={styles.day}> Sat </Text>
        <Text style={styles.day}> Sun </Text>
      </View>
      <View style={styles.datecontainer}>
        <Text style={styles.date}>11</Text>
        <Text style={styles.date}>12</Text>
        <Text style={styles.date}>13</Text>
        <Text style={styles.date}>14</Text>
        <Text style={styles.date}>15</Text>
        <Text style={styles.date}>16</Text>
        <Text style={styles.date}>17</Text>
      </View>
    </View>
  );
};

export default Daysname;

const styles = StyleSheet.create({
  container: { marginTop: s(15) },
  dayscontainer: { flexDirection: 'row', justifyContent: 'space-around' },
  day: { fontSize: s(15), fontFamily: 'Outfit-Light' },
  date: { fontSize: s(13), fontFamily: 'Outfit-Light' },
  datecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(10),
    color: 'gray',
  },
});
