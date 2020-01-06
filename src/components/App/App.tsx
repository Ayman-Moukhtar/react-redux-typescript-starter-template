import React, { useEffect } from 'react';

import SEO from '../Shared/SEO';
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
          changeTitle("This is App Module New Title");
        },
        3000
      );
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="App">
      <SEO
        title={title}
        description="This is a page describing the app module"
        type="article"
      />
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
        {data.map(item => <div key={item}>{item}</div>)}
      </header>
    </div>
  );
}

export default App;
