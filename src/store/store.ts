import { applyMiddleware, createStore as createReduxStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationActions, reducer } from './reducer';
import { searchRootSaga, SearchState } from './search';
import { walletSaga, WalletState } from './wallet';

export interface ApplicationState {
  search: SearchState;
  wallet: WalletState;
}

export const createStore = (): Store<ApplicationState, ApplicationActions> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(searchRootSaga);
  sagaMiddleware.run(walletSaga);

  return store;
};
