import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import './App.css';

function App() {
  return (
    <div className="App">
      <VendingMachine />
      <Chips />
      <Sardines />
      <Soda />
    </div>
  );
}

export default App;
