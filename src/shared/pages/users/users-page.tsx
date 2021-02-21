import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { getUsers } from 'shared/api/users-api';
import { Card } from 'shared/components/card';
import { RowSection, RowSectionCell } from 'shared/components/section';
import { Spinner } from 'shared/components/spinner';
import { UserAvatar } from 'shared/components/user-avatar';
import { DateFormats } from 'shared/constants/formats';
import { PageLayout } from 'shared/layouts/page';
import { IUserModel } from 'shared/types/models/user-model';

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<null | IUserModel[]>(null);

  useEffect(() => {
    getUsers().then((results) => setUsers(results));
  }, []);

  const header = (
    <React.Fragment>Users {users === null && <Spinner />}</React.Fragment>
  );

  return (
    <PageLayout header={header} title="User Settings">
      <p>Demo of Fetching and Displaying User Information</p>
      {users !== null &&
        users.map((user) => (
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
    </PageLayout>
  );
};
