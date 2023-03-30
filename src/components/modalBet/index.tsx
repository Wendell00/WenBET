import { DivStyles } from './styles'
import { useEffect, useState } from 'react';
import {VanillaTiltFunc} from '../cardContainer/index'


export const ModalBet = () =>{
   
    return(
        <DivStyles>
          <div className='cards'>
            <VanillaTiltFunc bet={false}/>
          </div>
          <div className="apostaContainer">
            <div className="input-container">
              <input  placeholder="Valor" type="text"/>
              <button className="apostar-btn" type="button">
                Apostar
              </button>
            </div>
          </div>
        </DivStyles>
    )
}