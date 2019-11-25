import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { getAddress } from '../../services/locationHelper';
import styles from './styles';
const GOOGLE_MAPS_APIKEY = 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ';

const MapAndDirections = ({currentLocation, canEditCurrentLocation, editCurrentLocation, indications}) => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      ...currentLocation,
      latitudeDelta: 0.02,
      longitudeDelta: 0.01,
    }}
  >
    <MapView.Marker.Animated
      draggable={canEditCurrentLocation}
      title={'Current Location'}
      flat={true}
      icon={<Icon
        name="ios-arrow-round-back"
        color="#C6C6C6"
        style={styles.icon}
      />}
      coordinate={currentLocation}
      onDragEnd={(e) => editCurrentLocationn(e.nativeEvent.coordinate)}
    />
    { indications.map((mark, i) => (
      <MapView.Marker.Animated
        title={`(${i+1}) ${getAddress(mark.title)}`}
        coordinate={mark.location}
      />
    ))}
   
    { indications.map(dir => (
      <MapViewDirections
        origin={dir.origin_coords}
        strokeWidth={10}
        destination={dir.dest_coords}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    ))}
    
  </MapView>
  )

export default MapAndDirections;
