import { GameStyles } from './styles'
import {NavBarBet} from '../../components/navbarBet/index'
import {ButtonPlay} from '../../components/buttonPlay/index'
import {ModalBet} from '../../components/modalBet/index'
import {CardContainer} from '../../components/cardContainer/index'
import { useContext, useMemo } from 'react'
import { FormContext } from '../../contexts/FormContext'


export const Game = () =>{
    const {startBet} = useContext(FormContext)
    
    return(
        <>
            <NavBarBet/>
            {!startBet && (
                <GameStyles>
                    <CardContainer display={startBet}/>
                </GameStyles>
            )}
            <ButtonPlay display={startBet}/>
            <ModalBet display={startBet}/>
        </>
    )
}