import * as actions from './actions';
import reducer from './reducers';

describe('question reducer', () => {
  describe('questionText', () => {
    describe('set', () => {
      const initialState = {
        questionText: '',
      };

      const questionText = 'How are you today?';

      const result = reducer(
        initialState,
        actions.setQuestionText(questionText)
      );

      it('should set the question text', () => {
        expect(result.questionText).toEqual(questionText);
      });
    });
  });

  describe('questionOptions', () => {
    describe('create', () => {
      const initialState = {
        questionOptions: [],
      };

      const questionOptionText = 'Good';

      const result = reducer(
        initialState,
        actions.createQuestionOption(questionOptionText)
      );

      it('should add the question option text', () => {
        expect(result.questionOptions[0].questionOptionText).toBe(
          questionOptionText
        );
      });

      it('should have an id', () => {
        expect(!!result.questionOptions[0].id).toBe(true);
      });

      it('should have a created', () => {
        expect(!!result.questionOptions[0].created).toBe(true);
      });

      it('should not have a modified yet', () => {
        expect(!!result.questionOptions[0].modified).toBe(false);
      });
    });

    describe('set', () => {
      describe('when found', () => {
        const initialState = {
          questionOptions: [
            {
              id: '1',
              questionOptionText: 'Good',
              created: 1553682985257,
            },
            {
              id: '2',
              questionOptionText: 'Bad',
              created: 1553683002071,
            },
          ],
        };

        const result = reducer(
          initialState,
          actions.setQuestionOption('1', 'Great')
        );

        it('should be a different questionOptions array', () => {
          expect(initialState.questionOptions === result.questionOptions).toBe(
            false
          );
        });

        it('should update the question option text', () => {
          expect(result.questionOptions[0].questionOptionText).toBe('Great');
        });

        it('should update the modified property', () => {
          expect(!!result.questionOptions[0].modified).toBe(true);
        });

        it('should not change the created property', () => {
          expect(result.questionOptions[0].created).toBe(1553682985257);
        });
      });

      describe('when not found', () => {
        const initialState = {
          questionOptions: [
            {
              id: '1',
              questionOptionText: 'Good',
              created: 1553682985257,
            },
            {
              id: '2',
              questionOptionText: 'Bad',
              created: 1553683002071,
            },
          ],
        };

        const result = reducer(
          initialState,
          actions.setQuestionOption('3', 'Great')
        );

        it('should be the same questionOptions array', () => {
          expect(initialState.questionOptions === result.questionOptions).toBe(
            true
          );
        });

        it('should not add the new question option', () => {
          expect(result.questionOptions.length).toBe(2);
        });

        it('should not change the existing values', () => {
          expect(result.questionOptions[0].questionOptionText).toBe('Good');
          expect(result.questionOptions[1].questionOptionText).toBe('Bad');
        });
      });
    });

    describe('remove', () => {
      describe('when found', () => {
        const initialState = {
          questionOptions: [
            {
              id: '1',
              questionOptionText: 'Good',
              created: 1553682985257,
            },
            {
              id: '2',
              questionOptionText: 'Bad',
              created: 1553683002071,
            },
          ],
        };

        const result = reducer(initialState, actions.removeQuestionOption('1'));

        it('should be a different questionOptions array', () => {
          expect(initialState.questionOptions === result.questionOptions).toBe(
            false
          );
        });

        it('should modify the array length', () => {
          expect(result.questionOptions.length).toBe(1);
        });

        it('should leave other existing elements', () => {
          expect(result.questionOptions[0].questionOptionText).toBe('Bad');
        });
      });

      describe('when not found', () => {
        const initialState = {
          questionOptions: [
            {
              id: '1',
              questionOptionText: 'Good',
              created: 1553682985257,
            },
            {
              id: '2',
              questionOptionText: 'Bad',
              created: 1553683002071,
            },
          ],
        };

        const result = reducer(initialState, actions.removeQuestionOption('3'));

        it('should be the same questionOptions array', () => {
          expect(initialState.questionOptions === result.questionOptions).toBe(
            true
          );
        });

        it('should not remove elements from the array', () => {
          expect(result.questionOptions.length).toBe(2);
        });
      });
    });
  });
});
