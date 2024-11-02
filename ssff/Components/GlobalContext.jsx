import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const initialState = {
        count: 0,
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <div>
            <GlobalContext.Provider value={{ state, dispatch }}>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}

export default GlobalProvider

