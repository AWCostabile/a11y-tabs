import React, { useEffect, useState } from 'react';
import { TitleContext } from 'shared/utils/title';
import { useDebounce } from 'shared/utils/use-debounce';

export const TitleProvider: React.FC = ({ children }) => {
  const [title, internalSetTitle] = useState('loading...');

  const setTitle = useDebounce(internalSetTitle, 50);

  useEffect(() => {
    const [titleElement] = Array.from(
      document.getElementsByTagName('title') || [],
    );

    if (titleElement) {
      titleElement.innerHTML = title;
    }
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
