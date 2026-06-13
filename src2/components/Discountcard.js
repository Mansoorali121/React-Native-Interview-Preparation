import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Discountcard = () => {
  return (
    <View style={styles.cont}>
        <View style={styles.textcontainer}>
            <Text>Order a set With</Text>
                        <Text>40% Discount</Text>

        </View>
    </View>
  )
}

export default Discountcard;

const styles = StyleSheet.create({
    cont:{marginTop:vs(20),
        marginHorizontal:s(20),
        backgroundColor:"#c7e0ae",
        height:vs(130),
        borderRadius:s(20)
    },
    textcontainer:{},
})