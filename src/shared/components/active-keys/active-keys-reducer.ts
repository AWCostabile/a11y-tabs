import {
  ActiveKeyAction,
  ActiveKeysState,
  IActiveKeysAction,
} from './active-keys-types';

export const createReducer = <Key extends string = string>() => (
  state: ActiveKeysState<Key>,
  action: IActiveKeysAction,
): ActiveKeysState<Key> => {
  const key = action.key as Key;

  switch (action.type) {
    case ActiveKeyAction.SET_ACTIVE:
      if (key && !state[key]) {
        return { ...state, [key]: true };
      }
      return state;

    case ActiveKeyAction.SET_INACTIVE:
      if (key && !!state[key]) {
        return { ...state, [key]: false };
      }
      return state;

    default:
      return state;
  }
};
