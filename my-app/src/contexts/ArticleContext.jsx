import { useState } from "react";
import { createContext } from "react";

export const ArticleContext = createContext();

const initialUser = null;

export function ArticelProvider({ children }) {
  const [user, setUser] = useState(initialUser);

  const login = (name, isAdmin) => {
    setUser({ name, isAdmin });
  };

  const logout = () => {
    setUser(initialUser);
  };

  const value = { user, login, logout };
  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}
