import React, { Component } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import SearchInput from '../../components/SearchInput';
import Destinations from '../../components/Destinations';
import styles from './styles';
import MapView from 'react-native-maps';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ';

class MainMap extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      keybord: ''
    }
  }

  render() {
    return (
      <SafeAreaView  style={{ flex: 1 }}>
      <StatusBar backgroundColor='black' barStyle="dark-content" />
      <SearchInput
        inputStyle={styles.searchInputStyle}
        placeholder={"Search a destination"}
        onChangeText={ (text) => this.setState({keyword: text}) }
        onSubmitEditing={ ({nativeEvent}) => this.setState({ keyboard: nativeEvent.text }) }
        value={this.state.keyboard}
      />
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
          strokeWidth={10}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
      <Destinations/>
      </SafeAreaView>
    )
  }
}

export default MainMap;