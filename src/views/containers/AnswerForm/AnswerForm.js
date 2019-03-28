import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { answerActions, answerConstants } from '../../../state/answer';
import { questionSelectors } from '../../../state/question';
import Divider from '../../components/Divider/Divider';
import Placeholder from './Placeholder';
import styles from './styles';

export class AnswerForm extends Component {
  state = {
    selectedQuestionOptionId: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ selectedQuestionOptionId: value });
  };

  submitAnswer = () => {
    const { createAnswer } = this.props;
    const { selectedQuestionOptionId } = this.state;

    createAnswer(selectedQuestionOptionId);
    this.setState({
      selectedQuestionOptionId: '',
    });
  };

  render() {
    const { selectedQuestionOptionId } = this.state;
    const {
      questionText,
      classes,
      questionOptions,
      minimumOptionsToVote,
    } = this.props;

    if (!questionText || questionOptions.length < minimumOptionsToVote) {
      return <Placeholder minimumAnswerOptions={minimumOptionsToVote} />;
    }

    return (
      <Grid
        className={classes.root}
        container
        direction="column"
        justify="space-between"
      >
        <Grid container item direction="column">
          {questionText}

          <Divider />

          <FormControl component="fieldset">
            <RadioGroup
              name="answer-options"
              value={selectedQuestionOptionId}
              onChange={this.handleChange}
            >
              {questionOptions.map(questionOption => {
                const { id, questionOptionText } = questionOption;
                return (
                  <FormControlLabel
                    key={id}
                    value={id}
                    control={<Radio />}
                    label={questionOptionText}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <Divider />

          <Grid
            container
            item
            justify="flex-end"
            alignItems="center"
            direction="row"
            wrap="nowrap"
          >
            <Button
              disabled={!selectedQuestionOptionId}
              variant="outlined"
              onClick={this.submitAnswer}
            >
              Vote
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

AnswerForm.propTypes = {
  minimumOptionsToVote: PropTypes.number,
  questionText: PropTypes.string,
  questionOptions: PropTypes.array,
  createAnswer: PropTypes.func,
};

AnswerForm.defaultProps = {
  minimumOptionsToVote: answerConstants.MIN_QUESTION_OPTIONS_TO_VOTE,
  questionText: '',
  questionOptions: [],
  createAnswer: () => {},
};

const mapStateToProps = createStructuredSelector({
  questionText: questionSelectors.questionTextSelector,
  questionOptions: questionSelectors.questionOptionsSelector,
});

const mapDispatchToProps = {
  createAnswer: answerActions.createAnswer,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AnswerForm);
