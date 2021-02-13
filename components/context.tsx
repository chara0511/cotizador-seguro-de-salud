import { createContext, FC, useContext, useEffect, useMemo, useReducer } from 'react'

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

export type VIEW = 'basic' | 'advanced' | 'premium' | 'full'
interface State {
  values: StateModel
  view: VIEW
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
  view: 'basic',
}

type ACTION =
  | { type: 'GET_FORM_VALUES'; payload: StateModel }
  | { type: 'TOGGLE_VIEW'; payload: VIEW }

const UserContext = createContext<State | any>(initialState)

const userReducer = (state: State, action: ACTION) => {
  switch (action.type) {
    case 'GET_FORM_VALUES':
      return { ...state, values: action.payload }

    case 'TOGGLE_VIEW':
      return {
        ...state,
        view: action.payload,
      }

    default:
      throw new Error(`Unhandled action type`)
  }
}

// set localstorage
const persistedState: string | null = 'values'
const init = () => {
  let preloadedState
  try {
    preloadedState = JSON.parse(window.localStorage.getItem(persistedState) || '')
  } catch (e) {
    // ignore
  }
  return preloadedState || initialState
}

const UserProvider: FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(state))
  }, [state])

  const getFormValues = (q: StateModel) => dispatch({ type: 'GET_FORM_VALUES', payload: q })
  const toggleView = (view: VIEW) => dispatch({ type: 'TOGGLE_VIEW', payload: view })

  const value = useMemo(() => ({ ...state, getFormValues, toggleView }), [state])

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
