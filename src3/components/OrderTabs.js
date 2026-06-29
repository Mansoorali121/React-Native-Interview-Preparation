import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const OrderTabs = () => {
  const tabsnames = ['Delievery', 'Group Order'];
  const [selectedtab, setSelectedtab] = useState('Delievery');

  return (
    <View style={styles.container}>
      {tabsnames.map((tab, index) => {
        const isSelected = selectedtab === tab;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedtab(tab)}
            style={[
              styles.tab,
              isSelected && { backgroundColor: '#000' },
            ]}
          >
            <Image 
              source={require('../assets/share.png')} 
              style={[styles.image, { tintColor: isSelected ? '#fff' : '#000' }]} 
            />
            <Text style={[styles.delieverytext, { color: isSelected ? '#fff' : '#000' }]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default OrderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Tabs ko side-by-side (horizontal) karne ke liye
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: '#fff',
    marginHorizontal: s(10), // Margin thoda kam kiya taake screens par fit aaye
    paddingVertical: vs(16),  // Padding set ki
    width: s(140),
    marginTop: vs(10),
    borderRadius: s(30),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: s(0.4),
    borderColor: '#000', // Unselected tab ka border dikhane ke liye
  },
  image: {
    height: vs(18),
    width: s(18),
  },
  delieverytext: {
    marginStart: s(10),
    fontFamily: 'Outfit-Medium',
  },
});
