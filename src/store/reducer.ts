import { combineReducers, Reducer } from 'redux';
import { ApplicationState } from './store';
import { SearchActions, searchReducer } from './search';
import { WalletActions, walletReducer } from './wallet';

export type ApplicationActions = SearchActions | WalletActions;

export const reducer: Reducer<ApplicationState, ApplicationActions> = combineReducers({
  search: searchReducer,
  wallet: walletReducer
});
