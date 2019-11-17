import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import SearchInput from '../../components/SearchInput';
import Destinations from '../../components/Destinations';
import Indications from '../../components/Indications';
import NewDestinations from '../../components/NewDestinations';
import BackButton from '../../components/BackButton';
import styles from './styles';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ';

class MainMap extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showSearchDirections: false,
      editLocation: false,
      editDestination: false,
    }
  }

  render() {
    console.log("DESTINATION: ", this.props.destination.latitude)
    return (
      <SafeAreaView  style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle="dark-content" />
      { (this.props.destination.latitude !== null) && (
        <BackButton onBack={() => this.props.cleanDestination() }/>
      )}

      { (this.props.destination.latitude == null) && (
        <SearchInput
          inputStyle={styles.searchInputStyle}
          onChangeText={ (text) => this.setState({keyword: text}) }
          onFocus={ () => this.setState({ showSearchDirections: true }) }
          onSubmitEditing={ ({nativeEvent}) => this.props.searchAddress(nativeEvent.text) }
          value={this.state.keyword}
        />
      )}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          ...this.props.location,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01,
        }}
      >
        <MapView.Marker.Animated
          draggable={this.state.editLocation} // Change to true when the user press update COORDInATE
          ref={ marker => this.marker = marker }
          coordinate={this.props.location}
          onDragEnd={(e) => this.props.setLocation(e.nativeEvent.coordinate)}
        />
        { (this.props.destination.latitude !== null) && (
          <MapViewDirections
            origin={this.props.location}
            strokeWidth={10}
            destination={this.props.destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        )}

        { (this.props.destination.latitude !== null) && (
          <MapView.Marker.Animated
            draggable={this.state.editDestination} // Change to true when the user press update COORDInATE
            ref={ marker => this.markerDestination = marker }
            coordinate={this.props.destination}
            onDragEnd={(e) => this.props.setDestination(e.nativeEvent.coordinate)}
          />
        )}
      </MapView>

      {(!this.state.showSearchDirections && this.props.destination.latitude == null) && (
          <Destinations directions={this.props.directions} setDestination={this.props.setDestination} removeDestination={this.props.removeDestination}/>
      )}

      {(this.state.showSearchDirections && this.props.destination.latitude == null) && (
        <NewDestinations addresses={this.props.addresses}
          addNewDestination={this.props.saveAddress}
          close={() => this.setState(state => ({ showSearchDirections: !state.showSearchDirections })) }
          // close={() => {console.log("REFFF: ", this.searchInput); this.setState(state => ({ showSearchDirections: !state.showSearchDirections }))} }
        />
      )}

      {(this.props.destination.latitude !== null) && (
        <Indications indications={this.props.indications}/>
      )}
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  location: state.location.initial,
  destination: state.location.destination,
  indications: state.location.indications,
  directions: state.directions.addresses,
  addresses: state.addresses,
})

const mapDispatchToProps = dispatch => ({
  searchAddress: (keyword) => dispatch({ type: 'SEARCH_ADDRESSES', keyword: keyword }),
  saveAddress: (place) => dispatch({ type: 'ADD_DIRECTION', place }),
  setLocation: (location) => dispatch({ type: 'SET_LOCATION', location }),
  setDestination: (destination) => dispatch({ type: 'SET_DESTINATION', destination }),
  cleanDestination: () => dispatch({ type: 'CLEAN_DESTINATION' }),
  removeDestination: (placeId) => dispatch({ type: 'REMOVE_DIRECTION', placeId }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMap);