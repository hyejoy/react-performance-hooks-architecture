import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeButton() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: isDark ? "#eee" : "#333",
        color: isDark ? "#333" : "#eee",
        borderRadius: "5px",
        border: "none",
        fontWeight: "bold",
      }}
    >
      {isDark ? "☀️ 라이트 모드로 변경" : "🌙 다크 모드로 변경"}
    </button>
  );
}
