import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.module.css';
import Hello from './components/Hello';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: true
    }
  ]);
  const countActiveUsers = () => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  }
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: true
    }
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id: number) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(), [users]);

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}/>
      <UserList users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자 수 : {count} </div>
    </>
  );
}

export default App;
