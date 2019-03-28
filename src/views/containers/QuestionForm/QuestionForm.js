import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as globalActions from '../../../state/actions';
import { questionConstants, questionSelectors } from '../../../state/question';
import Divider from '../../components/Divider/Divider';
import QuestionOptionsForm from '../QuestionOptionsForm/QuestionOptionsForm';
import QuestionTextForm from '../QuestionTextForm/QuestionTextForm';
import styles from './styles';

export const QuestionForm = ({
  classes,
  questionOptions,
  maxQuestionOptions,
  purgeState,
}) => (
  <Grid
    className={classes.root}
    container
    direction="column"
    justify="space-between"
  >
    <Grid container item direction="column">
      <QuestionTextForm />
      <Divider />
      <QuestionOptionsForm />
    </Grid>

    <Grid item>
      <Divider />

      <Grid
        container
        item
        justify="space-between"
        alignItems="center"
        direction="row"
        wrap="nowrap"
      >
        <Grid item>
          <Typography>
            {`${questionOptions.length}/${maxQuestionOptions} possible answers`}
          </Typography>
        </Grid>
        <Button variant="outlined" onClick={purgeState}>
          Reset
        </Button>
      </Grid>
    </Grid>
  </Grid>
);

QuestionForm.propTypes = {
  maxQuestionOptions: PropTypes.number,
  questionOptions: PropTypes.array,
  purgeState: PropTypes.func,
};

QuestionForm.defaultProps = {
  maxQuestionOptions: questionConstants.MAX_QUESTION_OPTIONS,
  questionOptions: [],
  purgeState: () => {},
};

const mapStateToProps = createStructuredSelector({
  questionOptions: questionSelectors.questionOptionsSelector,
});

const mapDispatchToProps = {
  purgeState: globalActions.purgeState,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(QuestionForm);
