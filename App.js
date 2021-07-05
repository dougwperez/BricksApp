import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopBar from './components/TopBar.js';
import BottomBar from './components/BottomBar.js';
import WebViewEditor from './components/WebViewEditor.js';

// import WebViewEditor from './components/WebViewEditor.js';
// import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      /> */}
      <WebViewEditor />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
