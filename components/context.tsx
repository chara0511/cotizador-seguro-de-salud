import { createContext, FC, useContext, useMemo, useReducer } from 'react'

export interface StateModel {
  numDoc: string
  phone: string
  date: string
  title: string
  firstName: string
  lastName: string
  gender: string
  add?: string
  plan?: string
}

interface State {
  values: StateModel
}

const initialState: State = {
  values: {
    numDoc: '',
    phone: '',
    date: '',
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    add: '',
    plan: '',
  },
}

type ACTION = { type: 'GET_FORM_VALUES'; payload: StateModel }

const UserContext = createContext<State | any>(initialState)

const userReducer = (state: State, action: ACTION) => {
  switch (action.type) {
    case 'GET_FORM_VALUES':
      return { ...state, values: action.payload }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const UserProvider: FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const getFormValues = (q: StateModel) => dispatch({ type: 'GET_FORM_VALUES', payload: q })

  const value = useMemo(() => ({ ...state, getFormValues }), [state])

  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error(`useUser must be used within a UIProvider`)
  }

  return context
}

export const ManagedUserContext: FC = ({ children }) => <UserProvider>{children}</UserProvider>
