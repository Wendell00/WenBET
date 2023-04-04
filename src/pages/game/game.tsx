import {NavBarBet} from '../../components/navbarBet/index'
import {ButtonPlay} from '../../components/buttonPlay/index'
import {ModalBet} from '../../components/modalBet/index'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

export const Game = () =>{
    const {startBet} = useContext(FormContext)
    
    return(
        <>
            <NavBarBet/>
            {/* <CardContainer/> */}
            <ButtonPlay display={startBet}/>
            <ModalBet display={startBet}/>
        </>
    )
}