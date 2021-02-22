import React from 'react';
import { Image } from 'shared/components/image';
import { NavButton } from 'shared/components/nav-button';
import { RowSection, RowSectionCell } from 'shared/components/section';
import { UserAvatar } from 'shared/components/user-avatar';
import { LOGO } from 'shared/constants/statics';
import { IUserModel } from 'shared/types/models/user-model';
import { INavRoute } from 'shared/types/nav-routes';

interface INavBarProps {
  navRoutes: INavRoute[];
  userInfo: Pick<IUserModel, 'givenName' | 'familyName'>;
}

export const NavBar: React.FC<INavBarProps> = ({ navRoutes, userInfo }) => (
  <RowSection className="nav-bar">
    <RowSectionCell>
      <Image alt="accessibility logo" path={LOGO} width={48} height={28} />
    </RowSectionCell>
    <RowSectionCell ariaRole="tablist" grow>
      {navRoutes.map((navRoute) => (
        <NavButton
          className="nav-item"
          key={navRoute.path}
          id={navRoute.id}
          to={navRoute.path}
        >
          {navRoute.label}
        </NavButton>
      ))}
    </RowSectionCell>
    <RowSectionCell>
      <UserAvatar
        color="white"
        familyName={userInfo.familyName}
        givenName={userInfo.givenName}
      />
    </RowSectionCell>
  </RowSection>
);
