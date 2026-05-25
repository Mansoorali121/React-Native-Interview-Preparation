import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import colors from '../style/colors';

const Searchbutton = () => {
  return (
    <View style={{ marginTop: vs(20) }}>
      <TouchableOpacity style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          placeholderTextColor={colors.background}
        />
        <Image
          source={require('../assets/search.png')}
          style={styles.searchimage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbutton;

const styles = StyleSheet.create({
  container: {
    height: vs(70),
    width: s(260),
    backgroundColor: colors.gradientEnd,
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: s(15),
  },
  searchimage: { height: vs(30), width: s(30), tintColor: colors.background },
  TextInput: { fontSize: s(13), color: colors.background },
});
