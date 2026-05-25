import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import colors from '../style/colors';

const Filterbutton = () => {
  return (
   <View style={{ marginTop: vs(20) }}>
     <View style={styles.container}>
      <Image  source={require("../assets/setting.png")}
       style={styles.filterimage} 
      />
    </View>
   </View>
  )
}

export default Filterbutton;

const styles = StyleSheet.create({
      container: {
    height: vs(70),
    width: s(60),
    backgroundColor: colors.gradientEnd,
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: s(15),
  },
  filterimage: { height: vs(30), width: s(30), tintColor: colors.background },
})