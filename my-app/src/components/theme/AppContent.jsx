import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeButton from "./ThemeButton";

export default function AppContent() {
  const { isDark } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#222",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyle}>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <h1>🌐 React Times</h1>
      </header>
      <div style={{ display: "flex", padding: "20px" }}>
        <main style={{ marginLeft: "40px" }}>
          <h2>오늘의 주요 뉴스</h2>
          <p>Context API를 활용하면 테마 변경도 누워서 떡 먹기!</p>
        </main>
        <ThemeButton />
      </div>
    </div>
  );
}
