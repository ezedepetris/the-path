import { createReducer, createActions } from 'reduxsauce';

const INITIAL_STATE = []

const setAddressesReducer = (state, { payload }) => (
  payload
)

export const getAddresses = (state) => state.addresses

const { Types, Creators } = createActions({
  searchAddresses: null,
  checkAddresses: ['placeId'],
  setAddresses: ['payload'],
});
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ADDRESSES]: setAddressesReducer,
});

export const AddressesTypes = Types;
export default Creators;
