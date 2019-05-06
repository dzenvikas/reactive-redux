import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter.reducer';
import resultReducer from './store/reducers/result.reducer';
import { Provider } from 'react-redux';

const combinedReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// Middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] dispatching', action);
      const result = next(action);
      console.log('[Middleware] result', result);
      console.log('[Middleware] nextState', store.getState());
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
