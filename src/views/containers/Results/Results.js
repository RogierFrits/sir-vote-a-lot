import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { answerSelectors } from '../../../state/answer';
import { questionSelectors } from '../../../state/question';
import BarChart from '../../components/BarChart/BarChart';
import Divider from '../../components/Divider/Divider';
import Placeholder from './Placeholder';
import styles from './styles';

export const Results = ({
  classes,
  questionText,
  answersAmount,
  answerChartData,
}) => {
  if (!answersAmount) {
    return <Placeholder />;
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

        <BarChart
          data={answerChartData}
          xAxisDataKey="questionOptionText"
          barDataKey="amount"
          margin={{ left: -20, right: 5, bottom: 5 }}
        />
      </Grid>

      <Grid item>
        <Grid
          container
          item
          justify="flex-start"
          alignItems="center"
          direction="row"
        >
          <Grid item>{`Total votes: ${answersAmount}`}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Results.propTypes = {
  questionText: PropTypes.string,
  answersAmount: PropTypes.number,
  answerChartData: PropTypes.array,
};

Results.defaultProps = {
  questionText: '',
  answersAmount: 0,
  answerChartData: [],
};

const mapStateToProps = createStructuredSelector({
  questionText: questionSelectors.questionTextSelector,
  answersAmount: answerSelectors.answersAmountSelector,
  answerChartData: answerSelectors.answerChartDataSelector,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Results);
