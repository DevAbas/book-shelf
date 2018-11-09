import React from 'react';

const User = ({user}) => {
  return (
    <div className="user_container">
      <div className="avatar">
        <img src="./images/avatar.png" alt="Avatar"/>
      </div>
      <div className="nfo">
        <div><span>Name:</span> {user.name}</div>
        <div><span>Lastname:</span> {user.lastname}</div>
        <div><span>Email:</span> {user.email}</div>
      </div>
    </div>
  )
};

export default User;