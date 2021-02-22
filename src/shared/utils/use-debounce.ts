import { useEffect } from 'react';

// Hook to allow for debounced function calling
export const useDebounce = <Fn extends Function>(fn: Fn, delay: number) => {
  let timer: NodeJS.Timeout | number | null = null;

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer as NodeJS.Timeout);
    }
  };

  useEffect(() => clearTimer, []);

  const debounceFunction = function (this: ThisType<Fn>, ...args: any[]) {
    clearTimer();

    timer = setTimeout(() => {
      fn.apply(this, Array.from(args));
    }, delay);
  };

  return (debounceFunction as unknown) as Fn;
};
