import React from 'react';
import { useAuth } from './AuthContext';

const UserHeader = () => {
  const { user } = useAuth();

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      display: 'flex',
      alignItems: 'center'
    }}>
      {user?.profileImage && (
        <img 
          src={user.profileImage} 
          alt="User" 
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover'
          }} 
        />
      )}
    </div>
  );
};

export default UserHeader;
