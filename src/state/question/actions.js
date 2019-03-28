import uniqid from 'uniqid';
import types from './types';

export const setQuestionText = questionText => ({
  type: types.SET_QUESTION_TEXT,
  payload: {
    questionText,
  },
});

export const createQuestionOption = questionOptionText => ({
  type: types.CREATE_QUESTION_OPTION,
  payload: {
    id: uniqid(),
    questionOptionText,
    created: Date.now(),
    modified: null,
  },
});

export const setQuestionOption = (id, questionOptionText) => ({
  type: types.SET_QUESTION_OPTION,
  payload: {
    id,
    questionOptionText,
    modified: Date.now(),
  },
});

export const removeQuestionOption = id => ({
  type: types.REMOVE_QUESTION_OPTION,
  payload: {
    id,
  },
});
