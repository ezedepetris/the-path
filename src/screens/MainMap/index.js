import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, SafeAreaView, View } from 'react-native';
import SearchInput from '../../components/SearchInput';
import Destinations from '../../components/Destinations';
import Indications from '../../components/Indications';
import NewDestinations from '../../components/NewDestinations';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/BackButton';
import MapAndDirections from '../../components/Map';
import styles from './styles';


class MainMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      showSearchDirections: false,
      editLocation: false,
      editDestination: false,
    }
  }

  render() {
    return (
      <View  style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle="dark-content" />
      <BackButton visible={this.props.destinationSetted} onBack={() => this.props.cleanDestination() }/>

      <SearchInput
        inputStyle={styles.searchInputStyle}
        onChangeText={ (text) => this.setState({keyword: text}) }
        onFocus={ () => this.setState({ showSearchDirections: true }) }
        onSubmitEditing={ ({nativeEvent}) => this.props.searchAddress(nativeEvent.text) }
        visible={!this.props.destinationSetted}
        value={this.state.keyword}
      />
      <MapAndDirections
        currentLocation={this.props.location}
        canEditCurrentLocation={this.state.editLocation}
        editCurrentLocation={this.props.setLocation}
        indications={this.props.indications}
      />

      <Destinations
        directions={this.props.directions}
        navigateToDirections={this.props.navigateToDirections}
        removeDestination={this.props.removeDestination}
        visible={!this.state.showSearchDirections && !this.props.destinationSetted}
      />

      <NewDestinations addresses={this.props.addresses}
        addNewDestination={this.props.saveAddress}
        close={() => this.setState(state => ({ showSearchDirections: !state.showSearchDirections })) }
        visible={this.state.showSearchDirections}
        // visible={this.state.showSearchDirections && this.props.destinationSetted == null}
      />

      <Indications
        indications={this.props.indications}
        visible={this.props.destinationSetted}
      />

      </View>
    )
  }
}

const mapStateToProps = state => ({
  location: state.location.initial,
  destinationSetted: state.location.destinationSetted,
  indications: state.location.indications,
  directions: state.directions.addresses,
  addresses: state.addresses,
})

const mapDispatchToProps = dispatch => ({
  searchAddress: (keyword) => dispatch({ type: 'SEARCH_ADDRESSES', keyword: keyword }),
  saveAddress: (place) => dispatch({ type: 'ADD_DIRECTION', place }),
  setLocation: (location) => dispatch({ type: 'SET_LOCATION', location }),
  navigateToDirections: () => dispatch({ type: 'SET_DESTINATION' }),
  cleanDestination: () => dispatch({ type: 'CLEAN_DESTINATION' }),
  removeDestination: (placeId) => dispatch({ type: 'REMOVE_DIRECTION', placeId }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMap);