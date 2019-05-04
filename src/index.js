import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter.reducer';
import resultReducer from './store/reducers/result.reducer';
import { Provider } from 'react-redux';

const combinedReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
