import React, { useContext } from 'react';
import { TitleContext } from 'shared/utils/title';

interface IDocumentTitleProps {
  title?: string;
}

export const DocumentTitle: React.FC<IDocumentTitleProps> = ({
  children,
  title,
}) => {
  const titleContext = useContext(TitleContext);

  if (title) {
    titleContext.setTitle(`Accessibility Tabs | ${title}`);
  }

  return <React.Fragment>{children}</React.Fragment>;
};
