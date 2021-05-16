import styled from 'styled-components';

export const HandsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const Background = styled.img`
  position: absolute;
  z-index: -1;
  width: auto;
  top: 50%;
  transform: translateY(-50%);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Result = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
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
