// Represents the list of legal actions the robot can make
export enum RobotActionType {
  ClearBoard,
  MoveForward,
  PlaceOnBoard,
  ReportLocation,
  RotateLeft,
  RotateRight,
}

// Represents the Four Cardinal directions
export enum RobotDirection {
  NORTH = 'North',
  EAST = 'East',
  SOUTH = 'South',
  WEST = 'West',
}

export interface IRobotCoords {
  x: number;
  y: number;
}

export interface IRobotReducerConfig {
  bounds: IRobotCoords;
  maxQuotedLines?: number;
}

export interface IRobotState {
  coords: IRobotCoords;
  direction: RobotDirection;
  isOnBoard?: boolean;
  quotedText: string[];
}
