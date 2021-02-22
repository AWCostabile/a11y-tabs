import React, { ReactNode } from 'react';
import {
  ColSection,
  RowSection,
  RowSectionCell,
} from 'shared/components/section';

interface IRobotDisplayArea {
  isPortrait?: boolean;
  maxHeight?: number | string;
  controls: ReactNode;
  table: ReactNode;
}

export const RobotContainer: React.FC<IRobotDisplayArea> = ({
  controls,
  maxHeight,
  isPortrait,
  table,
}) =>
  isPortrait ? (
    <ColSection className="robot-display-area">
      {table}
      {controls}
    </ColSection>
  ) : (
    <RowSection className="robot-display-area">
      <RowSectionCell>{table}</RowSectionCell>
      <RowSectionCell grow style={{ maxHeight }}>
        {controls}
      </RowSectionCell>
    </RowSection>
  );
