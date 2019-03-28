import { createSelector } from 'reselect';
import { questionSelectors } from '../question';
import { truncate } from './utils';

const answerState = state => state.answer;

const answersSelector = createSelector(
  answerState,
  answer => answer.answers
);

export const answersAmountSelector = createSelector(
  answersSelector,
  answers => answers.length
);

export const answerChartDataSelector = createSelector(
  questionSelectors.questionOptionsSelector,
  answersSelector,
  (questionOptions, answers) =>
    questionOptions.map(questionOption => {
      const { id, questionOptionText } = questionOption;
      return {
        questionOptionText: truncate(questionOptionText, 8),
        amount: answers.filter(answer => answer.questionOptionId === id).length,
      };
    })
);
