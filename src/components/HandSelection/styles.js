import styled from 'styled-components';

export const Selection = styled.div`
  position: absolute;
  transform: ${({ id, isExtended }) => {
    //TODO FALTA ORDENARLOS EN EL ORDEN CORRECTO
    let denominador = 3;
    let hip = -140;
    let offset = -45;
    if (isExtended) {
      denominador = 5;
      hip = 140;
      offset = 0;
    }
    let value = `translate(${
      id % 2 == 0
        ? -1 * hip * Math.sin((Math.PI * id) / denominador)
        : hip * Math.sin((Math.PI * id) / denominador)
    }px, ${
      id % 2 == 0
        ? -1 * hip * Math.cos((Math.PI * id) / denominador) + offset
        : hip * Math.cos((Math.PI * id) / denominador) + offset
    }px)`;
    return value;
  }};
  width: 100px;
  height: 100px;
  margin: 50px;
  border-radius: 50%;
  background-image: linear-gradient(
    0deg,
    ${({ gradColor1 }) =>
      `hsl(${gradColor1[0]}, ${gradColor1[1]}%, ${gradColor1[2]}%)`},
    ${({ gradColor2 }) =>
      `hsl(${gradColor2[0]}, ${gradColor2[1]}%, ${gradColor2[2]}%)`}
  );
  box-shadow: inset 0 -5px 0 0 hsl(${({ gradColor2 }) => gradColor2[0]}, 73%, 40%);

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${({ isActive }) => isActive && `animation: animate 2s forwards `}
  }

  @keyframes animate {
    0% {
      box-shadow: 0 0 0px 0px rgba(200, 200, 200, 0.1);
    }
    25% {
      box-shadow: 0 0 0px 10px rgba(200, 200, 200, 0.1);
    }
    50% {
      box-shadow: 0 0 0px 10px rgba(200, 200, 200, 0.1),
        0 0 0px 30px rgba(200, 200, 200, 0.05);
    }
    100% {
      box-shadow: 0 0 0px 10px rgba(200, 200, 200, 0.1),
        0 0 0px 30px rgba(200, 200, 200, 0.05),
        0 0 0px 60px rgba(200, 200, 200, 0.025);
    }
  }

  picture {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 5px 0 0
      hsl(${({ gradColor2 }) => gradColor2[0]}, 0%, 80%);
    background-color: white;
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    z-index: 1;
    border-radius: 50%;

    img {
      position: absolute;
      z-index: 2;
      width: 55%;
      height: 55%;
    }
  }
`;
