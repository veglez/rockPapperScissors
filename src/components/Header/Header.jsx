import React from 'react';
import Score from '../Score/Score';
import { HeaderWrapper, Options } from './Styles';
const Header = () => {
  return (
    <HeaderWrapper>
      <Options>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
        <p>Lizard</p>
        <p>Spock</p>
      </Options>
      <Score />
    </HeaderWrapper>
  );
};

export default Header;
