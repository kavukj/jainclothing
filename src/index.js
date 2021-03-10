import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor }from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//this is importing from a react component as it can be used with any react frameworks like native electron etc.


ReactDOM.render(
  //Provider is the store component of redux which is the parent of all the other components.
  //So we have called it here. It allows access to all the other features of store of redux.
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
