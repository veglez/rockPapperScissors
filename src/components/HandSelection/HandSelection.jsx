import React from 'react';
import { Selection } from './styles';

const HandSelection = ({
  gradColor1,
  gradColor2,
  src,
  name,
  isActive,
  id,
  handleClick,
}) => {
  return (
    <Selection
      gradColor1={gradColor1}
      gradColor2={gradColor2}
      isActive={isActive}
      id={id}
      onClick={handleClick}
    >
      <picture>
        <img src={src} alt={name} />
      </picture>
    </Selection>
  );
};

export default HandSelection;
