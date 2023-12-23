import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './Component/Counter/Counter';
import BasicCounterStatic from './Component/BasicCounterStatic/BasicCounterStatic';
import BasicCounterDynamic from './Component/BasicCounterDynamic/BasicCounterDynamic';

function App() {
  return (
    <React.Fragment>
      <BasicCounterStatic />
      <BasicCounterDynamic />
      <Counter />
    </React.Fragment>
  );
}

export default App;
