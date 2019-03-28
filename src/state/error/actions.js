import types from './types';

export const setError = (id, message) => ({
  type: types.SET_ERROR,
  payload: {
    id,
    message,
  },
});

export const clearError = id => ({
  type: types.CLEAR_ERROR,
  payload: {
    id,
  },
});
