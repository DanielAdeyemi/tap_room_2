import * as a from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('keg actions', () => {
  it('toggleForm should create TOGGLE_FORM  action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});