import { combineReducers, Reducer } from 'redux';
import { ApplicationState } from './store';
import { ModalActions, modalReducer } from './modal';
import { SearchActions, searchReducer } from './search';
import { WalletActions, walletReducer } from './wallet';

export type ApplicationActions = ModalActions | SearchActions | WalletActions;

export const reducer: Reducer<ApplicationState, ApplicationActions> = combineReducers({
  modal: modalReducer,
  search: searchReducer,
  wallet: walletReducer
});
