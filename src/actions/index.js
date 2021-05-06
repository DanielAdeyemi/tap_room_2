import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const checkoutKeg = () => ({
  type: c.CHECKOUT_KEG
});

export const addKeg = (keg) => {
  const { kegName, kegBrand, kegAlcohol, kegPrice, kegLeftover, id } = keg;
  return {
		type: c.ADD_KEG,
		kegName: kegName,
		kegBrand: kegBrand,
		kegAlcohol: kegAlcohol,
		kegPrice: kegPrice,
		kegLeftover: kegLeftover,
		id: id
	};
}; 