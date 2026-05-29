import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import colors from '../style/colors';

const T2card = () => {
  const cardData = [
    {
      id: '1',
      name: 'Project B',
      course: 'Front End Development',
      date: 'September   2020',
    },
    {
      id: '2',
      name: 'Project C',
      course: 'Graphic Design',
      date: 'October 2020',
    },
  ];
  return (
   <FlatList
   data={cardData}
   horizontal
  showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={() => <View style={{ width: s(15) }} />}

   keyExtractor={(item) => item.id}
   renderItem={({item})=>{
    return (
      <View style={styles.cont}>
      <View style={{ marginHorizontal: s(20) }}>
        <View style={styles.cardheader}>
          <View style={styles.circle}>
            <Image
              source={require('../assets/people.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.projecttext}>{item.name}</Text>
        </View>
        <View style={styles.footertext}>
          <Text style={styles.developmenttext}>{item.course} </Text>
          <Text style={styles.datetext}>{item.date}</Text>
        </View>
      </View>
    </View>
    )
   }}
   />
  );
};
 

export default T2card;

const styles = StyleSheet.create({
  cont: {
    marginTop: s(20),
    height: vs(190),
    width: s(190),
    borderRadius: s(24),

    backgroundColor: colors.gradientStart,
  },
  cardheader: {
    marginTop: s(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: { backgroundColor: '#271a1a25', padding: s(10), borderRadius: s(14) },
  img: { height: s(15), width: vs(15), tintColor: '#fff' },
  projecttext: { fontSize: s(13), color: '#fff', fontFamily: 'Outfit-Medium' },
  footertext: { marginTop: s(30), gap: s(50) },
  developmenttext: {
    marginHorizontal: s(25),
    fontSize: s(14),
    color: '#fff',
    fontFamily: 'Outfit-Bold',
  },
  datetext: {
    marginHorizontal: s(25),
    fontSize: s(12),
    color: '#fff',
    fontFamily: 'Outfit-Thin',
  },
});
