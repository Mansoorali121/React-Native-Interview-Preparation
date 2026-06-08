import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Hfootertabs = () => {
  const data = [
    {
      id: '1',
      icon: require('../assets/burger/heart.png'),
      image: require('../assets/burger/roasted.png'),
      title: 'Roasted Chicken',
      time: '20min',
      rating: '⭐4.5',
      price: '$12.00',
    },
    {
      id: '2',
      icon: require('../assets/burger/heart.png'),
      image: require('../assets/burger/roasted.png'),
      title: 'Roasted Chicken',
      time: '20min',
      rating: '⭐4.5',
      price: '$12.00',
    },
    {
      id: '3',
      icon: require('../assets/burger/heart.png'),
      image: require('../assets/burger/roasted.png'),
      title: 'Roasted Chicken',
      time: '20min',
      rating: '⭐4.5',
      price: '$12.00',
    },
    {
      id: '4',
      icon: require('../assets/burger/heart.png'),
      image: require('../assets/burger/roasted.png'),
      title: 'Roasted Chicken',
      time: '20min',
      rating: '⭐4.5',
      price: '$12.00',
    },
  ];

  return (
    <FlatList
    numColumns={2}
    showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.hearticon}>
              <Image source={item.icon} style={styles.image} />
            </View>
            <View style={styles.roatedimage}>
              <Image source={item.image} style={styles.image2} />
            </View>
            <View style={styles.chickentext}>
              <Text style={styles.titletext}>{item.title}</Text>
            </View>
            <View style={styles.timecontainer}>
              <Text style={styles.text}>{item.time}</Text>
              <Text style={styles.text}>{item.rating}</Text>
            </View>
            <View style={styles.cont}>
              <Text style={styles.text}>{item.price}</Text>
            </View>
            <View style={styles.plusbutton}>
              <Image
                source={require('../assets/burger/add.png')}
                style={styles.imageplus}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default Hfootertabs;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(15),
    marginHorizontal: s(12),
    backgroundColor: '#eee',
    height: vs(230),
    width: s(150),
    borderRadius: s(14),
  },
  hearticon: { left: s(120), top: vs(10) },
  image: { height: vs(17), width: s(17) },
  image2: { height: vs(140), width: s(140) },
  roatedimage: { marginTop: s(-20) },
  chickentext: { marginHorizontal: s(20) },
  timecontainer: {
    flexDirection: 'row',
    marginHorizontal: s(20),
    justifyContent: 'space-between',
  },
  text: { fontSize: s(13), fontFamily: 'Outfit-Regular' },
  cont: { marginHorizontal: s(20), marginTop: s(20) },
  titletext: {
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: s(14),
  },
  imageplus: {
    height: vs(20),
    width: s(20),
    tintColor: '#fff',
  },
  plusbutton: {
    backgroundColor: '#FF7A45',
    height: vs(35),
    width: s(35),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: s(0),
    bottom: vs(2),

    borderTopLeftRadius: s(12),
    borderBottomRightRadius: s(14),
  },
});
