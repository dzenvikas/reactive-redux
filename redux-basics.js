const redux = require('redux');

const initialState = {
  counter: null
};

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// Action
