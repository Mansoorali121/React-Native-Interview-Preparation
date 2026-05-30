import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { vs, s } from 'react-native-size-matters';
import colors from '../style/colors';

const Selecteditem = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.card}>
        <View >
          <Text style={styles.name}>Sun</Text>
          <Text style={styles.date}>20</Text>
        </View >
        <View style={[styles.selecteditem]}>
          <Text style={[styles.name, {color:"black"}]}>Mon</Text>
          <Text style={[styles.date,{color:"black"}]}>21</Text>
        </View>
        <View>
          <Text style={styles.name}>Tue</Text>
          <Text style={styles.date}>22</Text>
        </View>
        <View>
          <Text style={styles.name}>Wed</Text>
          <Text style={styles.date}>23</Text>
        </View>
        <View>
          <Text style={styles.name}>Thu</Text>
          <Text style={styles.date}>24</Text>
        </View>
        <View>
          <Text style={styles.name}>Fri</Text>
          <Text style={styles.date}>25</Text>
        </View>

        <View>
          <Text style={styles.name}>Sat</Text>
          <Text style={styles.date}>26</Text>
        </View>
      </View>
    </View>
  );
};

export default Selecteditem;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    backgroundColor: colors.gradientStart,
    height: vs(110),
    borderRadius: s(25),
  },
  card: {
    flexDirection: 'row',
    marginTop: s(30),
    marginHorizontal: s(10),
    justifyContent: 'space-evenly',
  },
  name: {
    color: '#fff',
    fontSize: s(12),
    fontFamily: 'Outfit-Thin',
    marginBottom: vs(12),
  },
  date: {
    color: '#fff',
    fontSize: s(12),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },
  selecteditem:{backgroundColor:"#fff",width:s
    (28),
    height:vs
    (50),
    borderRadius:s
    (10),
    
   },
});
