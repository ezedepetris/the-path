import { createReducer, createActions } from 'reduxsauce';

const INITIAL_STATE = {
  loading: true,
  initial: {
    latitude: null,
    longitude: null
  },
  destination: {
    latitude: null,
    longitude: null
  }
}

const setLocationReducer = (state, { payload }) => ({
  ...state,
  initial: { ...payload },
  loading: false
});

const setDestinationReducer = (state, { payload }) => ({
  ...state,
  destination: { ...payload },
  loading: false
});

const setLoadingReducer = (state, { value }) => ({
  ...state,
  loading: value
})


const { Types, Creators } = createActions({
  setLoading: ['value'],
  getLocation: null,
  setLocation: ['payload'],
  getDestination: null,
  setDestination: ['payload'],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoadingReducer,
  [Types.SET_LOCATION]: setLocationReducer,
  [Types.SET_DESTINATION]: setDestinationReducer,
});

export const LocationTypes = Types;
export default Creators;
