import { FormContextProvider } from './contexts/FormContext'
import { Home } from './pages/home/home'
import { Game } from './pages/game/game'
import { LayoutBet } from './layouts/LayoutBet'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
    return (
      <div>
        <BrowserRouter>
          <FormContextProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bet' element={<LayoutBet />}>
                  <Route path='/bet' element={<Game />} />
                </Route>
            </Routes>
          </FormContextProvider>
        </BrowserRouter>
      </div>
    )
  }
  
  export default App
