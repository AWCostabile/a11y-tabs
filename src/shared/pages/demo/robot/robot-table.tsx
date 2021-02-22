import React, { useMemo } from 'react';
import { Image } from 'shared/components/image';
import { ROBOT_TABLE } from 'shared/constants/statics';
import { useWindowSize } from 'shared/utils/use-window-resize';
import { RobotSprite } from './robot-sprite';
import { IRobotCoords, IRobotState } from './robot-types';
import { RobotContainer } from './robot-container';

interface IRobotTableProps
  extends Pick<IRobotState, 'coords' | 'direction' | 'isOnBoard'> {
  bounds: IRobotCoords;
}

export const RobotTable: React.FC<IRobotTableProps> = ({
  bounds,
  children,
  coords,
  direction,
  isOnBoard,
  ...imageProps
}) => {
  const { height, width } = useWindowSize();

  // Ensure table has a maximum render size based on the smaller value
  // between the viewport's portrait or landscape dimensions, but only to
  // a minimum constraint value
  const sizes = useMemo(() => {
    // Max height and width take into consideration the space occupied by
    // the given dimension's surrounding content;
    const maxHeight = height - 300;
    const maxWidth = width - 48;

    const isPortrait = maxHeight > maxWidth;
    const maxSize = isPortrait ? maxWidth : maxHeight;
    const boardSize = maxSize >= 100 ? maxSize : 100;

    return {
      boardSize,
      isPortrait,
      xUnits: Math.floor(boardSize / (bounds.x + 1)),
      yUnits: Math.floor(boardSize / (bounds.y + 1)),
    };
  }, [height, width, bounds.x, bounds.y]);

  const robotStyle = {
    height: sizes.yUnits,
    width: sizes.xUnits,
    left: sizes.xUnits * coords.x,
    top: sizes.yUnits * coords.y,
  };

  return (
    <RobotContainer
      controls={children}
      isPortrait={sizes.isPortrait}
      maxHeight={sizes.boardSize}
      table={
        <div className="robot-table-container">
          <Image
            {...imageProps}
            alt="Table"
            className="robot-table"
            size={sizes.boardSize}
            path={ROBOT_TABLE}
          />
          {isOnBoard && (
            <RobotSprite style={robotStyle} direction={direction} />
          )}
        </div>
      }
    />
  );
};
