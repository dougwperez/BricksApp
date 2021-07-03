import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar.js';
import BottomBar from './components/BottomBar.js';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Text>Content Here</Text>
      <StatusBar style="auto" />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
