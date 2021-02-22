import { MouseEvent } from 'react';

export enum KeyboardKeys {
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
  ARROW_UP = 'ArrowUp',
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  SPACE = ' ',
}

export type ClickEvent<
  DomElement extends HTMLElement = HTMLElement
> = MouseEvent<DomElement, globalThis.MouseEvent>;
