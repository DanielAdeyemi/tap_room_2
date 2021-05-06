import { CHECKOUT_KEG } from "../../actions/ActionTypes";
import checkoutKegReducer from "../../reducers/checkout-keg-reducer";

describe('checkoutKegReducer', () => {
  test('Should return selectedKeg: null when called', () => {
    expect(checkoutKegReducer(null, { type: null})).toEqual(null);
  });

  test("Should return selectedKeg: selectedKeg[id]", () => {
		expect(checkoutKegReducer(null, { type: CHECKOUT_KEG, id : 1})).toEqual(1);
	});
});
