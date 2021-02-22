import {
  createRobotReducer,
  initialState,
} from 'shared/pages/demo/robot/robot-reducer';
import {
  IRobotCoords,
  RobotAction,
  RobotActionType,
  RobotDirection,
} from 'shared/pages/demo/robot/robot-types';
import { getRobotQueryText } from 'shared/pages/demo/robot/robot-utils';

const bounds: IRobotCoords = { x: 5, y: 5 };

// helper function to run through a set of instructions on the robot
const parseInstructions = (instructions: Array<RobotAction<any>>) =>
  instructions.reduce((state, action) => reducer(state, action), initialState);

// Instance of reducer to run tests
const reducer = createRobotReducer({ bounds, maxQuotedLines: 5 });

describe('Robot App', () => {
  const atOrigin = getRobotQueryText(
    { ...initialState, isOnBoard: true },
    bounds,
  );

  const at3x3yEast = getRobotQueryText(
    {
      coords: { x: 3, y: 3 },
      direction: RobotDirection.EAST,
      isOnBoard: true,
    },
    bounds,
  );

  it(`should place on board at origin and output\n\t"${atOrigin}"`, () => {
    const finalState = parseInstructions([
      {
        state: { x: 0, y: 0, f: RobotDirection.NORTH },
        type: RobotActionType.PlaceOnBoard,
      },
      { type: RobotActionType.ReportLocation },
    ]);

    expect(finalState.quotedText[0]).toEqual(atOrigin);
  });

  it(`should place on board at origin, then apply movement and successfuly output\n\t"${at3x3yEast}"`, () => {
    const finalState = parseInstructions([
      {
        state: { x: 0, y: 0, f: RobotDirection.NORTH },
        type: RobotActionType.PlaceOnBoard,
      },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.RotateRight },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.ReportLocation },
    ]);

    expect(finalState.quotedText[0]).toEqual(at3x3yEast);
  });

  it('should ignore all instructions and output `undefined` when not placed', () => {
    const finalState = parseInstructions([
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.RotateRight },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.MoveForward },
      { type: RobotActionType.ReportLocation },
    ]);

    expect(finalState.quotedText[0]).toBe(undefined);
  });
});
