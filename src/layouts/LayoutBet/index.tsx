import { MainStyles } from './styles'
import { Outlet } from 'react-router-dom'

export const LayoutBet = () =>{
    return(
        <MainStyles>
          <div className='main-content'>
              <Outlet/>
          </div>
        </MainStyles>
    )
}