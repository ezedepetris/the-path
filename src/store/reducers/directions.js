import { createReducer, createActions } from 'reduxsauce';

const INITIAL_STATE = {
  loading: true,
  addresses: []
}

const setDirectionsReducer = (state, { payload }) => {
  return {
    addresses: payload,
    loading: false
  };
};

const setNewDirectionReducer = (state, { payload }) => {
  return {
    addresses: [...state.addresses, payload],
    loading: false
  };
};

const removeDirectionReducer = (state, { payload }) => {
  return {
    addresses: [...state.addresses, payload.adress],
    loading: false
  };
};

const setLoadingReducer = (state, { value }) => ({
  ...state,
  loading: value
})

const { Types, Creators } = createActions({
  setLoading: ['value'],
  getDirections: null,
  removeDirection: null,
  addDirection: null,
  setDirections: ['payload'],
  setNewDirection: ['payload'],
  deleteDirection: ['payload'],
});

export const getDirections = (state) => state.directions.addresses

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoadingReducer,
  [Types.SET_DIRECTIONS]: setDirectionsReducer,
  [Types.SET_NEW_DIRECTION]: setNewDirectionReducer,
  [Types.DELETE_DIRECTION]: removeDirectionReducer,
});

export const DirectionsTypes = Types;
export default Creators;
