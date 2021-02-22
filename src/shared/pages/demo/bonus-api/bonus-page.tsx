import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { getUsers } from 'shared/api/users-api';
import { Card } from 'shared/components/card';
import { RowSection, RowSectionCell } from 'shared/components/section';
import { Spinner } from 'shared/components/spinner';
import { UserAvatar } from 'shared/components/user-avatar';
import { DateFormats } from 'shared/constants/formats';
import { IUserModel } from 'shared/types/models/user-model';
import { DemoLayout } from 'shared/layouts/demo';
import { demoRoutes } from '../nav-routes';

export const BonusApiTestingPage: React.FC = () => {
  const [users, setUsers] = useState<null | IUserModel[]>(null);

  useEffect(() => {
    getUsers().then((results) => setUsers(results));
  }, []);

  // const header = (
  //   <React.Fragment>
  //     <h1>Users</h1> {users === null && <Spinner />}
  //   </React.Fragment>
  // );

  return (
    <DemoLayout
      navRoutes={demoRoutes}
      subTitle="User Settings"
      tabLabel="bonus"
    >
      <p>Demonstration of Fetching and Displaying User Information</p>
      {users === null ? (
        <div className="place-holder">
          <Spinner size={48} />
        </div>
      ) : (
        <React.Fragment>
          {users.map((user) => (
            <Card className="user-card" key={user.id}>
              <RowSection>
                <RowSectionCell>
                  <UserAvatar
                    color={user.color}
                    givenName={user.givenName}
                    familyName={user.familyName}
                  />
                </RowSectionCell>
                <RowSectionCell style={{ paddingTop: 5, width: 140 }}>
                  {user.givenName} {user.familyName}
                </RowSectionCell>
                <RowSectionCell grow style={{ paddingTop: 5 }}>
                  {user.email}
                </RowSectionCell>
                <RowSectionCell style={{ paddingTop: 5 }}>
                  <em>
                    {moment(user.createdAt).format(
                      DateFormats.LocaleDayMonthDateTimeAbr,
                    )}
                  </em>
                </RowSectionCell>
              </RowSection>
            </Card>
          ))}
          <br />
          <p>
            <em>
              <strong>Please Note</strong> The Avatar colours are set by a third
              party API and therefore may not be a11y compliant.
            </em>
          </p>
        </React.Fragment>
      )}
    </DemoLayout>
  );
};
