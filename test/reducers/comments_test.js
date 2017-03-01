import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import commentReducer from '../../src/reducers/comments';

describe('Comments Reducer', () => {
  it('handles action with uknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment'
    };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
