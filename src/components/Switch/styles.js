import styled from 'styled-components';

export const Label = styled.label`
  width: 60px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid var(--Header-Outline);
  position: relative;

  input {
    display: none;
  }

  span {
    position: absolute;
    background-color: whitesmoke;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    top: 4px;
    left: 6px;
    transition: 1s;
  }

  input:checked ~ span {
    transform: translateX(26px);
  }
`;

export const Container = styled.div`
  display: flex;
  /* width: 180px; */
  gap: 20px;
  /* flex-direction: column; */
  color: white;
`;
