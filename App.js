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
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor:'black', height:height/1.14}}>
      <ScrollView>
          <View style={{ backgroundColor: 'red', width: "100%", height: 100 }}>
            <Text>TEXT 1</Text>
          </View>
          <View style={{ backgroundColor: 'blue', width: "100%", height: 100 }}>
            <Text>TEXT 2</Text>
          </View>
          <View style={{ backgroundColor: 'purple', width: "100%", height: 100 }}>
            <Text>TEXT 3</Text>
          </View>
          <View style={{ backgroundColor: 'grey', width: "100%", height: 100 }}>
            <Text>TEXT 4</Text>
          </View>
          <View style={{ backgroundColor: 'orange', width: "100%", height: 100 }}>
            <Text>TEXT 5</Text>
          </View>
          <View style={{ backgroundColor: 'grey', width: "100%", height: 100 }}>
            <Text>TEXT 6</Text>
          </View>
          <View style={{ backgroundColor: 'purple', width: "100%", height: 100 }}>
            <Text>TEXT 7</Text>
            <Text>TEXT 7</Text>
            <Text>TEXT 7</Text>
            <Text>TEXT 7</Text>
            <Text>TEXT 7</Text>

          </View>
      </ScrollView>
        </View>
      <Footer tabs={['Home','Offer','Cart','Profile']}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
