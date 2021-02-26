import { combineReducers } from 'redux';
import authReducer from './authentication/reducer'; 
import applicationReducer from './application/reducer';
import userSetupReducer from './usersetup/reducer';

export default combineReducers({ 
  auth: authReducer,
  app: applicationReducer,
  usersetup: userSetupReducer
});