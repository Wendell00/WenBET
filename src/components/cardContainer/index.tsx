import { CardContainerStyles } from './styles'
import { Card } from './card/index'
import VanillaTilt from 'vanilla-tilt';
import React, { useRef, useEffect } from 'react';

export const CardContainer = () =>{
    const contents = [
        { id: 1, card: <Card/>},
        { id: 2, card: <Card/>},
    ]

    const contentRefs = contents.map(() => useRef<HTMLDivElement>(null))

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
                {contents.map((content, index) =>{
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
