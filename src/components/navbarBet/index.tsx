import Logo from '/assets/logo.svg'

import { NavBarStyles } from './styles'

export const NavBarBet = () =>{
    return(
      <NavBarStyles>
        <div className="nav">
            <p className='text'><span className="typedSkins"> Bem vindo a WenBET, <span>Wendell</span> !</span></p>
        </div>
      </NavBarStyles>
    )
}