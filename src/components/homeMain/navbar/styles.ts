import styled from "styled-components";

export const NavBarStyles = styled.header`
    width: 100vw;
    height: 15vh;
    min-height: 70px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    z-index: 2;

    .logo{
      width: 100%;
      height: 100%;
      filter: drop-shadow(10px 10px 10px black);
    }

    @media (min-width: 768px)
    {
      height: 15vh;

      .logo{
        min-width: 310px;
      }
    }
`;
