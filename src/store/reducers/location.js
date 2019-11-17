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
  },
  indications: {}
}

const setLocationReducer = (state, { payload }) => ({
  ...state,
  initial: { ...payload },
  loading: false
});

const setDestinationReducer = (state, { payload }) => ({
  ...state,
  destination: payload.destination,
  indications: payload.indications,
  loading: false
});

const setLoadingReducer = (state, { value }) => ({
  ...state,
  loading: value
})

const { Types, Creators } = createActions({
  setLoading: ['value'],
  setLocation: null,
  newLocation: ['payload'],
  setDestination: null,
  newDestination: ['payload'],
  cleanDestination: null,
});

export const getInitialLoction = (state) => state.location.initial

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoadingReducer,
  [Types.NEW_LOCATION]: setLocationReducer,
  [Types.NEW_DESTINATION]: setDestinationReducer,
});

export const LocationTypes = Types;
export default Creators;
