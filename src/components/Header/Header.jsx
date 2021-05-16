import React from 'react';
import { useGlobalData } from '../../utils/useGlobalData';
import Score from '../Score/Score';
import { HeaderWrapper, Options } from './Styles';
const Header = () => {
  const { extendedVersion } = useGlobalData();

  return (
    <HeaderWrapper>
      <Options isExtended={extendedVersion}>
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
