import React from 'react';
import HandSelection from '../HandSelection/HandSelection';
import pentagram from '@images/bg-pentagon.svg';
import triangle from '@images/bg-triangle.svg';
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
import { defineWinner, options } from '../../utils/gameUtils';

const ListHandSelections = () => {
  const { gameplay, setGameplay, extendedVersion } = useGlobalData();

  const itemsVersion = extendedVersion
    ? items
    : items.filter((item) =>
        [options.paper, options.rock, options.scissors].includes(item.name)
      );

  const handleClick = (el) => {
    let actualScore = 0;
    const machine =
      itemsVersion[Math.floor(Math.random() * itemsVersion.length)];
    const whoWins = defineWinner(el.name, machine.name);
    switch (whoWins) {
      case 0:
        actualScore = 1;
        break;
      case 1:
        actualScore = -1;
        break;
      default:
        actualScore = 0;
        break;
    }
    setGameplay({
      ...gameplay,
      score: gameplay.score + actualScore,
      userHand: el,
      machineHand: machine,
      winner: whoWins,
    });
  };

  if (Object.keys(gameplay.userHand).length !== 0) {
    return (
      <Result>
        <Hands>
          <Box>
            <HandSelection
              {...gameplay.userHand}
              isActive={gameplay.winner === 0}
            />
            <MessageSelection>you picked</MessageSelection>
          </Box>
          <Box>
            <HandSelection
              {...gameplay.machineHand}
              isActive={gameplay.winner === 1}
            />
            <MessageSelection>the house picked</MessageSelection>
          </Box>
        </Hands>
        <ResultMessage>
          {gameplay.winner === -1
            ? 'No one wins'
            : gameplay.winner == 0
            ? 'User Wins'
            : 'House Wins'}
        </ResultMessage>
        <PlayAgainButton
          onClick={() => setGameplay({ ...gameplay, userHand: {} })}
        >
          play again
        </PlayAgainButton>
      </Result>
    );
  }
  return (
    <HandsContainer>
      {itemsVersion.map((item) =>
        React.cloneElement(
          <HandSelection {...item} handleClick={() => handleClick(item)} />,
          { key: item.id }
        )
      )}
      <Background
        src={extendedVersion ? pentagram : triangle}
        alt='background image for hands available'
      />
    </HandsContainer>
  );
};

export default ListHandSelections;
