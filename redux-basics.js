const redux = require('redux');

const initialState = {
  counter: null
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[SUBSCRIPTION]', store.getState());
});

// Dispatch an action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
