import { useState, useMemo } from "react";
/**
 * 언제 쓸까요?
 * : 10,000개 이상의 데이터를 정렬(Sort)하거나 필터링(Filter)할 때,
 * 혹은 렌더링 시 CPU 사용량이 눈에 띄게 올라가는 복잡한 로직이 있을 때 사용하세요.
 */

export default function CalculationConsole() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // 1. [문제 상황] 만약 useMemo가 없다면, 배경색(isDark)만 바꿔도
  // 아래의 10억 번 루프가 매번 다시 돌아가서 화면이 버벅이게 됩니다.

  const result = useMemo(() => {
    console.log(
      "%c ⚙️ 금고에 기록이 없거나 데이터가 변경됨. 연산 가동!",
      "color: #ff4757; font-weight: bold;",
    );

    // 의도적으로 연산 부하를 줍니다 (10억 번 루프)
    for (let i = 0; i < 1000000000; i++) {}

    return number * 100;
  }, [number]); // 오직 'number'가 바뀔 때만 이 금고를 새로 고칩니다.

  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "40px",
        minHeight: "100vh",
        transition: "all 0.3s",
      }}
    >
      <h2>🔢 숫자 연산 콘솔</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        style={{ padding: "10px", fontSize: "1.2rem" }}
      />
      <p style={{ fontSize: "1.5rem" }}>
        결과(100배): <strong>{result}</strong>
      </p>

      <hr />

      <h3>🎨 테마 설정</h3>
      <p>배경색을 바꿀 때는 위의 10억 번 연산이 작동하지 않아야 합니다.</p>
      <button
        onClick={() => setIsDark(!isDark)}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {isDark ? "라이트 모드로" : "다크 모드로"}
      </button>
    </div>
  );
}
