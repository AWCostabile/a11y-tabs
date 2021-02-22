import React, { PropsWithChildren, useEffect, useReducer } from 'react';
import { ActiveKeysContext } from './active-keys-context';
import { createReducer } from './active-keys-reducer';
import { ActiveKeyAction } from './active-keys-types';

interface IActiveKeysProviderProps<Key extends string = string> {
  trackedKeys: Key[];
}

export const ActiveKeysProvider = <Key extends string = string>({
  children,
  trackedKeys,
}: PropsWithChildren<IActiveKeysProviderProps<Key>>) => {
  const [active, dispatcher] = useReducer(createReducer<Key>(), {});

  const setActive = (key: Key) =>
    trackedKeys.includes(key) &&
    dispatcher({ key, type: ActiveKeyAction.SET_ACTIVE });

  const setInactive = (key: Key) =>
    trackedKeys.includes(key) &&
    dispatcher({ key, type: ActiveKeyAction.SET_INACTIVE });

  const isActive = (key: Key) =>
    trackedKeys.includes(key) && !!active[key as Key];

  useEffect(() => {
    const onKeyDown = ({ key }: KeyboardEvent) => setActive(key as Key);
    const onKeyUp = ({ key }: KeyboardEvent) => setInactive(key as Key);

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <ActiveKeysContext.Provider
      value={{ active, isActive, setActive, setInactive }}
    >
      {children}
    </ActiveKeysContext.Provider>
  );
};
