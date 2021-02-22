import React from 'react';
import { IImageProps, Image } from 'shared/components/image';
import {
  ROBOT_EAST,
  ROBOT_NORTH,
  ROBOT_SOUTH,
  ROBOT_WEST,
} from 'shared/constants/statics';
import { IUiComponent } from 'shared/types/ui-component';
import { RobotDirection } from './robot-types';

interface IRobotSpriteProps extends IUiComponent {
  direction: RobotDirection;
}

export const RobotSprite: React.FC<IRobotSpriteProps> = ({
  direction,
  ...props
}) => {
  const imageProps: Omit<IImageProps, 'path'> = {
    ...props,
    alt: direction,
    className: 'robot-sprite',
  };

  switch (direction) {
    case RobotDirection.NORTH:
      return <Image {...imageProps} path={ROBOT_NORTH} />;

    case RobotDirection.EAST:
      return <Image {...imageProps} path={ROBOT_EAST} />;

    case RobotDirection.SOUTH:
      return <Image {...imageProps} path={ROBOT_SOUTH} />;

    case RobotDirection.WEST:
      return <Image {...imageProps} path={ROBOT_WEST} />;
  }
};
