import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const runScript = () => {
    console.log('script time')
    require("child_process").spawn('python', ['./hello.py']);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input value={value} onChange={handleChange}></input>
        <div>{value}</div>
        <button onClick={runScript}>Click me to run python script</button>
      </header>
    </div>
  );
}

export default App;
