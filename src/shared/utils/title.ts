import { createContext } from 'react';

interface ITitleContext {
  title: string;
  setTitle: (nextTitle: string) => void;
}

export const TitleContext = createContext<ITitleContext>({
  title: 'loading...',
  setTitle: () => {
    return;
  },
});
