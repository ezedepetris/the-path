import { takeLatest, put } from 'redux-saga/effects';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as axios from 'axios';
import DirectionsActions, { DirectionsTypes } from '../reducers/directions';
import AddressesActions from '../reducers/addresses';

function* getDirectionsHandler() {
  try {
    let directions = yield AsyncStorage.getItem('Directions');

    if (directions === null) {
      let directions = '[]'
      AsyncStorage.setItem('Directions', directions);
    }
    
    yield put(DirectionsActions.setDirections(JSON.parse(directions)));
  } catch (err) {
    console.log('getDirectionsHandler error', err);
  }
}

function* addDirectionHandler({place}) {
  try {
    let response = yield axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        key: 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ',
        place_id: place.placeId,
      }
    })

    let placeAux = response.data.result

    let formattedAddress = {
      placeId: place.placeId,
      title: place.title,
      subtitle: place.subtitle,
      location: { latitude: placeAux.geometry.location.lat, longitude: placeAux.geometry.location.lng }
    }

    yield put(AddressesActions.checkAddresses(place.placeId));

    const directions = yield AsyncStorage.getItem('Directions');
    AsyncStorage.setItem('Directions', JSON.stringify([...JSON.parse(directions), formattedAddress]));
    
    yield put(DirectionsActions.setNewDirection(formattedAddress));
  } catch (err) {
    console.log('addDirectionHandler error', err);
  }
}

function* removeDirectionHandler({placeId}) {
  try {
    const directions = yield AsyncStorage.getItem('Directions');
    const newDirections = JSON.parse(directions).filter((p) => p.placeId !== placeId);
    AsyncStorage.setItem('Directions', JSON.stringify(newDirections));
    
    yield put(DirectionsActions.setDirections(newDirections));
  } catch (err) {
    console.log('removeDirectionHandler error', err);
  }
}

function* directionsWatcher() {
  yield takeLatest(DirectionsTypes.GET_DIRECTIONS, getDirectionsHandler);
  yield takeLatest(DirectionsTypes.ADD_DIRECTION, addDirectionHandler);
  yield takeLatest(DirectionsTypes.REMOVE_DIRECTION, removeDirectionHandler);
}

export default [
  directionsWatcher,
];
