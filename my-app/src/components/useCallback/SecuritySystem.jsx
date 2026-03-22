import React, { useState, useCallback } from "react";

export default function SecuritySystem() {
  const [isDark, setIsDark] = useState(false);

  // TODO: 아래 recordLog 함수를 useCallback으로 감싸서 주소값을 박제하세요.
  // 힌트: 의존성 배열을 비워두어([]) 처음 한 번만 생성되게 합니다.

  const recordLog = useCallback(() => {
    console.log("🔒 보안 로그: 새로운 활동이 감지되었습니다.");
  }, []);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "30px",
        minHeight: "100vh",
        transition: "all 0.3s",
      }}
    >
      <h2>🛡️ 사내 보안 관제 시스템</h2>
      <p>현재 테마: {isDark ? "다크 모드" : "라이트 모드"}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setIsDark(!isDark)}>
          테마 전환 (리렌더링 유발)
        </button>
        <button onClick={recordLog}>보안 활동 기록하기</button>
      </div>

      <hr style={{ marginTop: "30px" }} />
      <p style={{ color: "#888" }}>
        <b>학습 포인트:</b> 테마를 바꿀 때마다 리액트 엔진은 함수 전체를 다시
        읽지만,
        <br />
        useCallback을 쓰면 recordLog 함수의 메모리 주소(0x111)를 그대로 유지할
        수 있습니다.
      </p>
    </div>
  );
}
