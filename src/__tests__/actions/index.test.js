import * as a from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('keg actions', () => {
  it('toggleForm should create TOGGLE_FORM  action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('make selected keg reset to null', () => {
    expect(a.checkoutKeg()).toEqual({
      type: c.CHECKOUT_KEG
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(
			a.addKeg({
				kegName: "Guiness",
				kegBrand: "Stout",
				kegAlcohol: 8,
				kegPrice: 5,
				kegLeftover: 124,
				id: 1
			})
		).toEqual({
			type: c.ADD_KEG,
			kegName: "Guiness",
			kegBrand: "Stout",
			kegAlcohol: 8,
			kegPrice: 5,
			kegLeftover: 124,
			id: 1
		});
  });
});