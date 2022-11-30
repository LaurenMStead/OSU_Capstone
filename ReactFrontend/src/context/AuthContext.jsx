import {createContext} from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    isAdmin: false,
    setIsLoggedIn: () => {},
    setIsAdmin: () => {},
});

export default AuthContext;
