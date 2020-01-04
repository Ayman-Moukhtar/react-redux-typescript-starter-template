import React from 'react';

import logo from './../../logo.svg';
import { useAppState } from './hooks';

import './App.css';

const App = () => {
  const {
    title,
    changeTitle
  } = useAppState();

  setTimeout(() => changeTitle("Changed Title"), 3000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </header>
    </div>
  );
}

export default App;
