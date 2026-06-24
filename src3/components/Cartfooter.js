import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Cartfooter = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.addresscontainer}>
        <Text style={styles.address}>Address</Text>
        <Text style={styles.change}>Change</Text>
      </View>
      <View style={styles.addresscard}>
        <View>
          <Image
            source={require('../assets/location.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>📌 123 Main Street, New York</Text>
        </View>
      </View>
      <View>
       {/* Voucher Items Conntainer */}
       <View style={styles.voucheritems}>
         {/* Voucher Box */}
        <View style={styles.vouchercard}>
          <Image
            source={require('../assets/voucher.png')}
            style={styles.voucherimage}
          />
          <Text style={styles.vouchertext}>Add voucher or promote code </Text>
        </View>
        {/* Arrow Container */}
        <View style={styles.arrowiconcontainer}>
          <Image
            source={require('../assets/chevron.png')}
            style={styles.voucherimage}
          />
        </View>
       </View>
      </View>
    </View>
  );
};

export default Cartfooter;

const styles = StyleSheet.create({
  cont: { marginTop: vs(15), marginHorizontal: s(20) },
  addresscontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  address: { fontSize: s(18), fontFamily: 'Outfit-Medium' },
  change: { fontSize: s(14), fontFamily: 'Outfit-Medium', color: 'gray' },
  addresscard: {
    backgroundColor: '#eee',
    height: vs(70),
    borderRadius: s(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(20),
  },
  image: {
    height: vs(45),
    width: s(40),
    marginStart: s(20),
  },
  text: { fontFamily: 'Outfit-Medium', fontSize: s(14) },
  vouchercard: {
    marginHorizontal: s(20),
    marginTop: vs(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  voucherimage: { height: vs(25), width: s(25), tintColor: '#FF5A00' },
  vouchertext: {
    fontFamily: 'Outfit-Medium',
    fontSize: s(14),
    color: '#FF5A00',
  },
  arrowiconcontainer: { marginHorizontal: s(20), alignItems: 'center' },
  voucheritems:{flexDirection:"row",alignItems:"center",}
});

