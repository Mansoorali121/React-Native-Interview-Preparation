import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import colors from '../style/colors';

const T2footer = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.footertitle}>Process</Text>
      <View style={styles.card}>
        <View style={styles.cardcontainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
             
            }}
          >
            <View style={styles.container}>
              <Image
                source={require('../assets/notes.png')}
                style={styles.image}
              />
            </View>
            <View style={{gap:s
                (20)
            }}>
              <Text style={styles.projectname}>Project Name</Text>
              <Text style={styles.date}>2 days ago </Text>
            </View>
            <View style={{ marginTop:vs
    (15)}}>
              <Image
                source={require('../assets/moree.png')}
                style={styles.imagee}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default T2footer;

const styles = StyleSheet.create({
  cont: { marginTop: s(10) },
  footertitle: { fontSize: s(16), fontFamily: 'Outfit-Bold' },
  card: {
    backgroundColor: colors.tagSelectedBg,
    height: vs(115),
    borderRadius: s(30),
    marginHorizontal: s(10),
    padding: s(10),
  },
  image: { height: vs(24), width: s(24), tintColor: '#fff' },
  container: {
    height: vs(32),
    width: s(32),
    backgroundColor: colors.blueCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(10),
    marginTop:vs
    (15)
  },
  cardcontainer: { marginHorizontal: s(10), marginTop: s(10) },
  imagee: { height: vs(24), width: s(24) },
  projectname: {
    fontSize: s(16),
    fontWeight: 'bold',
    fontFamily: 'Outfit-ExtraLight',
  },
  date: { fontSize: s(14), fontFamily: 'Outfit-Light' },
});
