import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import colors from "../style/colors";

const T3card = () => {
  return (
    <View style={styles.cont}>
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
          <View style={{ gap: s(20) }}>
            <Text style={styles.projectname}>Project Meeting</Text>
            <Text style={styles.date}>9 am to 11 am  </Text>
          </View>
          <View style={{ marginTop: vs(15) }}>
            <Image
              source={require('../assets/moree.png')}
              style={styles.imagee}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default T3card;

const styles = StyleSheet.create({
//   cont: {
//     marginHorizontal: s(20),
//     marginTop: vs(25),
//     height: vs(110),
//     backgroundColor: colors.tagBackground,
//     borderRadius: s(40),
//   },
cont: {
  marginHorizontal: s(20),
  marginTop: vs(25),
  height: vs(110),
  backgroundColor: "#fff",
  borderRadius: s(40),

  // iOS Shadow
  shadowColor: '#00000090',
  shadowOffset: {
    width: 0,
    height: s
    (4),
  },
  shadowOpacity: 0.7,
  shadowRadius: 6,

  // Android Shadow
  elevation: 6,
},
  cardcontainer: { marginHorizontal: s(10), marginTop: s(23) },
  imagee: { height: vs(24), width: s(24) },
  projectname: {
    fontSize: s(16),
    fontWeight: 'bold',
    fontFamily: 'Outfit-ExtraLight',
  },
  date: { fontSize: s(14), fontFamily: 'Outfit-Light' },
  image: { height: vs(24), width: s(24), tintColor: 'pink' },
  container: {
    height: vs(32),
    width: s(32),
    backgroundColor: colors.cardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(10),
    marginTop: vs(15),
  },
});
