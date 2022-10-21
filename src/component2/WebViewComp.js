import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewComp = () => {
  const ActivityIndicators = () => {
    return (
      <ActivityIndicator
        color="red"
        size="large"
        style={styles.activityIndicator}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.header}>My WebView</Text>
      <WebView
        source={{uri: 'https://infinite.red'}}
        renderLoading={ActivityIndicators}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default WebViewComp;
