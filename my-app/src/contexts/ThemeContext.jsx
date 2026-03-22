import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(); // 객체틀 만들기

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const value = { isDark, toggleTheme };

  return (
    // value는 객체안의 값을 넣는것!
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
