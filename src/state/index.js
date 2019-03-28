import { combineReducers } from 'redux';
import answer from './answer';
import error from './error';
import question from './question';
import types from './types';

const appReducer = combineReducers({
  question,
  answer,
  error,
});

const rootReducer = (state, action) => {
  if (action.type === types.PURGE_STATE) {
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
