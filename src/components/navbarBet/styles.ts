import styled from "styled-components";

export const NavBarStyles = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 10vh;
    min-height: 50px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.1px);
    -webkit-backdrop-filter: blur(2.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    p{
        width: 300px;
        color: white;
        font-size: 1.3em;
        font-weight: 700;

        span{
            color: white;

            .nick{
                color: #1be615;
            }
        }
    }
`;
