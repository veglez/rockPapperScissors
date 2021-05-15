import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScoreProvider from './context/ScoreProvider';
import './styles/main.module.scss';

ReactDOM.render(
  <ScoreProvider>
    <App />
  </ScoreProvider>,
  document.getElementById('app')
);
