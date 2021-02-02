import React, { ReactNode } from 'react';

interface IProps {
  username: string,
  email: string,
  onChange: (e: any) => void,
  onCreate: (e: any) => void
}


function CreateUser({ username, email, onChange, onCreate }:IProps) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;