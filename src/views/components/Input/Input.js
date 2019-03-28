import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styles from './styles';

const Input = props => {
  const passThroughProps = {
    ...props,
  };
  delete passThroughProps.classes;
  delete passThroughProps.maxLength;
  delete passThroughProps.errorMessage;

  return (
    <Fragment>
      <TextField
        error={!!props.errorMessage}
        fullWidth
        inputProps={{
          maxLength: props.maxLength,
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{ classes: { root: props.classes.input } }}
        InputLabelProps={{ classes: { root: props.classes.label } }}
        variant="outlined"
        {...passThroughProps}
      />
      <Typography variant="caption" color="error">
        {props.errorMessage}
      </Typography>
    </Fragment>
  );
};

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  errorMessage: null,
};

export default withStyles(styles)(Input);
