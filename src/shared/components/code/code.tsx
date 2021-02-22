import React from 'react';

interface ICodeProps {
  full?: boolean;
}

export const Code: React.FC<ICodeProps> = ({ children, full }) =>
  full ? (
    <pre className="code-full">{children}</pre>
  ) : (
    <span className="code-tag">{children}</span>
  );
