import styled from "styled-components";


export const DivStyles = styled.div`
    .modalBetContainer{
      height: 90vh;
      background-color: rgb(0,0,0, .9);
      width: 100vw;
      position: absolute;
    }

    .cards{
        width: 60%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        padding-top: 80px;
    }

    .apostaContainer{
      width: 100vw;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      button {
        position: relative;
        display: inline-block;
        margin: 15px;
        padding: 15px 30px;
        text-align: center;
        font-size: 18px;
        letter-spacing: 1px;
        text-decoration: none;
        color: #1be615;
        background: transparent;
        cursor: pointer;
        transition: ease-out 0.5s;
        border: 2px solid #1be615;
        border-radius: 10px;
        box-shadow: inset 0 0 0 0 #1be615;
      }
      
      button:hover {
        color: white;
        box-shadow: inset 0 -100px 0 0 #0D730A;
      }
      
      button:active {
        transform: scale(0.9);
      }
    }

    

`;