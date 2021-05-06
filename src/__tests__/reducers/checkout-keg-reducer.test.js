import { CHECKOUT_KEG } from "../../actions/ActionTypes";
import checkoutKegReducer from "../../reducers/checkout-keg-reducer";

describe('checkoutKegReducer', () => {
  test('Should return selectedKeg: null when called', () => {
    expect(checkoutKegReducer(!null, { type: CHECKOUT_KEG})).toEqual(null);
  });
});
