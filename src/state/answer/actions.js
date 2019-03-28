import types from './types';

export const createAnswer = questionOptionId => ({
  type: types.CREATE_ANSWER,
  payload: {
    questionOptionId,
    created: Date.now(),
  },
});
