import { createContext, useState } from 'react'
import localStorageService from '../services/localStorageService'

export const StoreContext = createContext()

function StoreContextProvider({ children }) {
  // const [state,dispatch] = useReducer(reducer, initialState)
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorageService.getToken()
  )
  const [isLoading, setIsLoading] = useState(false)
  return (
    <StoreContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, isLoading, setIsLoading }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
