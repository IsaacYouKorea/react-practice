import React from 'react';
import User from './User';

type IPropsUsers = {
  users: User[]
}

// function UserList({ users }:IPropsUsers) {
//   return (
//     <div>
//       {users.length && users.map(user => (
//         <User user={user} key={user.id}/>
//       ))}
//     </div>
//   );
// }

const UserList: React.FC<IPropsUsers> = ({users}) => {
  return (
    <div>
      {users.length && users.map(user => (
        <User user={user} key={user.id}/>
      ))}
    </div>
  );
};

export default React.memo(UserList);