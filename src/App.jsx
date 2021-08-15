import React from 'react';
import Header from './components/Header/Header';
import ListHandSelections from './components/ListHandSelections/ListHandSelections';
import Rules from './components/Rules/Rules';
import Switch from './components/Switch/Switch';
const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        minHeight: '100vh',
        gap: 12,
      }}
    >
      <Header />
      <ListHandSelections />
      <Rules />
      <Switch />
    </div>
  );
};

export default App;
