import React from 'react';

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
> = React.MouseEvent<DomElement, globalThis.MouseEvent>;

export type FocusEvent<
  DomElement extends HTMLElement = HTMLElement
> = React.FocusEvent<DomElement>;
