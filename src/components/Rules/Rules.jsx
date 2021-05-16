import React, { useState } from 'react';
import extendedRules from '@images/image-rules-bonus.svg';
import rules from '@images/image-rules.svg';
import { Picture, Imagen, CloseButton, Label, RulesButton } from './styles';
import { useGlobalData } from '../../utils/useGlobalData';

const Rules = () => {
  const [show, setShow] = useState(false);
  const { extendedVersion } = useGlobalData();
  return (
    <>
      <RulesButton onClick={() => setShow(!show)}>RULES</RulesButton>
      {show && (
        <Picture onClick={() => setShow(false)}>
          <Label>RULES</Label>
          <Imagen src={extendedVersion ? extendedRules : rules} alt='RULES' />
          <CloseButton onClick={() => setShow(false)}> X </CloseButton>
        </Picture>
      )}
    </>
  );
};

export default Rules;
