import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ';

class MainMap extends React.Component {
  render() {
    return (
      <View  style={{ flex: 1 }}>
      <StatusBar backgroundColor='black' barStyle="dark-content" />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.3318456,
          longitude: -122.0296002,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
      </View>
    )
  }
}

export default MainMap;