import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.scss';
import './styles/App.scss';
import Route from './route';
  import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import axios from 'axios';
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import { persistStore, } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import './modules/WebSdk/index';
import * as serviceWorker from './serviceWorker';
axios.defaults.baseURL = 'https://back.vergly.com';
export {default as WebSdk} from './modules/WebSdk/index';

// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const history = createBrowserHistory();
let persistor = persistStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Route />
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();