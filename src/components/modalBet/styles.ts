import styled from "styled-components";


export const DivStyles = styled.div`
    height: 90vh;
    background-color: black;
    width: 100vw;

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

      .input-container {
        position: relative;
        display: flex;
        height: 2.8rem;
        width: 100%;
        min-width: 200px;
        max-width: 250px;
        background-image: url('./bgmain-gray.png');
        border-radius: 8px;
        box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
      }
      
      .input-container input {
        height: 100%;
        width: 100%;
        border-radius: 8px;
        border: 1px solid #136E10;
        background-color: transparent;
        padding: 0.625rem 70px 0.625rem 0.75rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        color: white;
        outline: none;
        transition: all .15s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .input-container input:focus {
        border: 1px solid #136E10;
      }
      
      .apostar-btn {
        position: absolute;
        width: 100px;
        right: 4px;
        top: 4px;
        bottom: 4px;
        z-index: 10;
        border-radius: 4px;
        background-color: #136E10;
        color: #fff;
        padding-top: .25rem;
        padding-bottom: .25rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        text-align: center;
        vertical-align: middle;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        border: none;
        transition: .6s ease;
        cursor: pointer;
      }
      
      .apostar-btn:hover {
        right: 2px;
        top: 2px;
        bottom: 2px;
        border-radius: 8px;
      }
      
      .input-container input:placeholder-shown ~ .apostar-btn {
        pointer-events: none;
        background-color: gray;
        opacity: 0.5;
      }
    }

    

`;