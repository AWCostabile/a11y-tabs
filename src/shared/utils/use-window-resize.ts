import { useEffect, useState } from 'react';

interface ISizeRef {
  height: number;
  width: number;
}

export const useWindowSize = () => {
  const [sizes, setSizes] = useState<ISizeRef>({ height: 0, width: 0 });

  useEffect(() => {
    const onResizeHandler = () => {
      setSizes({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', onResizeHandler);
    onResizeHandler();

    return () => {
      window.removeEventListener('resize', onResizeHandler);
    };
  }, []);

  return sizes;
};
