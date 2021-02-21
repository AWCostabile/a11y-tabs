import React from 'react';

interface IUserAvatar {
  color?: string;
  givenName: string;
  familyName: string;
  size?: number;
}

export const UserAvatar: React.FC<IUserAvatar> = ({
  color = '#0066BB',
  givenName = '',
  familyName = '',
  size = 32,
}) => {
  const initials = `${givenName.charAt(0)}${familyName.charAt(0)}`;

  return (
    <div
      className="user-avatar"
      style={{ borderColor: color, height: size, width: size }}
    >
      <div style={{ color, fontSize: size * 0.5, top: size * 0.05 }}>
        {initials.toUpperCase()}
      </div>
    </div>
  );
};
