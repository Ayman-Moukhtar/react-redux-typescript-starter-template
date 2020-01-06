import React, { useEffect } from 'react';

import logo from './../../logo.svg';
import { useAppState } from './hooks';

import './App.css';

const App = () => {
  const {
    title,
    data,
    changeTitle,
    getData
  } = useAppState();


  useEffect(
    () => {
      setTimeout(
        () => {
          getData();
          changeTitle("Changed Title");
        },
        3000
      );
    },
    // eslint-disable-next-line
    []
  );

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
        {data.map(item => <div>{item}</div>)}
      </header>
    </div>
  );
}

export default App;
