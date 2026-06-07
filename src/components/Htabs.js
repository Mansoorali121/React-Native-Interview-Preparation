import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const Htabs = () => {
  const tabs = ['Salads', 'Hot sale', 'Popularity'];
  const [selectedtab, setSelectedtab] = useState('Salads');
  return (
    <View style={styles.container}>
      {tabs.map((tabname, index) => (
        <View style={{ flexDirection: 'row', gap: s(20) }}>
          <TouchableOpacity onPress={()=>setSelectedtab(tabname)}
            style={[
              styles.tab,
              selectedtab === tabname && { backgroundColor: '#FF7A45' },
            ]}
            key={index}
          >
            <Text
              style={[
                styles.tabtext,
                selectedtab === tabname && { color: '#fff' },
              ]}
            >
              {tabname}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Htabs;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(14),
    marginHorizontal: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    backgroundColor: '#eee',
    paddingVertical: vs(10),
    paddingHorizontal:s(20),
    alignSelf:"flex-start",
    alignItems: 'center',
    borderRadius: s(20),
  },
  tabtext: { color: '#0000', fontFamily: 'Outfit-Light' },
});
