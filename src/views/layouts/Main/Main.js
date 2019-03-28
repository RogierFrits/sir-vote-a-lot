import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import AnswerForm from '../../containers/AnswerForm/AnswerForm';
import QuestionForm from '../../containers/QuestionForm/QuestionForm';
import Results from '../../containers/Results/Results';
import styles from './styles';

const Main = ({ classes }) => (
  <Fragment>
    <Typography className={classes.headerText} variant="h2">
      Sir Vote-a-lot
    </Typography>

    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.box} item xs={12} sm={4}>
          <QuestionForm />
        </Grid>
        <Grid className={classes.box} item xs={12} sm={4}>
          <AnswerForm />
        </Grid>
        <Grid className={classes.box} item xs={12} sm={4}>
          <Results />
        </Grid>
      </Grid>
    </div>
  </Fragment>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
