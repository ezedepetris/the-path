import { combineReducers } from 'redux';
import { reducer as user } from './reducers/user';

export default function configureReducers() {
  return combineReducers({
    user,
  });
}
