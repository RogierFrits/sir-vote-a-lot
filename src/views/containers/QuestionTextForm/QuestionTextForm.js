import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  questionActions,
  questionConstants,
  questionSelectors,
} from '../../../state/question';
import Input from '../../components/Input/Input';

const QuestionTextForm = ({ setQuestionText, questionText }) => (
  <Input
    value={questionText}
    label="Your question"
    placeholder="What is the value of pi?"
    maxLength={questionConstants.MAX_TEXT_LENGTH}
    onChange={e => {
      const { value } = e.target;
      setQuestionText(value);
    }}
  />
);

QuestionTextForm.propTypes = {
  questionText: PropTypes.string,
  setQuestionText: PropTypes.func,
};

QuestionTextForm.defaultProps = {
  questionText: '',
  setQuestionText: () => {},
};

const mapStateToProps = createStructuredSelector({
  questionText: questionSelectors.questionTextSelector,
});

const mapDispatchToProps = {
  setQuestionText: questionActions.setQuestionText,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionTextForm);
