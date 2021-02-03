import React, { Dispatch, useCallback, useContext, useMemo, useReducer, useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from '../hooks/useInputs';

function countActiveUsers(users: User[]) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

type State = {
  users: User[],
}

const initialState = {
  users: [
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
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

type Action = 
  | {type: 'CREATE_USER', user: User}
  | {type: 'TOGGLE_USER', id: number}
  | {type: 'REMOVE_USER', id: number}

function reducer(state: {users:User[]}, action: Action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

// export const UserDispatch = React.createContext<State| null>(null);
type UserDispatch = Dispatch<Action>;

// Context
const UserStateContext = React.createContext<State|null>(null);
const UserDispatchContext = React.createContext<UserDispatch|null>(null);


export function UserManager({children}: {children: React.ReactNode}) {
  const {form, onChange, reset} = useInputs({
    username: '',
    email: ''
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username: form.username,
        email: form.email
      }
    });
    reset();
    nextId.current += 1;
  }, [form, reset]);


  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser 
        username={form.username}
        email={form.email}
        onChange={onChange}
        onCreate={onCreate}/>
      <UserList users={users}/>
      <div>활성 사용자 수 : {count} </div>
      {children}
    </>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
