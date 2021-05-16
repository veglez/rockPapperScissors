import React, { useState } from 'react';
import rules from '@images/image-rules-bonus.svg';
import { Picture, Imagen, CloseButton, Label, RulesButton } from './styles';

const Rules = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <RulesButton onClick={() => setShow(!show)}>RULES</RulesButton>
      {show && (
        <Picture onClick={() => setShow(false)}>
          <Label>RULES</Label>
          <Imagen src={rules} alt='RULES' />
          <CloseButton onClick={() => setShow(false)}> X </CloseButton>
        </Picture>
      )}
    </>
  );
};

export default Rules;
