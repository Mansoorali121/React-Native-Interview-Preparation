import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { HORIZONTAL } from 'react-native/types_generated/Libraries/Components/ScrollView/ScrollViewContext';

const Footercards = () => {
  const data = [
    {
      id: '1',
      image: require('../assets/pizza.png'),

      title: 'Smoky Blaze Burger',
      review: '★ 4.8 (205 Review)',
      price: '$5.40',
    },
    {
      id: '2',
      image: require('../assets/Burgerrr.jpg'),

      title: 'Cheese Melt Deluxe',
      review: '★ 4.8 (205 Review)',
      price: '$10.00',
    },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.cont}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <Text style={styles.smokyburger}>{item.title}</Text>
            <Text style={styles.review}>{item.review}</Text>
            <View style={styles.footeritems}>
              <Text style={styles.review}>{item.price}</Text>
              <Image
                source={require('../assets/add.png')}
                style={styles.plusimage}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default Footercards;

const styles = StyleSheet.create({
  cont: {marginStart:s(2)} ,
  image: { height: vs(150), width: s(150), borderRadius: s(20) },
  smokyburger: { fontSize: s(14), fontFamily: 'Outfit-Regular' },
  review: { fontSize: s(11), fontFamily: 'Outfit-Regular' },
  plusimage: { height: vs(30), width: s(30) },
  footeritems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(80),
  },
});
