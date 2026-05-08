import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Scheduleicon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <TouchableOpacity style={styles.circle}>
          <Image source={require('../assets/notes.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: '#35925f' }]}
        >
          <Image
            source={require('../assets/check.png')}
            style={[styles.image, { tintColor: '#fff' }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: 'orange' }]}
        >
          <Image source={require('../assets/clock.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: '#c4573c' }]}
        >
          <Image
            source={require('../assets/notes.png')}
            style={[styles.image, { tintColor: '#fff' }]}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: s(4), marginTop: vs(5) }}>
        <View style={styles.numericcontainer}>
          <Text style={styles.num}>12</Text>
          <Text style={styles.num}>6</Text>

          <Text style={styles.num}>4</Text>
          <Text style={styles.num}>2</Text>
        </View>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.taskstext}>Tasks</Text>
        <Text style={styles.taskstext}>Completed</Text>
        <Text style={styles.taskstext}>In Progress</Text>
        <Text style={styles.taskstext}>Overdue</Text>
      </View>
       <View style={styles.subtextcontainer}>
        <Text style={styles.subtaskstext}>All Tasks</Text>
        <Text style={styles.subtaskstext}>This Week</Text>
        <Text style={styles.subtaskstext}>Ongoing</Text>
        <Text style={styles.subtaskstext}>Tasks</Text>
      </View>
     
    </View>
  );
};

export default Scheduleicon;

const styles = StyleSheet.create({
  container: { marginHorizontal: vs(12), marginTop: s(12), gap:s(4) },
  image: { height: vs(18), width: s(18) },
  circle: {
    backgroundColor: '#ade0ff',
    height: vs(27),
    width: s(27),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(9),
  },
  itemcontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  numericcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:s(10),
  },
  num: { fontSize: s(26), fontWeight: 'bold' },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginStart: s(6),
    marginBottom:s(12)
  },
  taskstext: { fontSize: s(14) },
  subtextcontainer:{  flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginStart: s(6),
   },
   subtaskstext:{fontFamily:"Outfit-Light",fontSize:s(10)},
});
