import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import Burgertabs from '../components/Burgertabs';
import OrderTabs from '../components/OrderTabs';
import Footercards from '../components/Footercards';

// Get exact screen dimensions for responsiveness
const { height } = Dimensions.get('window');

const Items = () => {
  return (
    <ScrollView style={styles.cont} showsVerticalScrollIndicator={false}>
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

      {/* Overlapping White Section */}
      <View style={styles.view2}>
        <Burgertabs />
      </View>

      {/* Delivery Timings */}
      <View style={styles.deliveryItemsContainer}>
        <View style={styles.timingContainer}>
          <Image
            source={require('../assets/star.png')}
            style={styles.imageStar}
          />
          <Text style={styles.textBold}>4.9</Text>
        </View>
        <View style={styles.timingContainer}>
          <Image
            source={require('../assets/star.png')}
            style={styles.imageStar}
          />
          <Text style={styles.textBold}>20-30 min</Text>
        </View>
        <View style={styles.timingContainer}>
          <Image
            source={require('../assets/star.png')}
            style={styles.imageStar}
          />
          <Text style={styles.textBold}>5.3k</Text>
        </View>
      </View>

      {/* Delivery Texts (aligned directly under the timings) */}
      <View style={styles.deliveryLabelsContainer}>
        <Text style={styles.textLabel}>Review</Text>
        <Text style={styles.textLabel}>Delivery Time</Text>
        <Text style={styles.textLabel}>Min order</Text>
      </View>

      {/* Order Tabs */}
      <View style={styles.sectionMargin}>
        <OrderTabs />
      </View>

      {/* Popular Items Text */}
      <View style={styles.popularItems}>
        <Text style={styles.popular}>Popular Items</Text>
        <Text style={styles.viewAll}>view all</Text>
      </View>

      {/* Footer Cards */}
      <View style={styles.sectionMargin}>
        <Footercards />
      </View>
    </ScrollView>
  );
};

export default Items;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view1: {
    // Give the image a responsive fixed height instead of a strict flex percentage
    height: height * 0.35, 
    width: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingTop: vs(45), // Increased top padding slightly for newer notched screens
  },
  iconContainer: {
    width: s(42),
    height: s(42),
    borderRadius: s(21), // Half of width/height makes it a perfect circle
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
    paddingBottom: vs(10),
  },
  deliveryItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(30), // Adjusted margins to be more balanced
    marginTop: vs(10),
  },
  deliveryLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(30),
    marginTop: vs(2),
  },
  timingContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: s(5) 
  },
  imageStar: { 
    width: s(16), 
    height: s(16) 
  },
  textBold: { 
    fontSize: s(14), 
    fontFamily: 'Outfit-Medium', // Assuming you have a medium variant for bold texts
  },
  textLabel: { 
    fontSize: s(11), 
    fontFamily: 'Outfit-Regular',
    color: 'gray'
  },
  sectionMargin: {
    marginHorizontal: s(20),
    marginTop:vs(5)
  },
  popularItems: {
    marginTop: vs(25),
    flexDirection: 'row',
    marginHorizontal: s(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popular: { 
    fontSize: s(18), 
    fontFamily: 'Outfit-Medium' 
  },
  viewAll: { 
    fontSize: s(14), 
    fontFamily: 'Outfit-Regular', 
    color: 'gray' 
  },
});
