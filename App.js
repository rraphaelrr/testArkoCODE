// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Notification from './screen/notification';


export default function App() {
  return (
    <View style={styles.container}>
      <Notification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
