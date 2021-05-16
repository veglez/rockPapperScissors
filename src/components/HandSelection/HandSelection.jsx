import React from 'react';
import { useGlobalData } from '../../utils/useGlobalData';
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
  const { extendedVersion } = useGlobalData();

  return (
    <Selection
      gradColor1={gradColor1}
      gradColor2={gradColor2}
      isActive={isActive}
      id={id}
      onClick={handleClick}
      isExtended={extendedVersion}
    >
      <picture>
        <img src={src} alt={name} />
      </picture>
    </Selection>
  );
};

export default HandSelection;
