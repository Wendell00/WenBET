import styled from "styled-components";


export const CardStyles = styled.button`

@keyframes rotateCardBlue {
  0% {
      transform: rotateY(0deg);
  }

  50% {
      transform: rotateY(90deg);
      background-image: url('./carta.png');
  }
  51%{
      background-image: url('./cartaAzul.png');
  }
  100% {
      transform: rotateY(180deg);
      background-image: url('./cartaAzul.png');
  }
}

@keyframes rotateCardGreen {
  0% {
      transform: rotateY(0deg);
  }

  50% {
      transform: rotateY(90deg);
      background-image: url('./carta.png');
  }
  51%{
      background-image: url('./cartaVerde.png');
  }
  100% {
      transform: rotateY(180deg);
      background-image: url('./cartaVerde.png');
  }
}

@keyframes rotateCardOrange {
  0% {
      transform: rotateY(0deg);
  }

  50% {
      transform: rotateY(90deg);
      background-image: url('./carta.png');
  }
  51%{
      background-image: url('./cartaLaranja.png');
  }
  100% {
      transform: rotateY(180deg);
      background-image: url('./cartaLaranja.png');
  }
}

background: transparent;

.card {
  width: 190px;
  height: 254px;
  // border-radius: 20px;
  transition: all .3s;
  cursor: pointer;
  box-shadow: none;
  border: 3px solid rgb(255,255,255, .1);
  background-image: url('./carta.png');
 }
 
 .card2 {
  width: 190px;
  height: 254px;
  border-radius:;
  transition: all .2s; 
 }
 
 
 .card:hover {
  box-shadow: none;
 }

 .Blue{
  background-image: url('./cartaAzul.png');
 }

 .Orange{
  background-image: url('./cartaLaranja.png');
 }

 .Green{
  background-image: url('./cartaVerde.png');
 }

 .white-border{
  border: 2px solid white;
 }

 .changeCardBlue{
  animation: rotateCardBlue 1s forwards;
 }

 .changeCardGreen{
  animation: rotateCardGreen 1s forwards;
 }

 .changeCardOrange{
  animation: rotateCardOrange 1s forwards;
 }

 
`;

// import styled from 'styled-components';

// const MeuComponente = styled.div`
//   background-color: ${props => props.cor};
// `;

// const minhaCor = '#FF0000';

// function MinhaPagina() {
//   return (
//     <MeuComponente cor={minhaCor}>
//       Meu conteúdo aqui
//     </MeuComponente>
//   );