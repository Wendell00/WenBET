import styled from "styled-components";

export const MainStyles = styled.main`

    .main-content{
        display: flex;
        margin: 0 auto;
        margin-top: 2%;
        box-sizing: border-box;
        width: 96vw;
        height: 70vh;
        padding: 0% 10%;
        padding-right: 0;
        border-radius: 80px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;


        .main-inner1{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            h1{
                width: auto;
                max-width: 475px;
                font-size: 3rem;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                color: white;
            }

            .p1-main{
                margin-top: 15px;
                width: auto;
                max-width: 600px;
                font-size: 1.5rem;
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
                height: 80%;
                transition: .6s;
                filter: drop-shadow(10px 10px 10px white);
            }
        }
    }
`;