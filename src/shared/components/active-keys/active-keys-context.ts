import { createContext } from 'react';
import { IActiveKeysContext } from './active-keys-types';

export const ActiveKeysContext = createContext<IActiveKeysContext<any>>({
  active: {},
  isActive: () => false,
  setActive: () => null,
  setInactive: () => null,
});
