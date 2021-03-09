import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';

import Vibrations from "./src/screens/vibration/Vibration";
import FlashLights from "./src/screens/flashLight/FlashLight";
import Calls from "./src/screens/call/calls";
import Locations from "./src/screens/location/Locations";
import Messages from "./src/screens/message/message";

export default class App extends Component {


  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <Vibrations />
          <FlashLights />
          <Calls />
          <Locations />
          <Messages />
        </ScrollView>
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