import styled from "styled-components";

export const MainStyles = styled.main`

    .main-content{
        display: flex;
        margin: 0 auto;
        margin-top: 2%;
        box-sizing: border-box;
        background-image: url('./bgmain-red.png');
        width: 96vw;
        height: 80vh;
        padding: 0% 10%;
        padding-right: 0;
        border-radius: 80px;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

        @media (min-width: 768px) {
            height: 70vh;
            min-height: 524px;
          }


        .main-inner1{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            h1{
                width: 350px;
                font-size: 2.2em;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                color: white;
                position: relative;
                z-index: 10;
            }

            .p1-main{
                margin-top: 15px;
                width: 460px;
                font-size: 1.1rem;
                color: white;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
            }

            .start-bet{
                margin-top: 15px;
                display:flex;

                .input-start-bet{
                    padding: 5px;
                    width: 300px;
                    height: 55px;
                    border: none;
                    text-align: center;
                }

                .btn-start-bet{
                    font-size: 1rem;
                    color: white;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 500;
                    border: none;
                    width: 200px;
                    height: 55px;
                    padding: 5px;
                    background-color: #136E10;
                    cursor:pointer;
                }
            }

            @media (min-width: 1040px) {
                h1{
                    width: 350px;
                    font-size: 2.2em;
                }

                .p1-main{
                    width: 460px;
                    font-size: 1.1rem;
                }
              }

            @media (min-width: 1190px) {
                h1{
                    font-size: 3em;
                    max-width: 475px;
                    width: auto;
                }

                .p1-main{
                    width: 600px;
                    font-size: 1.5rem;
                }
              }


            .p2-main{
                margin-top: 5px;
                font-size: 1rem;
                font-style: italic;
                font-weight: 300;
                color: white;
            }
        }

        .main-inner2{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .img-home{
                height: 70%;
                filter: drop-shadow(10px 10px 10px white);
            }

            @media (min-width: 1190px) {
                .img-home{
                    height: 80%;
                }
            }
        }
    }
`;