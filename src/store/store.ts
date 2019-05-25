import { applyMiddleware, createStore as createReduxStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationActions, reducer } from './reducer';
import { searchRootSaga, SearchState } from './search';
import { WalletState } from './wallet';
import { ModalState } from './modal';
import { networkSaga, NetworkState } from './network';
import { ensSaga, EnsState } from './ens';

export interface ApplicationState {
  ens: EnsState;
  modal: ModalState;
  network: NetworkState;
  search: SearchState;
  wallet: WalletState;
}

export const createStore = (): Store<ApplicationState, ApplicationActions> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(ensSaga);
  sagaMiddleware.run(networkSaga);
  sagaMiddleware.run(searchRootSaga);

  return store;
};
