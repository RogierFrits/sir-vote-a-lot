import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { questionConstants } from '../../../state/question';
import Input from '../../components/Input/Input';
import style from './style';

class QuestionOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionOptionText: props.questionOptionText,
    };
  }

  render() {
    const { questionOptionText } = this.state;
    const {
      id,
      maxQuestionOptionTextLength,
      onDelete,
      onEdit,
      classes,
      clearError,
      errorMessage,
    } = this.props;

    return (
      <Grid
        className={classes.root}
        container
        justify="space-between"
        alignItems="center"
        direction="row"
        wrap="nowrap"
        spacing={8}
      >
        <Grid item>
          <Input
            key={id}
            id={id}
            errorMessage={errorMessage}
            value={questionOptionText}
            maxLength={maxQuestionOptionTextLength}
            onChange={e => {
              const { value } = e.target;
              this.setState(
                {
                  questionOptionText: value,
                },
                clearError
              );
            }}
            onBlur={e => {
              const { value } = e.target;
              onEdit(id, value);
            }}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={onDelete}>
            Del
          </Button>
        </Grid>
      </Grid>
    );
  }
}

QuestionOption.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  questionOptionText: PropTypes.string,
  maxQuestionOptionTextLength: PropTypes.number,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  clearError: PropTypes.func,
  errorMessage: PropTypes.string,
};

QuestionOption.defaultProps = {
  classes: {},
  questionOptionText: '',
  maxQuestionOptionTextLength: questionConstants.MAX_TEXT_LENGTH,
  onDelete: () => {},
  onEdit: () => {},
  clearError: () => {},
  errorMessage: null,
};

export default withStyles(style)(QuestionOption);
