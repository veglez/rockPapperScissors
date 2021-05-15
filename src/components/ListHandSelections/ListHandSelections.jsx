import React from 'react';
import HandSelection from '../HandSelection/HandSelection';
import pentagram from '@images/bg-pentagon.svg';
import items from './data';
import {
  HandsContainer,
  Background,
  Result,
  ResultMessage,
  MessageSelection,
  Box,
  PlayAgainButton,
  Hands,
} from './styles';
import { useGlobalData } from '../../utils/useGlobalData';
import { defineWinner } from '../../utils/gameUtils';

const ListHandSelections = () => {
  const { userHand, setUserHand, setScore } = useGlobalData();

  const machine = items[Math.floor(Math.random() * items.length)];
  const user = items.filter((item) => item.name === userHand)[0];

  if (user) {
    const whoWins = defineWinner(user.name, machine.name);

    return (
      <Result>
        <Hands>
          <Box>
            <HandSelection {...user} isActive={whoWins === 0} />
            <MessageSelection>you picked</MessageSelection>
          </Box>
          <Box>
            <HandSelection {...machine} isActive={whoWins === 1} />
            <MessageSelection>the house picked</MessageSelection>
          </Box>
        </Hands>
        <ResultMessage>
          {whoWins === -1
            ? 'No one wins'
            : whoWins == 0
            ? 'User Wins'
            : 'House Wins'}
        </ResultMessage>
        <PlayAgainButton onClick={() => setUserHand('')}>
          play again
        </PlayAgainButton>
      </Result>
    );
  }
  return (
    <HandsContainer>
      {items.map((item) =>
        React.cloneElement(
          <HandSelection
            {...item}
            handleClick={() => setUserHand(item.name)}
          />,
          { key: item.id }
        )
      )}
      <Background src={pentagram} alt='pentagrama' />
    </HandsContainer>
  );
};

export default ListHandSelections;
