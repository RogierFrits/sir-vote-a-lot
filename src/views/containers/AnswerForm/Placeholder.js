import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Placeholder = ({ minimumAnswerOptions, classes }) => (
  <Grid
    className={classNames(classes.root, classes.placeholder)}
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Typography>
      {`To vote, please define your question and at least ${minimumAnswerOptions} answer options.`}
    </Typography>
  </Grid>
);

Placeholder.propTypes = {
  classes: PropTypes.object,
  minimumAnswerOptions: PropTypes.number,
};

Placeholder.defaultProps = {
  classes: {},
  minimumAnswerOptions: 2,
};

export default withStyles(styles)(Placeholder);
