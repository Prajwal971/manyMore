import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Vibrations from "./src/screens/vibration/Vibration";
import FlashLights from "./src/screens/flashLight/FlashLight";
import Calls from "./src/screens/call/calls";
import Locations from "./src/screens/location/Locations";

export default class App extends Component {


  render() {
    return (
      <View style={styles.MainContainer}>
        <Vibrations />
        <FlashLights />
        <Calls />
        <Locations />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
});