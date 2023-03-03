import Logo from '/assets/logo.svg'

import { NavBarStyles } from './styles'

export const NavBar = () =>{
    return(
      <NavBarStyles>
        <div className="nav">
          <img src={Logo} alt="" className="logo"/>
        </div>
      </NavBarStyles>
    )
}