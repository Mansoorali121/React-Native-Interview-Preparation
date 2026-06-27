import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { s, vs } from 'react-native-size-matters';

const Items = () => {
  return (
    <View style={styles.cont}>
      {/* Top Image Section */}
      <View style={styles.view1}>
        <ImageBackground
          source={require('../assets/cover.png')}
          style={styles.image}
          resizeMode="cover"
        >
          {/* Header Icons */}
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require('../assets/left-arrow.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require('../assets/share.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Bottom White Section */}
      <View style={styles.view2}></View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#fff',
  },

  view1: {
    flex: 0.38,
  },

  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },

  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: s(20),
    paddingTop: vs(29),
  },

  iconContainer: {
    width: s(42),
    height: s(42),
    borderRadius: s(21),
    backgroundColor: '#fff',

    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: s(20),
    height: s(20),
    tintColor: '#000',
  },

  view2: {
    flex: 0.62,
    marginTop: vs(-35),

    backgroundColor: '#fff',

    borderTopLeftRadius: s(35),
    borderTopRightRadius: s(35),
  },
});