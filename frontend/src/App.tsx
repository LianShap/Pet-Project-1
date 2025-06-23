import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import logo from './Logo, Dark Vertical.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Text'>
          Until release:
          <CountdownTimer/>
        </p>
        <a
          className="App-link"
          href="https://github.com/LianShap/Pet-Project-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          More about us
        </a>
      </header>
    </div>
  );
}

export default App;
