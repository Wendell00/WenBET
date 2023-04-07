import { DivStyles } from './styles'
import {VanillaTiltFunc} from '../cardContainer/index'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

interface ModalBetProps{
  display: boolean;
}

export const ModalBet = ({display = false, ...props}: ModalBetProps) =>{
    const {setStartBet, startBet, setFirstBet, setMsgTyped, colorBet} = useContext(FormContext)

    function handleClick(){
      if(colorBet != ''){
        setStartBet(startBet)
        setFirstBet(true)
        setMsgTyped('Escolha a carta certa para ganhar !')
      }
      else{
        setMsgTyped("ESCOLHA UMA CARTA!")
      }
    }
   
    return(
        <DivStyles>
           {(display && startBet) && (
            <div className='modalBetContainer'>
              <div className='cards'>
                  <VanillaTiltFunc bet={false}/>
              </div>
              <div className="apostaContainer">
              <button onClick={handleClick}> Apostar </button>
              </div>
            </div>
          )}
        </DivStyles>
    )
}