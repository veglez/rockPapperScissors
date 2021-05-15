import React from 'react';
import Header from './components/Header/Header';
import ListHandSelections from './components/ListHandSelections/ListHandSelections';
import Rules from './components/Rules/Rules';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        minHeight: '80vh',
      }}
    >
      <Header />
      <ListHandSelections />
      <Rules />
    </div>
  );
};

export default App;
