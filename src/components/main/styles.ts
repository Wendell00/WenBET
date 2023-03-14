import styled from "styled-components";


export const MainStyles = styled.main`

    .main-content{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        margin: 0 auto;
        box-sizing: border-box;
        background-image: url('./bgmain-red.png');
        width: 100vw;
        height: 100vh;
        padding: 0 10vh;
        border-radius: 0px;
        z-index: 1;

        @media (min-width: 768px) {
            height: 70vh;
            padding: 0% 10%;
            padding-right: 0;
            border-radius: 80px;
            box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
            width: 96vw;
            position: relative;
            margin-top: 2%;
        }

        .main-inner1{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 100;

            @media (min-width: 768px) {
                width: 50%;
                align-items: start;
            }

            h1{
                width: 350px;
                font-size: 2.2em;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                color: white;
                position: relative;
                z-index: 10;

                @media (min-width: 1040px){
                    width: 350px;
                    font-size: 2.2em;
                }

                @media (min-width: 1190px){
                    font-size: 3em;
                    max-width: 475px;
                    width: auto;
                }
            }

            .p1-main{
                margin-top: 15px;
                width: 335px;
                font-size: 0.8rem;
                color: white;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;

                @media (min-width: 1040px) {
                    width: 460px;
                    font-size: 1.1rem;
                }

                @media (min-width: 1190px) {
                    width: 600px;
                    font-size: 1.5rem;
                }
            }

            .start-bet{
                margin-top: 15px;
                display:flex;
                position: relative;
                padding-top: 10px;

                .error-text{
                    position: absolute;
                    top: -10px;
                    color: white;
                    font-weight: 700;
                }

                .input-start-bet{
                    width: 250px;
                    height: 40px;
                    border: none;
                    text-align: center;
                    
                    @media(min-width: 1040px){       
                        width: 300px;
                        height: 55px;
                    }
                }

                .btn-start-bet{
                    font-size: 0.9rem;
                    color: white;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 500;
                    border: none;
                    width: 130px;
                    height: 40px;
                    background-color: #136E10;
                    cursor:pointer;

                    @media(min-width: 840px){       
                        font-size: 0.9rem;
                        width: 150px;
                        height: 40px;
                    }

                    @media(min-width: 1040px){       
                        font-size: 1rem;
                        width: 200px;
                        height: 55px;
                    }
                }
            }

            .p2-main{
                margin-top: 5px;
                text-align: center;
                font-size: 0.7em;
                font-style: italic;
                font-weight: 300;
                color: white;
                width: 380px;

                @media(min-width:840px){
                    width: auto;
                    font-size: 0.8em;
                }

                @media (min-width: 1040px) {
                    font-size: 1em;
                }
            }
        }

        .main-inner2{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 0;
            z-index: 2;

            @media (min-width: 768px) {
                width: 50%;
                position: relative;
            }

            .img-home{
                height: 80%;
                max-width: 100%;
                opacity: 0.4;
                filter: drop-shadow(10px 10px 10px white) blur(5px);

                @media (min-width: 768px) {
                    height: 70%;
                    opacity: 1;
                    filter: drop-shadow(10px 10px 10px white);
                }

                @media (min-width: 1190px) {
                    height: 80%;
                }
            }
        }
    }
`;