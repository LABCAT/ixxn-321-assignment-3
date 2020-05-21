import React, { createContext, useReducer } from 'react';

import Reducer from "./Reducer";

const initialState = {
    alertLevel: 2,
}

export const Context = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const setAlertLevel = (level) => {
        dispatch({ type: "SET_ALERT_LEVEL", payload: level });
    }

    return <Context.Provider
        value={
            {
                alertLevel: state.alertLevel,
                setAlertLevel
            }
        }
    >
        {children}
    </Context.Provider>
};
