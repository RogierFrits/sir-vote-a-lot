import { createSelector } from 'reselect';

const errorState = state => state.error;

export const errorInfoSelector = createSelector(
  errorState,
  error => error.errorInfo
);
