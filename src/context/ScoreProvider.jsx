import React, { useState } from 'react';

export const ScoreContext = React.createContext(null);

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [userHand, setUserHand] = useState('');
  const [extendedVersion, setExtendedVersion] = useState(false);
  return (
    <ScoreContext.Provider
      value={{
        score,
        setExtendedVersion,
        setScore,
        setUserHand,
        extendedVersion,
        userHand,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
