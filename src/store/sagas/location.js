import { takeLatest, put, select } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as axios from 'axios';
import LocationActions, { LocationTypes, getInitialLoction } from '../reducers/location';

function* setLocationHandler({location}) {
  try {
    yield put(LocationActions.newLocation(location));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* setDestinationHandler({destination}) {
  try {
    let initialLocation = yield select(getInitialLoction);

    console.log(`INITIAL LOCATION: ${initialLocation.latitude},${initialLocation.longitude}`)
    console.log(`END LOCATION: ${destination.latitude},${destination.longitude}`)

    const response = yield axios.get('https://maps.googleapis.com/maps/api/directions/json', {
      params: {
        key: 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ',
        origin: `${initialLocation.latitude},${initialLocation.longitude}`,
        destination: `${destination.latitude},${destination.longitude}`,
      }
    })

    const responseIndications = response.data.routes[0].legs[0]
    console.log("RESPONSE ROUTES ON SET DESTINATION: ", responseIndications)
    console.log("RESPONSE ON SET DESTINATION: ", responseIndications.distance)

    let indications = {
      distance: responseIndications.distance.text,
      duration: responseIndications.duration.text,
      endAddress: responseIndications.end_address,
      steps: responseIndications.steps.map(i => ({ text: i.html_instructions, distance: i.distance.text })),
    }

    console.log("FORMATTED INDICATIONS", indications)

    // let formattedAddress = {
    //   placeId: place.placeId,
    //   title: place.title,
    //   subtitle: place.subtitle,
    //   location: { latitude: placeAux.geometry.location.lat, longitude: placeAux.geometry.location.lng }
    // }
    

    yield put(LocationActions.newDestination({ destination, indications }));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* cleanDestinationHandler() {
  try {
    const removeDestination = {
      destination: {
        latitude: null,
        longitude: null
      },
      indications: []
    }

    yield put(LocationActions.newDestination(removeDestination));
  } catch (err) {
    console.log('cleanDestinationHandler error', err);
  }
}

function* locationWatcher() {
  yield takeLatest(LocationTypes.SET_LOCATION, setLocationHandler);
  yield takeLatest(LocationTypes.SET_DESTINATION, setDestinationHandler);
  yield takeLatest(LocationTypes.CLEAN_DESTINATION, cleanDestinationHandler);
}

export default [
  locationWatcher,
];
