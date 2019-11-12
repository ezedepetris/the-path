import { combineReducers } from 'redux';
import { reducer as directions } from './reducers/directions';
import { reducer as location } from './reducers/location';

export default function configureReducers() {
  return combineReducers({
    directions,
    location,
  });
}
