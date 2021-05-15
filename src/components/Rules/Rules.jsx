import React, { useState } from 'react';
import rules from '@images/image-rules-bonus.svg';
const Rules = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>RULES</button>
      {show && (
        <picture
          onClick={() => setShow(false)}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background: 'black',
          }}
        >
          <img
            style={{
              position: 'absolute',
              top: '44%',
              left: '44%',
              transform: 'translate(-50%, -50%)',
            }}
            src={rules}
            alt='RULES'
          />
        </picture>
      )}
    </>
  );
};

export default Rules;
