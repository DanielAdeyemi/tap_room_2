import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';
import checkoutKegReducer from './checkout-keg-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainKegList: kegListReducer,
  selectedKeg: checkoutKegReducer
});

export default rootReducer;