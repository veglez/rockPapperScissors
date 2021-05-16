import React from 'react';
import { useGlobalData } from '../../utils/useGlobalData';
import { ScoreBoard } from './Styles';

const Score = () => {
  const { gameplay } = useGlobalData();
  return (
    <ScoreBoard>
      <p>score</p>
      <p>{gameplay.score}</p>
    </ScoreBoard>
  );
};

export default Score;
