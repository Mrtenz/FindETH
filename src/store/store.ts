import { applyMiddleware, createStore as createReduxStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationActions, reducer } from './reducer';
import { searchRootSaga, SearchState } from './search';
import { walletSaga, WalletState } from './wallet';
import { ModalState } from './modal';
import { BalanceState } from './balance';
import { balanceSaga } from './balance/sagas';

export interface ApplicationState {
  balance: BalanceState;
  modal: ModalState;
  search: SearchState;
  wallet: WalletState;
}

export const createStore = (): Store<ApplicationState, ApplicationActions> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(balanceSaga);
  sagaMiddleware.run(searchRootSaga);
  sagaMiddleware.run(walletSaga);

  return store;
};
