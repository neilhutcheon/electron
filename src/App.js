import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const { exec } = require("child_process");

function App() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const runScript = () => {
    // const process = require("child_process").spawn('python3', ['hello.py', value]);
    // console.log(process)
    exec(`python3 ~/Desktop/Curve10/electronTest/electron/src/hello.py '${value}'`, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(stdout);
    }
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input value={value} onChange={handleChange}></input>
        <button onClick={runScript}>Click me to run python script</button>
      </header>
    </div>
  );
}

export default App;
