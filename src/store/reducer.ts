import { combineReducers, Reducer } from 'redux';
import { ApplicationState } from './store';
import { ModalActions, modalReducer } from './modal';
import { SearchActions, searchReducer } from './search';
import { WalletActions, walletReducer } from './wallet';
import { balanceReducer } from './balance';

export type ApplicationActions = ModalActions | SearchActions | WalletActions;

export const reducer: Reducer<ApplicationState, ApplicationActions> = combineReducers({
  balance: balanceReducer,
  modal: modalReducer,
  search: searchReducer,
  wallet: walletReducer
});
