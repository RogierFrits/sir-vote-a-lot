import * as actions from './actions';
import reducer from './reducers';

describe('error reducer', () => {
  describe('errorInfo', () => {
    describe('set', () => {
      const initialState = {
        errorInfo: {},
      };

      const result = reducer(
        initialState,
        actions.setError('myId', 'This is the error message')
      );

      it('stores the error in errorInfo', () => {
        expect(result.errorInfo.myId.id).toBe('myId');
        expect(result.errorInfo.myId.message).toBe('This is the error message');
      });

      it('is a new errorInfo object', () => {
        expect(result.errorInfo === initialState.errorInfo).toBe(false);
      });
    });

    describe('clear', () => {
      const initialState = {
        errorInfo: {
          myId: {
            id: 'myId',
            message: 'This is the error message',
          },
        },
      };

      const result = reducer(initialState, actions.clearError('myId'));

      it('clears the error in errorInfo', () => {
        expect(!!result.errorInfo.myId).toBe(false);
      });

      it('is a new errorInfo object', () => {
        expect(result.errorInfo === initialState.errorInfo).toBe(false);
      });
    });
  });
});
