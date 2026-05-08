import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../style/colors';
import { s, vs } from 'react-native-size-matters';
import Scheduleicon from "./Scheduleicon";


const ScheduleCard = () => {
  return (
    <View style={styles.cont}>
      {/* Card Margin */}
      <View style={styles.cardmargin}>
        <View style={styles.cont2}>
          <Text>Overview</Text>
          <Text>This Week </Text>
        </View>
              <Scheduleicon/>
        
      </View>
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
  cont2: {
    marginTop: s(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardmargin: { marginHorizontal: vs(10) },
});
