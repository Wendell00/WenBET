import { CardContainerStyles } from './styles'
import { Card } from './card/index'
import VanillaTilt from 'vanilla-tilt';
import React, { useRef, useEffect } from 'react';

interface VanillaInterface {
    bet: boolean;
  }

export const VanillaTiltFunc = ({bet, ...props}: VanillaInterface) => {
    const contents = [
        { id: 1, card: <Card color=''/>},
        { id: 2, card: <Card color=''/>},
    ]

    const contentsForModal = [
        { id: 1, card: <Card color='blue'/>},
        { id: 2, card: <Card color='green'/>},
        { id: 2, card: <Card color='orange'/>},
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

export const CardContainer = () =>{
    return(
        <>
            <VanillaTiltFunc bet={true}/>
        </>
    )
}
