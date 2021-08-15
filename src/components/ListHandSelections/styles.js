import styled from 'styled-components';

export const HandsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  margin-block: 1.5rem;
`;

export const Background = styled.img`
  position: relative;
  z-index: -1;
  display: block;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Result = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  gap: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  & * {
    transform: none;
    position: relative;
  }
`;

export const Hands = styled.div`
  display: flex;
`;

export const ResultMessage = styled.p`
  text-transform: uppercase;
  font-size: 2em;
`;

export const MessageSelection = styled.p`
  text-transform: uppercase;
`;

export const PlayAgainButton = styled.button`
  background-color: white;
  border: none;
  outline: none;
  width: 200px;
  border-radius: 10px;
  text-transform: uppercase;
  padding: 1em;
`;
