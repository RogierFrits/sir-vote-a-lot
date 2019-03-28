import DividerMUI from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';

const Divider = ({ classes }) => (
  <DividerMUI light variant="middle" classes={classes} />
);

export default withStyles(styles)(Divider);
