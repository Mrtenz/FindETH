import { combineReducers, Reducer } from 'redux';
import { ApplicationState } from './store';
import { EnsActions, ensReducer } from './ens';
import { ModalActions, modalReducer } from './modal';
import { NetworkActions, networkReducer } from './network';
import { SearchActions, searchReducer } from './search';
import { TokensActions, tokensReducer } from './tokens';
import { UIActions, uiReducer } from './ui';
import { WalletActions, walletReducer } from './wallet';

export type ApplicationActions =
  | EnsActions
  | ModalActions
  | NetworkActions
  | SearchActions
  | TokensActions
  | UIActions
  | WalletActions;

export const reducer: Reducer<ApplicationState, ApplicationActions> = combineReducers({
  ens: ensReducer,
  network: networkReducer,
  modal: modalReducer,
  search: searchReducer,
  tokens: tokensReducer,
  ui: uiReducer,
  wallet: walletReducer
});
