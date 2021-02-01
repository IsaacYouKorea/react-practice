import React, { useCallback, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.module.css';
import Hello from './components/Hello';

function App() {
  const [isSpecial, setIsSpecial] = useState(true);
  useCallback(() => {
    setInterval(() => {
      setIsSpecial(!isSpecial);
    }, 500);
  }, [isSpecial]);
  return (
    <div className="App">
      <header className="App-header">
        <Hello isSpecial={isSpecial}>
          test
        </Hello>
        <Hello>
          test
        </Hello>
        <Hello color="blue">
          test
        </Hello>
        <Hello color="black">
          test
        </Hello>
      </header>
    </div>
  );
}

export default App;
