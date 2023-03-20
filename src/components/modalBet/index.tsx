import { DivStyles } from './styles'
import {useState, useEffect} from 'react'
import {VanillaTiltFunc} from '../cardContainer/index'


export const ModalBet = () =>{
   
    return(
        <DivStyles>
          <div className='cards'>
            <VanillaTiltFunc bet={false}/>
          </div>
        </DivStyles>
    )
}