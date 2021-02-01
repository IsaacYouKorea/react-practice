import React, { ReactNode } from 'react';
import classes from '../App.module.css';

interface IProps {
  children: ReactNode;
  color: string;
  name: string;
  isSpecial: boolean;
}


function Hello({ children, color, isSpecial, ...props }: IProps) {
  console.log(props);
  return <div style={{color, backgroundColor: isSpecial ? 'red' : ''}}>
    {children}
  </div>
}

Hello.defaultProps = {
  name: '이름없음',
  color: 'red',
  isSpecial: false
}

export default Hello;