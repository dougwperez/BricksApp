// import * as React from 'react';
import React, { Component } from 'react';
import WebView from 'react-native-webview';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class WebViewEditor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri: 'https://brickbuilder.herokuapp.com/?fbclid=IwAR3vhRJxHtIzxWdD8zLNCvyqR4ZBHUE15F--djBtgXdCEgwVcmRILS_wuKQ',
          }}
          style={styles.video}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    height: '100%',
  },
  video: {
    marginTop: 45,

    width: '100%',
    height: '100%',
    flex: 1,
  },
});
