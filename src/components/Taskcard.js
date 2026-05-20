import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Taskcard = () => {
  const data = [
    {
      id:"1",
      title: 'Team Meeting',
      desc: 'Group disucussion for the new product.',
      time: '10:00 AM ',
      progress: '48%',
    },
    {
      id:"2",
      title: 'UI Design',
      desc: 'Make a homepage disucussion for the new product.',
      time: '10:00 AM ',
      progress: '48%',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{marginRight:s(15)}}>
              <View style={[styles.card , item.id === "2" && {backgroundColor:"#ec4bbbdc"}]}>
              <View style={{ marginHorizontal: s(10) }}>
                <Text style={styles.teamtext}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.time}>{item.time}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: s(6),
                  }}
                >
                  <Text style={[styles.time, { fontWeight: 'bold' }]}>
                    Progress
                  </Text>
                  <Text style={[styles.time, { fontWeight: 'bold' }]}>
                    {item.progress}
                  </Text>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
              </View>
          );
        }}
      />
    </View>
  );
};

export default Taskcard;

const styles = StyleSheet.create({
  container: { marginTop: s(10) },
  card: {
    backgroundColor: '#2c5da6',
    height: s(220),
    width: s(220),
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
  line: {
    backgroundColor: '#fff',
    height: s(10),
    width: '90%',
    borderRadius: s(20),
    alignSelf: 'center',
  },
});
