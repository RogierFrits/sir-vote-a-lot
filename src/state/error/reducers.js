import { combineReducers } from 'redux';
import types from './types';

const errorInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_ERROR: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case types.CLEAR_ERROR: {
      return {
        ...state,
        [action.payload.id]: undefined,
      };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  errorInfo: errorInfoReducer,
});

export default reducer;
