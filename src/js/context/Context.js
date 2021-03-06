import React, { createContext, useReducer } from 'react';

import Reducer from "./Reducer";

const initialState = {
    alertLevel: 2,
    currentRegion: {
        "Region": "Nationwide",
        "Active": 1,
        "Recovered": 1481,
        "Deceased": 22,
        "Total": 1504
    },
    currentSearchQuery: {
        "keyword": '',
        "category": ''
    }
}

export const Context = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const setAlertLevel = (level) => {
        dispatch({ type: "SET_ALERT_LEVEL", payload: level });
    }

    const setRegion = (region) => {
        dispatch({ type: "SET_CURRENT_REGION", payload: region });
    }

    const setSearchQuery = (query) => {
        dispatch({ type: "SET_CURRENT_SEARCH_QUERY", payload: query });
    }

    return <Context.Provider
        value={
            {
                alertLevel: state.alertLevel,
                currentRegion: state.currentRegion,
                currentSearchQuery: state.currentSearchQuery,
                setAlertLevel,
                setRegion,
                setSearchQuery
            }
        }
    >
        {children}
    </Context.Provider>
};
