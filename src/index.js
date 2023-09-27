import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import StoreRessource from './Components/redux/StoreRessource'
import { legacy_createStore as createStore } from 'redux';
// import App from './Components/App/App';
import Routs from './Components/Routs/Routs';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(StoreRessource,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routs />
    </BrowserRouter>
  </Provider>
);

