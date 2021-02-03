import React from 'react';
import ReducerSample from './components/ReducerSample';
import { SampleProvider } from './components/SampleContext';

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default App;