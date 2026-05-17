import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Status = () => {
  return (
    <View style={{ marginTop: s(50), marginHorizontal: s(17) }}>
      <View style={styles.circlescontainer}>
        <View style={styles.circle}>
          <Image
            source={require('../assets/to-do-list.png')}
            style={styles.image}
          />
        </View>
        <View
          style={[
            styles.circle,
            { backgroundColor: '#f1f4d8', borderColor: '#efe790' },
          ]}
        >
          <Image
            source={require('../assets/work-in-progress.png')}
            style={[styles.image]}
          />
        </View>{' '}
        <View
          style={[
            styles.circle,
            { backgroundColor: '#c4f3dc', borderColor: '#90e9b8' },
          ]}
        >
          <Image
            source={require('../assets/feature.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.textscontainer}>
        <Text style={styles.status}>To-Do</Text>
        <Text style={styles.status}>Progress</Text>
        <Text style={styles.status}>Done</Text>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  image: { height: vs(30), width: s(30) },
  circle: {
    height: vs(55),
    width: s(55),
    backgroundColor: '#fff4f1',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: s(27.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circlescontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  textscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: s(10),
    marginHorizontal: s(6),
  },
  status: { fontSize: s(13), fontFamily: 'Outfit-Regular' },
});
