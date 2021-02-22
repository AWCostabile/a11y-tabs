import React from 'react';
import { IUiComponent } from 'shared/types/ui-component';
import { classNames } from 'shared/utils/classnames';

export interface IImageProps extends IUiComponent {
  alt?: string;
  height?: number | string;
  path: string;
  size?: number | string;
  width?: number | string;
}

export const Image: React.FC<IImageProps> = ({
  alt,
  className,
  path,
  size = 32,
  height,
  width,
  style,
}) => {
  if (IS_DEVELOPMENT && !alt) {
    console.error(
      'Prop `alt` should be provided to be accessibility compliant',
    );
  }

  return (
    <img
      className={classNames('image', className)}
      src={path}
      alt={alt}
      style={{
        height: height || size,
        width: width || size,
        ...style,
      }}
    />
  );
};
