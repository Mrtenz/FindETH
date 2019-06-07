import { applyMiddleware, createStore as createReduxStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationActions, reducer } from './reducer';
import { ensSaga, EnsState } from './ens';
import { ModalState } from './modal';
import { networkSaga, NetworkState } from './network';
import { searchRootSaga, SearchState } from './search';
import { tokensSaga, TokensState } from './tokens';
import { WalletState } from './wallet';
import { UIState } from './ui';

export interface ApplicationState {
  ens: EnsState;
  modal: ModalState;
  network: NetworkState;
  search: SearchState;
  tokens: TokensState;
  ui: UIState;
  wallet: WalletState;
}

export const createStore = (): Store<ApplicationState, ApplicationActions> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(ensSaga);
  sagaMiddleware.run(networkSaga);
  sagaMiddleware.run(searchRootSaga);
  sagaMiddleware.run(tokensSaga);

  return store;
};
