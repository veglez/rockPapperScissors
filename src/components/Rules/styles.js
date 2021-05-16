import styled from 'styled-components';

export const Picture = styled.picture`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Imagen = styled.img`
  margin-block: 2.5em;
  width: 90%;
  max-width: 320px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: var(--Dark-Text);
  text-transform: uppercase;
  font-size: 1.5em;
  border: none;
  outline: none;
`;

export const Label = styled.p`
  text-transform: uppercase;
  color: white;
  font-size: 2.5em;
  color: var(--Dark-Text);
`;

export const RulesButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--Header-Outline);
  border-radius: 10px;
  padding: 1.5em 3em;
  color: white;
`;
