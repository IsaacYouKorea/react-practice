import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Hello />
        <Hello />
        <Hello />
      </header>
    </div>
  );
}

export default App;
