import React from 'react';
import { useGlobalData } from '../../utils/useGlobalData';
import { ScoreBoard } from './Styles';

const Score = () => {
  const { score } = useGlobalData();
  return (
    <ScoreBoard>
      <p>score</p>
      <p>{score}</p>
    </ScoreBoard>
  );
};

export default Score;
