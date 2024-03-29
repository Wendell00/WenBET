import styled from "styled-components";


export const ButtonPlayStyles = styled.button`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  background: transparent;
  position: absolute;
  bottom: 110px;
  
  .floating { 
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}
 
  @keyframes floating {
      0% { transform: translate(0,  0px) scale(1.5); }
      50%  { transform: translate(0, 15px) scale(1.5); }
      100%   { transform: translate(0, -0px) scale(1.5); }   
  }

  button {
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    transform: scale(1.5);
  }
  
  button:hover {
    background-color: #00ff38;
    box-shadow: 0px 15px 20px rgba(46, 229, 58, 0.4);
    color: #fff;
    transform: translateY(-7px);
    transform: scale(1.5);
  }
  
  button:active {
    transform: translateY(-1px);
    transform: scale(1.5);
  }
  
`;