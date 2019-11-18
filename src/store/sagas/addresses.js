import { takeLatest, put, select } from 'redux-saga/effects';
import Geocode from "react-geocode";
import RNGooglePlaces from 'react-native-google-places';
import * as axios from 'axios';
import AddressesActions, { AddressesTypes, getAddresses } from '../reducers/addresses';
import { getDirections } from '../reducers/directions';

function* searchAddressesHandler({keyword}) {
  try {
    const directions = yield select(getDirections);
    const directionPlaceIds = directions.map(d => d.placeId)

    let response = yield axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
      params: {
        input: keyword,
        key: 'AIzaSyCW5RqoXBxw1TeQBLQsU3qsYzbjHJ380oQ',
        language: 'en',
        region: 'nz'
      }
    })

    let formattedAddresses = response.data.predictions.map(p => ({
      placeId: p.place_id,
      title: p.structured_formatting.main_text,
      subtitle: p.structured_formatting.secondary_text
    }))

    formattedAddresses = formattedAddresses.filter(address => !directionPlaceIds.includes(address.placeId))

    yield put(AddressesActions.setAddresses(formattedAddresses));
  } catch (err) {
    console.log('searchAddressesHandler error', err);
  }
}

function* checkAddressesHandler({placeId}) {
  try {
    let addresses = yield select(getAddresses)
    let newAddresses = addresses.filter((p) => p.placeId !== placeId);
  
    if (newAddresses.length != addresses.length)
      yield put(AddressesActions.setAddresses(newAddresses));
  } catch (err) {
    console.log('checkAddressesHandler error', err);
  }
}


function* addressesWatcher() {
  yield takeLatest(AddressesTypes.SEARCH_ADDRESSES, searchAddressesHandler);
  yield takeLatest(AddressesTypes.CHECK_ADDRESSES, checkAddressesHandler);
}

export default [
  addressesWatcher,
];
