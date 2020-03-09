/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Footer from 'lib-folder';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text>Yahoo</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
container : {
  flex: 1
}
});

export default App;
