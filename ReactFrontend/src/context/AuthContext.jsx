import {createContext, useState} from "react";

const AuthContext = createContext({
    isLoggedIn: true,
    isAdmin: true,
    setIsLoggedIn: () => {},
    setIsAdmin: () => {},
});

export default AuthContext;
