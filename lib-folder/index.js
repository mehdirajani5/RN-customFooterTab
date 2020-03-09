/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                {/* <Text style={{ backgroundColor: 'red', width: 20 }}>wow</Text> */}
                <Text>Aby yar</Text>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
// });