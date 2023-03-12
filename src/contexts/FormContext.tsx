import { createContext, useState, ReactNode } from 'react'

export const FormContext = createContext({})

interface FormContextProviderProps {
  children: ReactNode
}

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [name, setName] = useState(' ')

  return (
    <FormContext.Provider value={{ name, setName }}>
      {children}
    </FormContext.Provider>
  )
}