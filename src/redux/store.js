import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { logger } from './middleware';
import auth from './authentication/api';
import app from './application/api';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import storesetup from './usersetup/api';

import { notification } from 'antd';

export const errorNotification = (error) => {
  notification.open({ 
    description:
      error,
    className: 'custom-notification-class',
    style: {
      width: 600,
    },
  });
};

export const successNotification = (success) => {
  notification.open({ 
    description:
      success,
    className: 'custom-notification-class',
    style: {
      width: 600,
    },
  });
};

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialstate = {};
const middleware = [thunk, logger, auth,app, storesetup];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;


 /** export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }**/
export const store = createStore(
  persistedReducer,
  initialstate,
  compose(applyMiddleware(...middleware), devTools)
);
