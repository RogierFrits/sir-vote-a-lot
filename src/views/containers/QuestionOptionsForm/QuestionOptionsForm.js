import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { errorActions, errorSelectors } from '../../../state/error';
import {
  questionActions,
  questionConstants,
  questionSelectors,
} from '../../../state/question';
import Input from '../../components/Input/Input';
import QuestionOption from '../../components/QuestionOption/QuestionOption';

class QuestionOptionsForm extends Component {
  state = {
    newQuestionOptionText: '',
  };

  isDuplicateQuestionOptionText = (questionOptionText, id) => {
    const { questionOptions } = this.props;

    // It can not be a duplicated of self if existing
    return !!questionOptions
      .filter(questionOption => questionOption.id !== id)
      .find(
        questionOption =>
          questionOption.questionOptionText === questionOptionText
      );
  };

  editQuestionOption = (id, questionOptionText) => {
    const { setQuestionOption, setError, clearError } = this.props;

    if (this.isDuplicateQuestionOptionText(questionOptionText, id)) {
      setError(id, 'The provided option is not unique.');
      return;
    }

    clearError(id);
    setQuestionOption(id, questionOptionText);
  };

  submitQuestionOption = () => {
    const { createQuestionOption, setError, clearError } = this.props;
    const { newQuestionOptionText } = this.state;

    if (!newQuestionOptionText) {
      return;
    }

    if (this.isDuplicateQuestionOptionText(newQuestionOptionText)) {
      setError('newQuestionOption', 'The provided option is not unique.');
      return;
    }

    clearError('newQuestionOption');
    createQuestionOption(newQuestionOptionText);

    this.setState({
      newQuestionOptionText: '',
    });
  };

  render() {
    const {
      maxQuestionOptionTextLength,
      maxQuestionOptions,
      questionOptions,
      removeQuestionOption,
      clearError,
      errorInfo,
    } = this.props;

    const { newQuestionOptionText } = this.state;

    const newQuestionOptionDisabled =
      questionOptions.length >= maxQuestionOptions;

    return (
      <Fragment>
        {questionOptions.map(questionOption => {
          const { id, questionOptionText } = questionOption;
          return (
            <QuestionOption
              key={id}
              id={id}
              questionOptionText={questionOptionText}
              onEdit={this.editQuestionOption}
              onDelete={() => removeQuestionOption(id)}
              clearError={() => clearError(id)}
              errorMessage={errorInfo[id] ? errorInfo[id].message : null}
            />
          );
        })}

        <Grid
          container
          justify="space-between"
          alignItems="center"
          direction="row"
          wrap="nowrap"
          spacing={8}
        >
          <Grid item>
            <Input
              errorMessage={
                errorInfo['newQuestionOption']
                  ? errorInfo['newQuestionOption'].message
                  : null
              }
              disabled={newQuestionOptionDisabled}
              value={newQuestionOptionText}
              label="Type an answer"
              placeholder="3.14"
              maxLength={maxQuestionOptionTextLength}
              onChange={e => {
                const { value } = e.target;
                this.setState(
                  {
                    newQuestionOptionText: value,
                  },
                  () => {
                    clearError('newQuestionOption');
                  }
                );
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={this.submitQuestionOption}
              disabled={newQuestionOptionDisabled}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

QuestionOptionsForm.propTypes = {
  createQuestionOption: PropTypes.func,
  setQuestionOption: PropTypes.func,
  removeQuestionOption: PropTypes.func,
  setError: PropTypes.func,
  clearError: PropTypes.func,
  errorInfo: PropTypes.object,
  maxQuestionOptions: PropTypes.number,
  maxQuestionOptionTextLength: PropTypes.number,
  questionOptions: PropTypes.array,
};

QuestionOptionsForm.defaultProps = {
  createQuestionOption: () => {},
  setQuestionOption: () => {},
  removeQuestionOption: () => {},
  setError: () => {},
  clearError: () => {},
  errorInfo: {},
  maxQuestionOptions: questionConstants.MAX_QUESTION_OPTIONS,
  maxQuestionOptionTextLength: questionConstants.MAX_TEXT_LENGTH,
  questionOptions: [],
};

const mapStateToProps = createStructuredSelector({
  questionOptions: questionSelectors.questionOptionsSelector,
  errorInfo: errorSelectors.errorInfoSelector,
});

const mapDispatchToProps = {
  createQuestionOption: questionActions.createQuestionOption,
  setQuestionOption: questionActions.setQuestionOption,
  removeQuestionOption: questionActions.removeQuestionOption,
  setError: errorActions.setError,
  clearError: errorActions.clearError,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(QuestionOptionsForm);
