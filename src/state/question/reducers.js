import { combineReducers } from 'redux';
import types from './types';

const questionTextReducer = (state = '', action) => {
  switch (action.type) {
    case types.SET_QUESTION_TEXT: {
      const { questionText } = action.payload;
      return questionText;
    }
    default:
      return state;
  }
};

const questionOptionsReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_QUESTION_OPTION: {
      const questionOptions = [...state];
      questionOptions.push(action.payload);
      return questionOptions;
    }
    case types.SET_QUESTION_OPTION: {
      const { id } = action.payload;
      const questionOptions = [...state];

      const index = questionOptions
        .map(questionOption => questionOption.id)
        .indexOf(id);

      if (index === -1) {
        // not found
        return state;
      }

      const questionOption = questionOptions[index];
      const newQuestionOption = {
        ...questionOption,
        ...action.payload,
      };

      questionOptions[index] = newQuestionOption;
      return questionOptions;
    }
    case types.REMOVE_QUESTION_OPTION: {
      const { id } = action.payload;
      const questionOptions = [...state];

      const index = questionOptions
        .map(questionOption => questionOption.id)
        .indexOf(id);

      if (index === -1) {
        // not found
        return state;
      }

      questionOptions.splice(index, 1);
      return questionOptions;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  questionText: questionTextReducer,
  questionOptions: questionOptionsReducer,
});

export default reducer;
