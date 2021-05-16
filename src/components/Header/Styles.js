import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 1.5em;
  border: 3px solid var(--Header-Outline);
  border-radius: 0.25em;
`;

export const Options = styled.div`
  text-transform: uppercase;
  line-height: 0.75em;
  color: white;

  p:nth-child(4),
  p:nth-child(5) {
    display: ${({ isExtended }) => {
      return isExtended ? 'block' : 'none';
    }};
  }
`;
