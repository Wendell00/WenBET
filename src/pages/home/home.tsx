import {NavBar} from '../../components/navbar/index'
import {Main} from '../../components/main/index'
import Snowflakes from 'magic-snowflakes';


export const Home = () =>{
    const snowflakes = new Snowflakes();
    snowflakes.start();
    return(
        <>
            <NavBar/>
            <Main/>
        </>
    )
}