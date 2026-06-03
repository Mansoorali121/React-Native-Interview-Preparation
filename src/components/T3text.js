import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { vs, s } from 'react-native-size-matters';
import colors from "../style/colors";

const T3text = ({title}) => {
  return (
    <View style={styles.cont}>
      <View style={styles.itemcontainer}>
        <Text style={styles.date}>{title}</Text>
        <TouchableOpacity style={styles.circle}>
          <Image
            source={require('../assets/calendar.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default T3text;

const styles = StyleSheet.create({
  cont: { marginTop: vs(15) },
  image: { height: vs(25), width: s(25) },
  circle: {
    backgroundColor: colors.shadow,
    height: vs(32),
    width: s(32),
    padding: s,
    borderRadius: s(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(20),
  },
  date: { fontSize: s(24), fontFamily: 'Outfit-Medium', fontWeight: 'bold' },
});
