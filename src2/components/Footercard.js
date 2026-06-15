import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Footercard = () => {
  const data = [
    {
      id: '1',
      title: 'Burger',
      image: require('../assets/burger.png'),
    },
    {
      id: '2',
      title: 'Pizza',
      image: require('../assets/pizza.png'),
    },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View style={[styles.cont, item.id ==="2" && {backgroundColor:"#acc9db"}]}>
            <View style={styles.itemcontainer}>
             <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.footercontainer}>
              <Text style={styles.burgertext}>{item.title}</Text>
              <Image
                source={require('../assets/next.png')}
                style={styles.image2}
              />
            </View>
            <View style={styles.cartbutton}>
              <Image
                source={require('../assets/shopping-cart.png')}
                style={styles.image3}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default Footercard;
const styles = StyleSheet.create({
  cont: {
    marginTop: vs(6),
    marginHorizontal: s(10),
    backgroundColor: '#c7e0ae',
    height: vs(165),
    width: s(165),
    borderRadius: s(20),
  },
  image: { height: vs(120), width: s(130), resizeMode:"contain" },
  itemcontainer: { alignItems: 'center' },
  image2: { height: vs(20), width: s(20), marginStart: s(10) },
  footercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: s(10),
    marginTop: vs(10),
  },
  burgertext: {
    fontSize: s(14),
    fontFamily: 'Outfit-Light',
    fontWeight: 'bold',
  },
  image3: { height: vs(25), width: s(25), tintColor: '#fff' },
  cartbutton: {
    backgroundColor: '#000',
    width: s(50),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
    height: vs(50),
    borderColor: '#fff',
    borderWidth: s(2),
    position: 'absolute',
    right: s(0),
    bottom: vs(0),
  },
});
