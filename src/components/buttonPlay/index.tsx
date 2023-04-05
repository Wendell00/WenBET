import { ButtonPlayStyles } from './styles'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

interface ModalBetProps{
    display: boolean;
  }

export const ButtonPlay = ({display = false, ...props}: ModalBetProps) =>{
    const {setStartBet, startBet, setMsgTyped, firstBet} = useContext(FormContext)
    function handleClick(){
        setStartBet(startBet)
        setMsgTyped('Escolha uma carta e um valor para apostar!')
    }
    console.log(display)
    return(
        <>
            <ButtonPlayStyles>
                {(!display && firstBet) && (
                    <div className='buttonContainer'>
                    <button className='floating' onClick={handleClick}> Começar </button>
                    </div>
                )}
            </ButtonPlayStyles>
        </>
    )
}