import { NavBarStyles } from './styles'
import React, { useEffect, useContext } from 'react';
import { FormContext } from '../../contexts/FormContext'
import Typed from 'typed.js';

export const NavBarBet = () =>{
  const {name, msgTyped} = useContext(FormContext)

  type TypedTextProps = {
    text: string;
  };
  
  function TypedText({ text }: TypedTextProps) {
    const typedRef = React.useRef(null);
  
    useEffect(() => {
      const options = {
        strings: [text],
        typeSpeed: 50,
        backSpeed: 50,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy();
      };
    }, [text]);
  
    return <span ref={typedRef}></span>;
  }

  return(
    <NavBarStyles>
      <div className="nav">
          <p className='text'><TypedText text={`${msgTyped}`}/></p>
      </div>
    </NavBarStyles>
  )
}