import { DivStyles } from './styles'
import {useState, useEffect} from 'react'
import {Card} from '../cardContainer/card/index'


export const ModalBet = () =>{
   
    return(
        <DivStyles>
          <div className='cards'>
            <Card color="blue"/>
            <Card color="green"/>
            <Card color="orange"/>
          </div>
        </DivStyles>
    )
}