import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { s } from 'react-native-size-matters';
import colors from "../style/colors";

const T2tabs = () => {
  const tabs = ['My Task', 'Projects', 'Notes', "Files"];

  const [activeTab, setActiveTab] = useState('Notes');

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab && styles.activeTab,
          ]}
          onPress={() => setActiveTab(tab)}>
          <Text style={[styles.tabtext, activeTab === tab && styles.tabtext2]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default T2tabs;

const styles = StyleSheet.create({
  container: {
    marginTop: s(30),
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },

  tab: {
    backgroundColor: colors.inactiveIcon,
    paddingVertical: s(10),
    paddingHorizontal: s(21),
    borderRadius: s(10),
  },

  activeTab: {
    backgroundColor: colors.primary,
  },
  tabtext: {
  color: colors.black,
},

tabtext2: {
  color: colors.white,
},
});