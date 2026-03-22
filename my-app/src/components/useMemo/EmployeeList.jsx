import React, { useState, useMemo } from "react";

// 1만 명의 가상 사원 데이터를 생성합니다. (수정 불필요)
const mockEmployees = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Employee ${i + 1}`,
  dept: i % 2 === 0 ? "Engineering" : "Sales",
}));

export default function EmployeeList() {
  const [query, setQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  // TODO: 아래 필터링 로직을 useMemo로 감싸 최적화하세요.
  // 오직 query가 바뀔 때만 1만 번의 루프를 돌아야 합니다.
  // console.log("🔥 [연산 발생] 1만 명의 데이터를 필터링 중입니다...");
  // const filteredEmployees = mockEmployees.filter((emp) =>
  //   emp.name.toLowerCase().includes(query.toLowerCase()),
  // );

  const filteredEmployees = useMemo(() => {
    console.log("🔥 [연산 발생] 1만 명의 데이터를 필터링 중입니다...");
    const filteredList = mockEmployees.filter((employee) =>
      employee.name.toLocaleLowerCase().includes(query.toLowerCase()),
    );
    return filteredList;
  }, [query]);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: isDark ? "#121212" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h2>👥 사원 명부 (총 10,000명)</h2>

      <input
        type="text"
        placeholder="사원 이름을 입력하세요..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", fontSize: "1rem" }}
      />

      <button
        onClick={() => setIsDark(!isDark)}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        {isDark ? "☀️ 라이트 모드" : "🌙 다크 모드"}
      </button>

      <p style={{ color: "#888" }}>
        현재 검색된 인원: <b>{filteredEmployees.length}명</b>
      </p>

      <div
        style={{
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid #ddd",
        }}
      >
        <ul>
          {filteredEmployees.slice(0, 50).map((emp) => (
            <li key={emp.id}>
              {emp.name} ({emp.dept})
            </li>
          ))}
          {filteredEmployees.length > 50 && (
            <li>...외 {filteredEmployees.length - 50}명 더 있음</li>
          )}
        </ul>
      </div>
    </div>
  );
}
