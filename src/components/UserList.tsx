import React from 'react';
import User from './User';

interface IPropsUsers {
  users: User[],
  onRemove: (e: any) => void,
  onToggle: (e: any) => void
}

function UserList({ users, onRemove, onToggle }:IPropsUsers) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default UserList;