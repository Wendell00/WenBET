import styled from "styled-components";

export const MainStyles = styled.main`
    .main-content{
        display: flex;
        box-sizing: border-box;
        padding-left: 10%;
        padding-top: 10%;
        width: 100vw;
        height: 70vh;

        h1{
            width: 50%;
            height: 100%;
            font-size: clamp(1em, 1em + 1vw, 1.5em);
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color: white;
        }

        .main-content2{
            width: 50%;
            height: 100%;
        }
    }
`;
