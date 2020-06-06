import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/pages/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;