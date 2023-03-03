import styled from "styled-components";

export const NavBarStyles = styled.header`
    width: 100vw;
    height: 15vh;
    min-height: 70px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    .logo{
      width: auto;
      height: 100%;
      filter: drop-shadow(10px 10px 10px black);
    }

    @media (min-width: 768px)
    {
      height: 15vh;
    }
`;
