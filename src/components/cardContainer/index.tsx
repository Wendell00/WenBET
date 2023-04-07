import { CardContainerStyles } from './styles'
import { Card } from './card/index'
import VanillaTilt from 'vanilla-tilt';
import React, { useRef, useEffect } from 'react';
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

interface VanillaInterface {
    bet: boolean;
  }

interface CardInterface{
    display: boolean;
}

export const VanillaTiltFunc = ({bet, ...props}: VanillaInterface) => {
    const {setColorBet, colorBet, setMsgTyped} = useContext(FormContext)
    const listBet: Array<String> = ['Blue','Blue','Blue','Green','Orange','Orange','Orange'];
    let countBet: number = 0
    let cardChoice: number

    function randomSort() {
        return 0.5 - Math.random();
      }
    
    let listRandom = listBet.sort(randomSort);

    const contents = [
        { id: 1, card: <Card color=''/>},
        { id: 2, card: <Card color=''/>},
        { id: 3, card: <Card color=''/>},
        { id: 4, card: <Card color=''/>},
        { id: 5, card: <Card color=''/>},
        { id: 6, card: <Card color=''/>},
        { id: 7, card: <Card color=''/>}
    ]

    const contentsForModal = [
        { id: 1, card: <Card color='Blue'/>},
        { id: 2, card: <Card color='Green'/>},
        { id: 2, card: <Card color='Orange'/>},
    ]
    

    const contentRefs = bet ? contents.map(() => useRef<HTMLDivElement>(null)) : contentsForModal.map(() => useRef<HTMLDivElement>(null))
    const contentCurrent = bet ? contents : contentsForModal

    useEffect(() => {
        contentRefs.forEach((ref) =>{
            if(ref.current !== null) {
                VanillaTilt.init(ref.current, {
                    max: 25,
                    speed: 400,
                    glare: true,
                    "max-glare": 0.5,
                });
            }
        });
      }, [contentRefs]);

    useEffect(() => {
        const allCards = document.querySelectorAll('.card')

        function clearCard(){
            allCards.forEach((card, index) => {
                allCards[index].classList.remove('white-border')
            });
        }

        function showCards(cardChoice: number){
            allCards.forEach((card, index) => {
                allCards[index].classList.add(`changeCard${listRandom[index]}`)
                if(index = cardChoice){
                    allCards[index].classList.add('white-border')
                }
            });
        }

        allCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if(!bet){
                    clearCard()
                    allCards[index].classList.add('white-border')
                    setColorBet(allCards[index].classList[0])
                }
                else if(bet && countBet == 0){
                    allCards[index].classList.add(`changeCard${listRandom[index]}`)
                    let answer = allCards[index].classList.toString().split(' ')[1].slice(10)
                    if(answer == colorBet){
                        setMsgTyped('Parabéns você Acertou!')
                    }
                    else{
                        setMsgTyped('Infelizmente você Errou!')
                    }
                    cardChoice = index
                    countBet++
                    setTimeout(() => {
                        showCards(cardChoice)
                    }, 1500);
                }
            });
          });
      }, []);


      return(
        <>
            <CardContainerStyles>
                {contentCurrent.map((content, index) =>{
                    return (
                        <div className='tilt' ref={contentRefs[index]} key={content.id}>
                            {content.card}
                        </div>
                    )
                })}
            </CardContainerStyles>
        </>
    )

}

export const CardContainer = ({display = false, ...props}: CardInterface) =>{
    const {firstBet} = useContext(FormContext)
    return(
        <>
            {(!display && !firstBet) && (
                <VanillaTiltFunc bet={true}/>
            )}
        </>
    )
}
