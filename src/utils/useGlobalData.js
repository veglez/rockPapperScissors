import { useContext } from 'react';
import { ScoreContext } from '../context/ScoreProvider';

export const useGlobalData = () => {
  return useContext(ScoreContext);
};
