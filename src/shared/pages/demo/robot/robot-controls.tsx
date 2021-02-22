import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'shared/components/button';
import { RowSection, RowSectionCell } from 'shared/components/section';
import { KeyboardKeys } from 'shared/types/general';
import { randomEnumValue } from 'shared/utils/random-enum-value';

interface IRobotControlsProps {
  handleClearBoard: () => void;
  handleLeftTurn: () => void;
  handleRightTurn: () => void;
  handleMoveForward: () => void;
  handlePlaceOnBoard: () => void;
  handleReportLocation: () => void;
  isOnBoard?: boolean;
}

export const RobotControls: React.FC<IRobotControlsProps> = ({
  handleClearBoard,
  handleLeftTurn,
  handleRightTurn,
  handleMoveForward,
  handlePlaceOnBoard,
  handleReportLocation,
  isOnBoard,
}) => {
  const action = useRef(KeyboardKeys.ENTER);
  const simulation = useRef<NodeJS.Timer | number>(0);

  const triggerKeyPress = (key: KeyboardKeys) => {
    // Create a keydown event to activate one of the robot's actions
    window.dispatchEvent(new KeyboardEvent('keydown', { key }));
  };

  const handleSimulation = () => {
    // Generate a new action for the robot to take. Note that the array
    // provided is a filter of actions to ignore, including the previous action
    // if it is the 'Space' key to prevent reporting the same thing twice.
    action.current = randomEnumValue(KeyboardKeys, [
      KeyboardKeys.ENTER,
      KeyboardKeys.ESCAPE,
      action.current === KeyboardKeys.SPACE && KeyboardKeys.SPACE,
    ]);

    triggerKeyPress(action.current);
  };

  const handleToggleSimulation = () => {
    if (simulation.current) {
      clearInterval(simulation.current as NodeJS.Timer);
      simulation.current = 0;
    } else {
      if (!isOnBoard) {
        triggerKeyPress(KeyboardKeys.ENTER);
      }

      simulation.current = setInterval(() => handleSimulation(), 1000);
    }
  };

  const onClearBoard = () => {
    if (simulation.current) {
      handleToggleSimulation();
    }

    handleClearBoard();
  };

  // Adds event listener to capture user keyboard events
  useEffect(() => {
    const keyboardEvent = (event: KeyboardEvent) => {
      switch (event.key) {
        case KeyboardKeys.ARROW_LEFT:
          return handleLeftTurn();
        case KeyboardKeys.ARROW_RIGHT:
          return handleRightTurn();
        case KeyboardKeys.ARROW_UP:
          return handleMoveForward();
        case KeyboardKeys.ENTER:
          return handlePlaceOnBoard();
        case KeyboardKeys.ESCAPE:
          return onClearBoard();
        case KeyboardKeys.SPACE:
          return handleReportLocation();
      }
    };

    window.addEventListener('keydown', keyboardEvent);

    return () => {
      window.removeEventListener('keydown', keyboardEvent);
    };
  }, []);

  // Render Robot Information
  return (
    <RowSection>
      <RowSectionCell>
        <Button className="robot-button" onClick={handleToggleSimulation}>
          {simulation.current ? 'Stop Automation' : 'Automate Robot'}
        </Button>
        <br />
        <Button className="robot-button" onClick={handleReportLocation}>
          Report Location
        </Button>
      </RowSectionCell>
      <RowSectionCell>
        <Button className="robot-button" onClick={handlePlaceOnBoard}>
          {isOnBoard ? 'Randomise Position' : 'Place on Board'}
        </Button>
        <br />
        <Button
          className="robot-button"
          disabled={!isOnBoard}
          onClick={onClearBoard}
        >
          Clear Board
        </Button>
      </RowSectionCell>
    </RowSection>
  );
};
