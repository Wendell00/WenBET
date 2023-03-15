import { CardContainerStyles } from './styles'
import { Card } from './card/index'
import VanillaTilt from 'vanilla-tilt';
import React, { useRef, useEffect } from 'react';

export const CardContainer = () =>{
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
          VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
          });
        }
      }, [tiltRef]);

    return(
        <>
            <CardContainerStyles>
                <div className="tilt" ref={tiltRef}>
                    <Card/>
                </div>
                <div className="tilt" ref={tiltRef}>
                    <Card/>
                </div>
                <div className="tilt" ref={tiltRef}>
                    <Card/>
                </div>
                <div className="tilt" ref={tiltRef}>
                    <Card/>
                </div>
                <div className="tilt" ref={tiltRef}>
                    <Card/>
                </div>
                <div className="tilt" ref={tiltRef}>
                    <Card/>
                </div>
                <div className="tilt" ref={tiltRef}>
                    <Card/>
                </div>

            </CardContainerStyles>
        </>
    )
}