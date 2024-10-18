import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import NumberGrid from '@/components/NumberGrid';
import MyAppBar from '@/components/Appbar';

export default function App() {
  return (
    <View style={styles.container}>
      <MyAppBar />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <NumberGrid />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});