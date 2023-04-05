import { DivStyles } from './styles'
import { useEffect, useState } from 'react';
import {VanillaTiltFunc} from '../cardContainer/index'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { func } from 'joi';

interface ModalBetProps{
  display: boolean;
}

export const ModalBet = ({display = false, ...props}: ModalBetProps) =>{
    const {setStartBet, startBet, setFirstBet, setMsgTyped} = useContext(FormContext)

    function handleClick(){
      setStartBet(startBet)
      setFirstBet(true)
      setMsgTyped('Escolha a carta certa para ganhar !')
    }
   
    return(
        <DivStyles>
           {(display && startBet) && (
            <div className='modalBetContainer'>
              <div className='cards'>
                  <VanillaTiltFunc bet={false}/>
              </div>
              <div className="apostaContainer">
                  <div className="input-container">
                    <input  placeholder="Valor" type="text"/>
                    <button className="apostar-btn" type="button" onClick={handleClick}>
                        Apostar
                    </button>
                  </div>
              </div>
            </div>
          )}
        </DivStyles>
    )
}