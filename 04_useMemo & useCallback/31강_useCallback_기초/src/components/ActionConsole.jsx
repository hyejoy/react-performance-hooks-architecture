import { useState, useCallback } from "react";
import ExpensiveChild from "./ExpensiveChild";

export default function ActionConsole() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  //의존성 배열을 비워두면, 컴포넌트가 태어나서 죽을 때까지 이 함수의 주소값은 절대 변하지 않습니다.
  const handleAction = useCallback(() => {
    console.log("액션 실행!");
  }, []);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h2>부모 컴포넌트</h2>
      <button onClick={() => setCount(count + 1)}>카운트: {count}</button>
      <button onClick={() => setIsDark(!isDark)}>배경색 전환</button>
      {/*  진짜 목적은 자식 컴포넌트의 불필요한 리렌더링을 차단 */}
      <ExpensiveChild onAction={handleAction} />
    </div>
  );
}
