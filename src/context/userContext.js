import {createContext, useReducer} from "react";
import userReducer from "../reducers/UserReducer";

function init(initialState) {
    return {username: initialState.username, password: initialState.password};
}

export const UserContext = createContext({username:'',password: ''});

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, false, init);

    return (
        <UserContext.Provider value={{ username: state.username, password: state.password, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};