import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Placeholder = ({ classes }) => (
  <Grid
    className={classNames(classes.root, classes.placeholder)}
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Typography>Waiting for votes to come in...</Typography>
  </Grid>
);

Placeholder.propTypes = {
  classes: PropTypes.object,
};

Placeholder.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Placeholder);
