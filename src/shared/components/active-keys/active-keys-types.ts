export type ActiveKeysState<Key extends string = string> = Partial<
  Record<Key, boolean>
>;

export enum ActiveKeyAction {
  SET_ACTIVE,
  SET_INACTIVE,
}

export interface IActiveKeysContext<Key extends string = string> {
  active: ActiveKeysState<Key>;
  setActive: (key: Key) => void;
  setInactive: (key: Key) => void;
  isActive: (key: Key) => boolean;
}

export interface IActiveKeysAction<Key extends string = string> {
  key: Key;
  type: ActiveKeyAction;
}
