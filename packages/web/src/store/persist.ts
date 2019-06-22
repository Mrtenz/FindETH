import { Action, Reducer } from 'redux';

/**
 * Persist a Redux reducer to local storage.
 *
 * @param {string} key The key to use in local storage.
 * @param {Reducer<S, A>} reducer The reducer to persist.
 * @return {Reducer<S, A>} A reducer that saves the new state
 * @template S,A
 */
export const persist = <S, A extends Action>(
  key: string,
  reducer: Reducer<S, A>
): Reducer<S, A> => {
  return (state, action): S => {
    const newState = reducer(state, action);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(newState));
    }

    return newState;
  };
};

/**
 * If the key exists in local storage, the value is shallow-merged with the initial state and
 * returned. Otherwise, the initial state is returned.
 *
 * @param {string} key The key to use in local storage.
 * @param {S} initialState The initial state.
 * @return {S} The new state based on local storage and the initial state.
 * @template S
 */
export const hydrate = <S>(key: string, initialState: S): S => {
  if (typeof localStorage !== 'undefined') {
    const value = localStorage.getItem(key);
    if (value) {
      return {
        ...initialState,
        ...JSON.parse(value)
      };
    }
  }

  return initialState;
};
