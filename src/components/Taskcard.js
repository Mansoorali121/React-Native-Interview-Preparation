import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Taskcard = () => {
  return (
    <View style={styles.container}>
  <View style={{flexDirection:"row",gap:s
    (10)
  }}>
        <View style={styles.card}>
        <View style={{ marginHorizontal: s(10) }}>
          <Text style={styles.teamtext}>Team Meeting</Text>
          <Text style={styles.desc}>
            Group disucussion for the new product.
          </Text>
          <Text style={styles.time}>10:00 AM </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: s(6),
            }}
          >
            <Text style={[styles.time, { fontWeight: 'bold' }]}>Progress</Text>
            <Text style={[styles.time, { fontWeight: 'bold' }]}>48% </Text>
          </View>
        </View>
        <View
          style={styles.line}
        ></View>
      </View>
          <View style={[styles.card,{backgroundColor:"#de5959"}]}>
        <View style={{ marginHorizontal: s(10) }}>
          <Text style={styles.teamtext}>UI Design</Text>
          <Text style={styles.desc}>
            Make a homepage disucussion for the new product.
          </Text>
          <Text style={styles.time}>10:00 AM </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: s(6),
            }}
          >
            <Text style={[styles.time, { fontWeight: 'bold' }]}>Progress</Text>
            <Text style={[styles.time, { fontWeight: 'bold' }]}>48% </Text>
          </View>
        </View>
        <View
          style={styles.line}
        ></View>
      </View>
  </View>
    </View>
  );
};

export default Taskcard;

const styles = StyleSheet.create({
  container: { marginTop: s(10) },
  card: {
    backgroundColor: '#2c5da6',
    height: s(210),
    width: '65%',
    borderRadius: s(20),
  },
  teamtext: {
    fontSize: s(20),
    marginTop: s(10),
    color: '#fff',
    fontFamily: 'Outfit-Medium',
    marginBottom: s(10),
  },
  desc: {
    fontSize: s(14),
    color: '#fff',
    fontFamily: 'Outfit-Regular',
    marginBottom: s(10),
    opacity: 0.7,
  },
  time: {
    fontSize: s(15),
    color: '#fff',
    fontFamily: 'Outfit-Regular',
    marginBottom: s(10),
  },
  line:{
            backgroundColor: '#fff',
            height: s(10),
            width: '90%',
            borderRadius: s(20),
            alignSelf: 'center',
          }
});
