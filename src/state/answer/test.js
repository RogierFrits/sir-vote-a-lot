import * as actions from './actions';
import reducer from './reducers';

describe('answer reducer', () => {
  describe('answers', () => {
    describe('create', () => {
      const initialState = {
        answers: [],
      };

      const questionOptionId = 'abc123';

      const result = reducer(
        initialState,
        actions.createAnswer(questionOptionId)
      );

      it('stores the questionOptionId in the array', () => {
        expect(result.answers[0].questionOptionId).toBe(questionOptionId);
      });

      it('adds a created timestamp', () => {
        expect(!!result.answers[0].created).toBe(true);
      });

      it('is a new answers array', () => {
        expect(initialState.answers === result.answers).toBe(false);
      });
    });
  });
});
