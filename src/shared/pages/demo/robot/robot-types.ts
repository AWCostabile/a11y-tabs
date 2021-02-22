// Represents the list of legal actions the robot can make
export enum RobotActionType {
  ClearBoard,
  MoveForward,
  PlaceOnBoard,
  PlaceRandomly,
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

export type RobotAction<State extends object | undefined = undefined> = {
  type: RobotActionType;
} & (State extends undefined
  ? {}
  : {
      state: State;
    });

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

export interface IRobotPlace {
  f: RobotDirection;
  x: number;
  y: number;
}
