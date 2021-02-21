import React from 'react';

interface IImageProps {
  alt?: string;
  height?: number;
  path: string;
  size?: number;
  width?: number;
}

export const Image: React.FC<IImageProps> = ({
  alt,
  height,
  path,
  size = 32,
  width,
}) => {
  if (IS_DEVELOPMENT && !alt) {
    console.error(
      'Prop `alt` should be provided to be accessibility compliant',
    );
  }

  return (
    <img
      className="image"
      src={path}
      alt={alt}
      height={height || size}
      width={width || size}
    />
  );
};
