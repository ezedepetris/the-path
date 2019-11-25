import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as axios from 'axios';
import LocationActions, { LocationTypes, getInitialLoction } from '../reducers/location';
import { getDirections } from '../reducers/directions';
import { getDistanceFromLatLonInKm } from '../../services/locationHelper';
import TSMS from '../../services/TSMS';

function* setLocationHandler({location}) {
  try {
    yield put(LocationActions.newLocation(location));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* setDestinationHandler() {
  try {
    let initialLocation = yield select(getInitialLoction);
    let savedDirections = yield select(getDirections);
    let directions = [{ location: initialLocation }, ...savedDirections]

    let directionsGraph = [[]];

    for (let origin = 0; origin < directions.length; origin++) {
      for (let destination = 0; destination < directions.length; destination++) {

        if (origin == destination){
          directionsGraph[origin][destination] = {}
        } else {

          directionsGraph[origin][destination] = {
            origin: directions[origin].location,
            destination: directions[destination].location,
            distance: getDistanceFromLatLonInKm(directions[origin].location, directions[destination].location)
          }
        }
      }
      if(origin + 1 < directions.length)
        directionsGraph.push([])
    }

    let tsmSolver = new TSMS(directionsGraph)
    let indications = [];

    directions = tsmSolver.run();

    let indicationsResponse = yield all(directions.map(direction => axios.get('https://maps.googleapis.com/maps/api/directions/json', {
      params: {
        key: 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ',
        origin: `${direction.origin.latitude},${direction.origin.longitude}`,
        destination: `${direction.destination.latitude},${direction.destination.longitude}`,
      }
    })))

    indications = indicationsResponse.map( direction => {
      const responseIndications = direction.data.routes[0].legs[0]
      
      return {
        location: { latitude: responseIndications.end_location.lat, longitude: responseIndications.end_location.lng },
        origin_coords: { latitude: responseIndications.start_location.lat, longitude: responseIndications.start_location.lng },
        dest_coords: { latitude: responseIndications.end_location.lat, longitude: responseIndications.end_location.lng },
        distanceText: responseIndications.distance.text,
        distance: responseIndications.distance.value,
        duration: responseIndications.duration.text,
        title: responseIndications.end_address,
        data: responseIndications.steps.map(i => ({ text: i.html_instructions, distance: i.distance.text })),
      }
          
    });

    yield put(LocationActions.newDestination({ destination: true, indications }));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* cleanDestinationHandler() {
  try {
    const removeDestination = {
      destination: false,
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
