import React from 'react';
import { useGlobalData } from '../../utils/useGlobalData';
import { Label, Container } from './styles';

const Switch = () => {
  const { extendedVersion, setExtendedVersion } = useGlobalData();
  return (
    <Container>
      <p>Go to {extendedVersion ? 'normal' : 'extended'} version</p>
      <Label htmlFor='version'>
        <input
          type='checkbox'
          name='version'
          id='version'
          onChange={() => setExtendedVersion(!extendedVersion)}
        />
        <span></span>
      </Label>
    </Container>
  );
};

export default Switch;
