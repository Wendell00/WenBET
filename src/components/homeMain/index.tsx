import {NavBar} from '../../components/homeMain/navbar/index'
import {Main} from '../../components/homeMain/main/index'
// import Snowflakes from 'magic-snowflakes';
import { MainStyles } from './styles'

// export const snowflakes = new Snowflakes({
//     color: '#f00', // Default: "#5ECDEF" // Default: document.body
//     count: 50, // 100 snowflakes. Default: 50
//     minSize: 20, // Default: 10
//     maxSize: 50, // Default: 25
//     rotation: true, // Default: true
//     speed: 0.5, // The property affects the speed of falling. Default: 1
//     wind: true, // Without wind. Default: true
//     zIndex: 0, // Default: 9999,
//     autoResize: true // Default: true
// });

export const HomeMain = () =>{
    return(
        <>
            <MainStyles>
                <NavBar/>
                <Main/>
            </MainStyles>
        </>
    )
}