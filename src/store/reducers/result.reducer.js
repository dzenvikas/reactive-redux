import * as actionTypes from '../actions/actions';
import { updateObject } from '../updateObject';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const updatedResults = state.results.concat({
        id: new Date(),
        value: action.result
      });
      return updateObject(state, { results: updatedResults });
    case actionTypes.DELETE_RESULT:
      const newArray = state.results.filter(el => el.id !== action.resultElId);
      return updateObject(state, { results: newArray });
    default:
      return state;
  }
};

export default reducer;
