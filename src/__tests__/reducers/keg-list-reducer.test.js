import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegListReducer', () => {
  let action;
  const kegData = {
		kegName: 'Guiness',
		kegBrand: 'stout',
		kegAlcohol: 7,
		kegPrice: 5,
		kegLeftover: 124,
		id: 1
	};
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(kegListReducer({}, { type:null })).toEqual({});
  });

  test('Should add new keg to the mainKegList', () => {
    const { kegName, kegBrand, kegAlcohol, kegPrice, kegLeftover, id} = kegData;
    action = {
      type: c.ADD_KEG,
      kegName: kegName,
      kegBrand: kegBrand,
      kegAlcohol: kegAlcohol,
      kegPrice: kegPrice,
      kegLeftover: kegLeftover,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        kegName: kegName,
        kegBrand: kegBrand,
        kegAlcohol: kegAlcohol,
        kegPrice: kegPrice,
        kegLeftover: kegLeftover,
        id: id
      }
    });
  });
});