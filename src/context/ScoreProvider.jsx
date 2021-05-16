import React, { useState } from 'react';

export const ScoreContext = React.createContext(null);

const ScoreProvider = ({ children }) => {
  const [extendedVersion, setExtendedVersion] = useState(false);
  const [gameplay, setGameplay] = useState({
    score: 0,
    userHand: {},
    machineHand: {},
    winner: -1,
  });
  return (
    <ScoreContext.Provider
      value={{
        setExtendedVersion,
        extendedVersion,
        gameplay,
        setGameplay,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
