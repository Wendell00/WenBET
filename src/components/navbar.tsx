import styled from "styled-components";

const NavBarStyles = styled.header`
    width: 100vw;
    height: 10vh;
    min-height: 70px;
    background-color: rgb(51, 51, 51, .7);
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    .logo{
      width: auto;
      height: 100%;
      object-fit: contain;
    }

    @media (min-width: 768px)
    {
      height: 15vh;
    }
`;


export const NavBar = () =>{
    return(
      <NavBarStyles>
        <div className="nav">
          <img src="../assets/img/Logo.svg" className="logo"/>
        </div>
      </NavBarStyles>
    )
}