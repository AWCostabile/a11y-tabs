import { randomEnumValue } from 'shared/utils/random-enum-value';
import { RobotDirection, IRobotCoords, IRobotState } from './robot-types';

// Moves the robot by one space in the current facing direction
// provided that it does not exceed the bounds of the 'game board'
export const getNextRobotCoords = (
  { coords, direction }: IRobotState,
  bounds: IRobotCoords,
): IRobotCoords => {
  if ([RobotDirection.NORTH, RobotDirection.SOUTH].includes(direction)) {
    const y = coords.y + (direction === RobotDirection.SOUTH ? -1 : 1);

    return y >= 0 && y < bounds.y ? { ...coords, y } : coords;
  } else {
    const x = coords.x + (direction === RobotDirection.EAST ? 1 : -1);

    return x >= 0 && x < bounds.x ? { ...coords, x } : coords;
  }
};

// Creates a randomised X and Y coordinate for the robot as well
// as facing the robot in one of the four cardinal directions
export const getRandomDirectionAndPosition = (
  bounds: IRobotCoords,
  isOnBoard?: boolean,
): Omit<IRobotState, 'quotedText'> => ({
  coords: {
    x: Math.floor(Math.random() * bounds.x),
    y: Math.floor(Math.random() * bounds.x),
  },
  direction: randomEnumValue(RobotDirection),
  isOnBoard,
});

// Rotates the robot to the left by 90 degrees in one of
// the four cardinal directions
export const getRobotLeftHandTurn = (
  direction: RobotDirection,
): RobotDirection => {
  switch (direction) {
    case RobotDirection.NORTH:
      return RobotDirection.WEST;
    case RobotDirection.EAST:
      return RobotDirection.NORTH;
    case RobotDirection.SOUTH:
      return RobotDirection.EAST;
    case RobotDirection.WEST:
      return RobotDirection.SOUTH;
  }
};

// Rotates the robot to the right by 90 degrees in one of
// the four cardinal directions
export const getRobotRightHandTurn = (
  direction: RobotDirection,
): RobotDirection => {
  switch (direction) {
    case RobotDirection.NORTH:
      return RobotDirection.EAST;
    case RobotDirection.EAST:
      return RobotDirection.SOUTH;
    case RobotDirection.SOUTH:
      return RobotDirection.WEST;
    case RobotDirection.WEST:
      return RobotDirection.NORTH;
  }
};

// Builds a human readable string that can be printed to
// represent the current position of the robot and the direction
// in which it is facing
export const getRobotQueryText = (
  { coords, direction, isOnBoard }: IRobotState,
  bounds: IRobotCoords,
): string | undefined => {
  if (!isOnBoard) {
    console.warn(
      'Tried to make the robot report when it is currently not on the board!',
    );

    return;
  }

  const xEdge = coords.x === 0 ? 'left' : coords.x === bounds.x - 1 && 'right';
  const yEdge = coords.y === 0 ? 'bottom' : coords.y === bounds.y - 1 && 'top';
  const yFromTop = bounds.y - coords.y - 1;

  let position: string;

  // Creates a nicely worded position based whether the robot is currently
  // situated at an edge, including at a given corder.
  if (xEdge && yEdge) {
    position = `at the ${yEdge} ${xEdge} corner`;
  } else if (xEdge) {
    position = `at the ${xEdge} edge, ${toSpaces(yFromTop, 'top')}`;
  } else if (yEdge) {
    position = `at the ${yEdge} edge, ${toSpaces(coords.x, 'left')}`;
  } else {
    position = `${toSpaces(coords.x, 'left')}, ${toSpaces(yFromTop, 'top')}`;
  }

  return `I am currently ${position}, position [${coords.x}, ${coords.y}], and facing ${direction}!`;
};

// Creates a
const toSpaces = (spaces: number, edge: string) =>
  `${spaces} space${spaces !== 1 ? 's' : ''} from the ${edge}`;
