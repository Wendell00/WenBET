import { MainStyles } from './styles'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../../contexts/FormContext'
import * as z from 'zod'; 
import { ZodError } from 'zod';

export const Main = () =>{
    const schema = z.object({
      name: z.string().min(3).max(13)
    });

    const {setName} = useContext(FormContext)
    const navigate = useNavigate()
 
    function showError(error: String){
      const divBet = document.querySelector('.start-bet') as HTMLDivElement;
      divBet.classList.add('shake', 'ptop-10');
      setTimeout(() =>{
        divBet.classList.remove('shake')
      }, 2000)
      const errorP = document.querySelector('.error-text') as HTMLParagraphElement;
      if(error == 'too_small'){
        errorP.innerHTML = "Nome muito pequeno"
      }else if(error == 'too_big'){
        errorP.innerHTML = "Nome muito longo"
      }else{
        errorP.innerHTML = "Nome inválido"
      }
    }

    function handleClick() {
      const nick = document.querySelector(".input-start-bet") as HTMLInputElement;
      const inputName = {
        name: nick.value
      }

      setName(inputName.name)

      try{
        schema.parse(inputName);
        navigate('/bet');
      } catch (error) {
        if (error instanceof ZodError) {
          const code = error.errors[0].code;
          showError(code)

        } else{
          console.log(error)
        }
      }
    }

    return(
        <MainStyles>
          <div className='main-content'>
              <div className='main-inner1'>
                <h1>Teste sua sorte em nosso site de <span>aposta!</span></h1>
                <p className='p1-main'>Em vez de começar depositando dinheiro real, 
                  você pode jogar em nosso site com dinheiro fícticio e se divertir com o ranking.
                  Começe agora:</p>
                <div className='start-bet'>
                  <p className='error-text'></p>
                  <input type="text" className='input-start-bet error-border' placeholder='Digite seu Nome:'/>
                  <button className='btn-start-bet' onClick={handleClick}>Vamos iniciar</button>
                </div>
                <p className='p2-main'>
                  Caso use o nome real, não compartilhamos seus dados com ninguém.
                </p>
              </div>
              <div className='main-inner2'>
                  <img src="./imgHome.png" className='img-home'/>
              </div>
          </div>
        </MainStyles>
    )
}