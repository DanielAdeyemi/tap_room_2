import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
	const { kegName, kegBrand, kegAlcohol, kegPrice, kegLeftover, id } = action;
	switch (action.type) {
		case c.ADD_KEG:
			return Object.assign({}, state, {
				[id]: {
					kegName: kegName,
					kegBrand: kegBrand,
					kegAlcohol: kegAlcohol,
					kegPrice: kegPrice,
					kegLeftover: kegLeftover,
					id: id,
				}
			});
		default:
			return state;
	}
};
