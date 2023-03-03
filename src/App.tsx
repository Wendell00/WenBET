import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Home} from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
    return (
      <div>
        <BrowserRouter>
          {/* <FormContextProvider> */}
            <Routes>
              <Route path='/' element={<Home />}>
              </Route>
            </Routes>
          {/* </FormContextProvider> */}
        </BrowserRouter>
      </div>
    )
  }
  
  export default App
