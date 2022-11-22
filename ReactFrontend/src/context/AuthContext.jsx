import { createContext } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    isAdmin: false,
    setIsAdmin: () => {},
});

export default AuthContext;
