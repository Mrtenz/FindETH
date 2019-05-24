import { combineReducers, Reducer } from 'redux';
import { ApplicationState } from './store';
import { ModalActions, modalReducer } from './modal';
import { SearchActions, searchReducer } from './search';
import { WalletActions, walletReducer } from './wallet';
import { NetworkActions, networkReducer } from './network';
import { EnsActions, ensReducer } from './ens';

export type ApplicationActions =
  | EnsActions
  | ModalActions
  | NetworkActions
  | SearchActions
  | WalletActions;

export const reducer: Reducer<ApplicationState, ApplicationActions> = combineReducers({
  ens: ensReducer,
  network: networkReducer,
  modal: modalReducer,
  search: searchReducer,
  wallet: walletReducer
});
