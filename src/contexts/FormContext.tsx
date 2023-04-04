import { createContext, useReducer, ReactNode } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextData {
  name: string;
  setName: (name: string) => void;
  msgTyped: string;
  setMsgTyped: (name: string) => void;
  startBet: boolean;
  setStartBet: (startBet: boolean) => void;
}

type Action =
  | { type: 'SET_NAME', payload: string }
  | { type: 'SET_MSG_TYPED', payload: string }
  | { type: 'SET_START_BET', payload: boolean };

function reducer(state: FormContextData, action: Action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload, msgTyped: `Bem vindo a WenBET, <span class="nick"/> ${action.payload} </span> !` };
    case 'SET_MSG_TYPED':
      return { ...state, msgTyped: action.payload };
    case 'SET_START_BET':
      return { ...state, startBet: !state.startBet };
    default:
      return state;
  }
}

export const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, { 
    name: '', setName: () => {},
    startBet: false, setStartBet: () => {},
    msgTyped: '', setMsgTyped: () => {}
    });

  function setName(name: string) {
    dispatch({ type: 'SET_NAME', payload: name });
  }

  function setStartBet(startBet: boolean) {
    dispatch({ type: 'SET_START_BET', payload: startBet});
  }

  function setMsgTyped(msgTyped: string) {
    dispatch({ type: 'SET_MSG_TYPED', payload: msgTyped });
  }

  return (
    <FormContext.Provider value={{ 
      name: state.name, setName, 
      startBet: state.startBet, setStartBet,
      msgTyped: state.msgTyped, setMsgTyped
      }}>
      {children}
    </FormContext.Provider>
  )
}