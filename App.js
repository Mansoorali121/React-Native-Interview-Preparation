import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import Home from "./src/screens/Home";

const App = () => {
  

  return (
    <View style={styles.container}>
   <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 30,
  },
 
});
