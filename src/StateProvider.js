import React, {createContext, useContext,useReducer} from "react";

//preparing the data layer
export const StateContext= createContext();

export const StateProvider=({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is a hook that allows as to pull info from the data layer
export const useStateValue = () => useContext(StateContext);

//reducer listen to changes