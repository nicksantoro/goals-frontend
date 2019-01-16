import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { getAuth } from './actions'
import { fetchChallenges } from './actions/challengeActions'
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import './index.css';


// library.add(faIgloo)

import reducers from './reducers';
// import reducer from './store/reducer';

const store = createStore(reducers, applyMiddleware(thunk, logger));

store.dispatch(getAuth())
store.dispatch(fetchChallenges())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
