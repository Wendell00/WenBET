import { MainStyles } from './styles'
import { useNavigate } from 'react-router-dom'

export const Main = () =>{

    const navigate = useNavigate()

    function handleClick() {
      navigate('/bet');
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
                  <input type="text" className='input-start-bet' placeholder='Digite seu Nickname:'/>
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