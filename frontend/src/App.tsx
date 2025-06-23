import React from 'react';
import logo from './Logo, Dark Horizontal.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Text'>
          In progress...
        </p>
        <a
          className="App-link"
          href="https://github.com/LianShap/Pet-Project-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about us
        </a>
      </header>
    </div>
  );
}

export default App;
