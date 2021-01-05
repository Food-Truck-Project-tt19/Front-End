// stlyes
import './index.css';

// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// redux dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

// reducer function
import { reducer } from './Store/Reducers';

// routing
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './App';
import reportWebVitals from './reportWebVitals';


// redux store for passing props
const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Router>
      <Provider store={ store }>
    <App />
  </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
