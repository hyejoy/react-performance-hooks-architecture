import { useContext } from "react";
import { useMemo } from "react";
import { useReducer } from "react";
import { createContext } from "react";

/**
 * 💡 state, dispatch context 분리 이유
 * state와 dispatch를 분리함으로 인해,
 * dispatch만 쓰는 컴포넌트는 state의 영향을 받지않아 리랜더링 되지 않음
 */

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

const initialData = {
  name: null,
  isLoggedIn: false,
  isAdmin: false,
};

export function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        name: "관리자",
        isLoggedIn: true,
        isAdmin: true,
      };

    case "logout":
      return initialData;
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialData);
  const memoizedAuth = useMemo(() => state, [state]);
  return (
    <AuthStateContext.Provider value={memoizedAuth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined)
    throw new Error("AuthProvider 내부에서만 사용할 수 있습니다.");
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined)
    throw new Error("AuthProvider 내부에서만 사용할 수 있습니다.");
  return context;
}
