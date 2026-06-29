import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import Burgertabs from '../components/Burgertabs';
import OrderTabs from "../components/OrderTabs";

const Items = () => {
  return (
    <View style={styles.cont}>
      {/* Top Image Section */}
      <View style={styles.view1}>
        <ImageBackground
          source={require('../assets/cover.png')}
          style={styles.image}
          resizeMode="cover"
        >
          {/* Header Icons */}
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require('../assets/left-arrow.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require('../assets/share.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Bottom White Section */}
      <View style={styles.view2}>
        {/* Second Half View */}
        <Burgertabs />
      </View>

      {/* Delievery Timings */}
      <View style={styles.delieveryitemscontainer}>
        <View style={styles.timingcontainer}>
          <Image
            source={require('../assets/star.png')}
            style={styles.imagestar}
          />
          <Text style={styles.text}>4.9</Text>
        </View>
        <View style={styles.timingcontainer}>
          <Image
            source={require('../assets/star.png')}
            style={styles.imagestar}
          />
          <Text style={styles.text}>20-30 min</Text>
        </View>{' '}
        <View style={styles.timingcontainer}>
          <Image
            source={require('../assets/star.png')}
            style={styles.imagestar}
          />
          <Text style={styles.text}>5.3k</Text>
        </View>
      </View>
      {/* Delievery Texts */}
      <View style={[styles.delieveryitemscontainer, { marginRight: s(20) }]}>
        <Text style={styles.text}>Review</Text>
        <Text style={styles.text}>Delievery Time</Text>
        <Text style={styles.text}>Min order</Text>
      </View>
      {/* Order Tabs */}
      <OrderTabs />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#fff',
  },

  view1: {
    flex: 0.38,
  },

  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },

  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: s(20),
    paddingTop: vs(29),
  },

  iconContainer: {
    width: s(42),
    height: s(42),
    borderRadius: s(20),
    backgroundColor: '#fff',

    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: s(20),
    height: s(20),
    tintColor: '#000',
  },

  view2: {
    marginTop: vs(-35),

    backgroundColor: '#fff',

    borderTopLeftRadius: s(35),
    borderTopRightRadius: s(35),
  },
  timingcontainer: { flexDirection: 'row', gap: s(5) },
  imagestar: { width: s(20), height: s(20) },
  delieveryitemscontainer: {
    flexDirection: 'row',
    marginHorizontal: s(40),
    justifyContent: 'space-between',
    marginTop: vs(10),
  },
  text:{fontSize:s(12),fontFamily:"Outfit-Regular"},
});
