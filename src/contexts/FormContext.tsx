import { createContext, useState, ReactNode } from 'react'

export const FormContext = createContext<FormContextData>({} as FormContextData);

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextData {
  name: string;
  setName: (name: string) => void;
}

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [name, setName] = useState(' ')

  return (
    <FormContext.Provider value={{ name, setName }}>
      {children}
    </FormContext.Provider>
  )
}