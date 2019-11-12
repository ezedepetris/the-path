import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import SearchInput from '../../components/SearchInput';
import Destinations from '../../components/Destinations';
import styles from './styles';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

const destination = {latitude: -36.846316, longitude: 174.776656 };
const GOOGLE_MAPS_APIKEY = '';

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
      <StatusBar translucent backgroundColor={'transparent'} barStyle="dark-content" />
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
          ...this.props.location,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01,
        }}
      >
      <MapView.Marker.Animated
        draggable={true} // Change to true when the user press update COORDInATE
        ref={marker => { this.marker = marker }}
        coordinate={this.props.location}
        // onDragEnd={ (e) => console.log("NEW LOCATION: ", e.nativeEvent.coordinate) }
        onDragEnd={(e) => this.props.setLocation(e.nativeEvent.coordinate)}
      />
        <MapViewDirections
          origin={this.props.location}
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


const mapStateToProps = state => ({
  location: state.location.initial,
  destination: state.location.destination,
})

const mapDispatchToProps = dispatch => ({
  setLocation: (location) => dispatch({ type: 'SET_LOCATION', location })
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMap);