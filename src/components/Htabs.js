import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Htabs = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.tab}>
                  <Text>Salads</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Htabs;

const styles = StyleSheet.create({
    container:{marginTop:vs(25),marginHorizontal:s(20)},
    tab:{},
})