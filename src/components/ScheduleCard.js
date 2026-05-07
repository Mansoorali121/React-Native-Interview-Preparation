import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../style/colors';
import { s, vs } from 'react-native-size-matters';

const ScheduleCard = () => {
  return (
    <View style={styles.cont}>
      <Text>ScheduleCard</Text>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: colors.lightGray,
    height: s(230),
    borderRadius: vs(10),
    marginTop: s(20),
  },
});
