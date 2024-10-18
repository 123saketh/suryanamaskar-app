import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>Surya Namaskar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 56,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppBar;
