import { createContext, useReducer } from "react";
import DarkModeReducer from "../reducers/DarkModeReducer";


function init(initialState) {
    return {darkMode: initialState};
}

export const DarkModeContext = createContext({darkMode:false});

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, false, init);

    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
};