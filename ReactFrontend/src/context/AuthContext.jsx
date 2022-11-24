import { createContext } from "react";

const AuthContext = createContext({
    isLoggedIn: true,
    setIsLoggedIn: () => {},
    isAdmin: true,
    setIsAdmin: () => {},
});

export default AuthContext;
