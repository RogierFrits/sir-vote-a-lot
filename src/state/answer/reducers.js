import { combineReducers } from 'redux';
import types from './types';

const answersReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_ANSWER: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  answers: answersReducer,
});

export default reducer;
