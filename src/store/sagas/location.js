import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as axios from 'axios';
import LocationActions, { LocationTypes, getInitialLoction } from '../reducers/location';
import { getDirections } from '../reducers/directions';

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
    let directions = yield select(getDirections);
    let indications = [];


    // indications = yield new Promise((resolve, reject) => {
    let indicationsResponse = yield  all(directions.map(direction => axios.get('https://maps.googleapis.com/maps/api/directions/json', {
      params: {
        key: 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ',
        origin: `${initialLocation.latitude},${initialLocation.longitude}`,
        destination: `${direction.location.latitude},${direction.location.longitude}`,
      }
    })))//.then(response => {

      console.log("ALLFETCHES FROM APIIIIII: ",indicationsResponse[0])

      indications = indicationsResponse.map( direction => {
          const responseIndications = direction.data.routes[0].legs[0]
          // const responseIndications = response.data.routes[0].legs[0]

          // console.log("\n\n===========")
          // responseIndications.steps.map(i => console.log(i.html_instructions))
          // console.log("===========\n\n")

          // let indications = [{
          // indications.push({
          return {
            location: direction.location,
            distance: responseIndications.distance.text,
            duration: responseIndications.duration.text,
            title: responseIndications.end_address,
            data: responseIndications.steps.map(i => ({ text: i.html_instructions, distance: i.distance.text })),
          }
          // console.log("INDICATIONS ON EACH ITERATION: ", indications)
        // }).catch(error => console.log("ERRRRORRRR ON GETT ALL indications: ", error))
      // })
      // resolve(indications);
      // console.log("ALL THE INDICATIONS(BEFORE: ",indications)
    });
      
      console.log("ALL THE INDICATIONS: ",indications.map(i => i.title))

    // directions.forEach(direction => {

    //   let response = yield axios.get('https://maps.googleapis.com/maps/api/directions/json', {
    //     params: {
    //       key: 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ',
    //       origin: `${initialLocation.latitude},${initialLocation.longitude}`,
    //       destination: `${direction.location.latitude},${direction.location.longitude}`,
    //     }
    //   })

    //   const responseIndications = response.data.routes[0].legs[0]

    //   // console.log("\n\n===========")
    //   // responseIndications.steps.map(i => console.log(i.html_instructions))
    //   // console.log("===========\n\n")

    //   // let indications = [{
    //   indications.push({
    //     location: direction.location,
    //     distance: responseIndications.distance.text,
    //     duration: responseIndications.duration.text,
    //     title: responseIndications.end_address,
    //     data: responseIndications.steps.map(i => ({ text: i.html_instructions, distance: i.distance.text })),
    //   })
    // })

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
