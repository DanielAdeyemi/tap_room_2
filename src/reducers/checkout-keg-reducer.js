import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case c.CHECKIN_KEG:
      return id;
    case c.CHECKOUT_KEG:
      return null;
    default:
      return state;
  }
}