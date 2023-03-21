import {NavBar} from '../../components/homeMain/navbar/index'
import {Main} from '../../components/homeMain/main/index'
import { useEffect } from 'react';
import Snowflakes from 'magic-snowflakes';
import { MainStyles } from './styles'

export const snowflakes = new Snowflakes();

export const HomeMain = () =>{

    useEffect(() => {
        window.addEventListener('load', () => {
            const snow = document.querySelectorAll('.snowflakes_body');
            snow.forEach((div) => {
                if(div instanceof HTMLElement){
                    div.style.zIndex = '0';
                }
            });
        });
    }, []);
    snowflakes.start();
    
    return(
        <>
            <MainStyles>
                <NavBar/>
                <Main/>
            </MainStyles>
        </>
    )
}