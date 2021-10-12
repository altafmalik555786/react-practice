import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './services/reducers/Index'
import thunk from 'redux-thunk';
const middleWare = [thunk];
const initialState = {};
const store = createStore(rootReducer,initialState, applyMiddleware(...middleWare));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    
    <App />
     
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
