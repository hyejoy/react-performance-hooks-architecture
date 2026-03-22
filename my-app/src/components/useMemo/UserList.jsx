import { useState, useMemo } from "react";
import { generateUsers } from "./utils/dataGenerator";

const users = generateUsers(); // 1만 명의 데이터

export default function UserList() {
  const [query, setQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  // 로직 분석: 테마 변경(isDark)은 이 금고를 건드리지 못합니다.
  const filteredUsers = useMemo(() => {
    console.log("가동!");
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        color: isDark ? "#f8fafc" : "#0f172a",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h2>👥 유저 리스트 (10,000명)</h2>
      <input
        type="text"
        placeholder="이름으로 검색..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
        }}
      />

      <button
        onClick={() => setIsDark(!isDark)}
        style={{ marginLeft: "10px", padding: "10px 20px", cursor: "pointer" }}
      >
        {isDark ? "☀️ 라이트 모드로" : "🌙 다크 모드로"}
      </button>

      <p>검색 결과: {filteredUsers.length}명</p>
      <ul style={{ maxHeight: "400px", overflowY: "auto" }}>
        {filteredUsers.slice(0, 50).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {filteredUsers.length > 50 && (
          <li>...외 {filteredUsers.length - 50}명</li>
        )}
      </ul>
    </div>
  );
}
