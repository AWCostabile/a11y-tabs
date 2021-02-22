import React, { useReducer } from 'react';
import { DemoLayout } from 'shared/layouts/demo';
import { demoRoutes } from '../nav-routes';
import { createRobotReducer, initialState } from './robot-reducer';
import { RobotActionType } from './robot-types';
import { RobotControls } from './robot-controls';
import { RobotTable } from './robot-table';
import { ColSection } from 'shared/components/section';
import { useDebounce } from 'shared/utils/use-debounce';

const bounds = { x: 5, y: 5 };
const reducer = createRobotReducer({ bounds, maxQuotedLines: 20 });

export const RobotPage: React.FC = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  // ROBOT ACTIONS
  const onAction = useDebounce(dispatcher, 50);
  const hasOutput = state.quotedText.length > 0;

  // Render Robot Information
  return (
    <DemoLayout
      navRoutes={demoRoutes}
      subTitle="Toy Robot Exercise"
      tabLabel="robot"
    >
      <RobotTable {...state} bounds={bounds}>
        <ColSection
          className="robot-controls-container"
          header={
            <RobotControls
              handleClearBoard={() =>
                onAction({ type: RobotActionType.ClearBoard })
              }
              handleMoveForward={() =>
                onAction({ type: RobotActionType.MoveForward })
              }
              handlePlaceOnBoard={() =>
                onAction({ type: RobotActionType.PlaceRandomly })
              }
              handleLeftTurn={() =>
                onAction({ type: RobotActionType.RotateLeft })
              }
              handleRightTurn={() =>
                onAction({ type: RobotActionType.RotateRight })
              }
              handleReportLocation={() =>
                onAction({ type: RobotActionType.ReportLocation })
              }
              isOnBoard={state.isOnBoard}
            />
          }
        >
          <pre className="robot-output">
            {hasOutput && '\n Robot Output:\n\n '}
            {state.quotedText
              .map(
                (text, index) =>
                  `${index < 9 ? `0` : ''}${index + 1}:  ${text}`,
              )
              .join('\n ')}
            {hasOutput && '\n\n'}
            {`
 Keyboard:   Action:
 ---------------------------------------------------------------
   ↑         Move Robot
   →         Turn Robot 90° Clock-Wise
   ←         Turn Robot 90° Counter-Clock-Wise
 Enter       Place Robot onto the board / Randomise Position
 Escape      Clear / Remove the robot from the board
 Space       Report Robot&apos;s Current Position and Direction`}
          </pre>
        </ColSection>
      </RobotTable>
    </DemoLayout>
  );
};
