import {
  getNextRobotCoords,
  getRandomDirectionAndPosition,
  getRobotLeftHandTurn,
  getRobotQueryText,
  getRobotRightHandTurn,
} from './robot-utils';
import {
  IRobotPlace,
  IRobotReducerConfig,
  IRobotState,
  RobotAction,
  RobotActionType,
  RobotDirection,
} from './robot-types';

// Creates a reducer for dispatching the legal actions for the robot
// based on a set of X and Y maximum bounds. This allows the reducer
// to be scalable beyond the limits imposed by the specific challenge
export const createRobotReducer = ({
  bounds,
  maxQuotedLines = 10,
}: IRobotReducerConfig) => (
  state: IRobotState,
  action: RobotAction<any>,
): IRobotState => {
  if (
    !state.isOnBoard &&
    ![
      RobotActionType.PlaceOnBoard,
      RobotActionType.PlaceRandomly,
      RobotActionType.ReportLocation,
    ].includes(action.type)
  ) {
    return state;
  }

  switch (action.type) {
    case RobotActionType.ClearBoard:
      return { ...initialState, quotedText: state.quotedText };
    case RobotActionType.MoveForward:
      return { ...state, coords: getNextRobotCoords(state, bounds) };
    case RobotActionType.PlaceOnBoard:
      const nextState = (action as RobotAction<IRobotPlace>).state;

      return {
        ...state,
        coords: { x: nextState.x || 0, y: nextState.y || 0 },
        direction: nextState.f || RobotDirection.NORTH,
        isOnBoard: true,
      };
    case RobotActionType.PlaceRandomly:
      return { ...state, ...getRandomDirectionAndPosition(bounds, true) };
    case RobotActionType.ReportLocation:
      const report = getRobotQueryText(state, bounds);
      return report
        ? {
            ...state,
            quotedText: [
              report,
              ...state.quotedText.slice(0, maxQuotedLines - 1),
            ],
          }
        : state;
    case RobotActionType.RotateLeft:
      return { ...state, direction: getRobotLeftHandTurn(state.direction) };
    case RobotActionType.RotateRight:
      return { ...state, direction: getRobotRightHandTurn(state.direction) };
    default:
      return state;
  }
};

// Default State for the Robot
export const initialState: IRobotState = {
  coords: {
    x: 0,
    y: 0,
  },
  direction: RobotDirection.NORTH,
  isOnBoard: false,
  quotedText: [],
};
