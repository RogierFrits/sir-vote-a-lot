import { createSelector } from 'reselect';

const questionState = state => state.question;

export const questionTextSelector = createSelector(
  questionState,
  question => question.questionText
);

export const questionOptionsSelector = createSelector(
  questionState,
  question => question.questionOptions
);
