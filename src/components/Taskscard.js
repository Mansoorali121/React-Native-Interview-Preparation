import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Taskscard = () => {
  return (
    <View style={styles.cont}>
      <View style={{ marginHorizontal: s(20) }}>
        <View style={styles.card}>
          <Text style={styles.cardtitle}>Wirefarming </Text>
          <Text style={styles.cardtitle}>12:00 PM</Text>
        </View>
        <Text style={styles.cardescrip}>
          {' '}
          Make some ideation from sketch and wireframes
        </Text>
      </View>
    </View>
  );
};

export default Taskscard;

const styles = StyleSheet.create({
  cont: {
    marginTop: s(10),
    width: '90%',
    height: vs(130),
    backgroundColor: '#fc569e',
    marginHorizontal: s(30),
    borderRadius: s(20),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: s(20),
  },
  cardtitle: {
    fontSize: s(16),
    fontWeight: '350',
    color: '#fff',
  },
  cardescrip: {
    fontSize: s(15),
    fontWeight: '300',
    color: '#ffffffba',
    marginTop:s
    (10)
  },
});
