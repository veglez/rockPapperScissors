import styled from 'styled-components';

export const ScoreBoard = styled.div`
  width: 100px;
  padding: 0.5em;
  height: fit-content;
  background-color: white;
  border-radius: 0.5em;
  text-align: center;

  p:first-child {
    text-transform: uppercase;
    font-size: 1.2em;
    color: var(--Score-Text);
  }

  p:last-child {
    font-size: 2em;
    color: var(--Dark-Text);
  }
`;
