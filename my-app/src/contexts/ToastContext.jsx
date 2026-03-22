import { createContext, useReducer } from "react";
import { toastReducer } from "../reducer/toast/toastReducer";

export const ToastContext = createContext();
export function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(toastReducer, []);

  const value = { state, dispatch };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
