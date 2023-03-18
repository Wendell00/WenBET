import styled from "styled-components";


export const CardStyles = styled.button`
background: transparent;

.card {
  width: 190px;
  height: 254px;
  // border-radius: 20px;
  transition: all .3s;
  background-image: url('./carta.png');
  cursor: pointer;
  box-shadow: none;
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