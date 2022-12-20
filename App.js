import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  { Constants, Location, Permissions} from 'expo';
import Expo from 'expo';

export default class App extends Component {
  render() {
    return (
            <Expo.MapView 
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.77825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}/>
      ) 
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Expo.Constants.statusBarHeight,
  },
});
