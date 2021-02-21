import React from 'react';

interface ISpinnerProps {
  color?: string;
  size?: number;
}

export const Spinner: React.FC<ISpinnerProps> = ({
  color = '#AAA',
  size = 18,
}) => {
  const width = Math.ceil(size / 9) || 1;
  const spinnerStyles = (offset: number) => ({
    color,
    backgroundColor: color,
    left: width * offset,
  });

  return (
    <div className="spinner" style={{ height: size, width: size }}>
      <div className="spinner-l" style={{ ...spinnerStyles(2) }}></div>
      <div className="spinner-c" style={{ ...spinnerStyles(4) }}>
        Loading...
      </div>
      <div className="spinner-r" style={{ ...spinnerStyles(6) }}></div>
    </div>
  );
};
