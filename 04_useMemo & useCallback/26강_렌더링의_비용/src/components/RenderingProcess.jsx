import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export default function RenderingProcess() {
  // 1. 상태 선언: 이 값이 바뀌면 RenderingProcess 함수 전체가 '재실행'됩니다.
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 2. 무거운 연산 모사: 리렌더링 때마다 CPU는 이 루프를 다시 돌아야 합니다.
  console.log(
    "%c 🚀 부모 컴포넌트(RenderingProcess) 렌더링 시작!",
    "color: #ff4757; font-weight: bold;",
  );

  const startTime = performance.now();
  let heavyValue = 0;
  for (let i = 0; i < 10000000; i++) {
    heavyValue++;
  } // CPU를 점유하는 무거운 연산
  const endTime = performance.now();

  console.log(`연산 소요 시간: ${(endTime - startTime).toFixed(2)}ms`);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ff4757",
        borderRadius: "15px",
      }}
    >
      <h2>🔥 부모 컴포넌트</h2>
      <p>연산 결과: {heavyValue}</p>

      <button onClick={() => setCount(count + 1)}>숫자 올리기 ({count})</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="글자를 입력해도 리렌더링이 일어납니다."
        style={{ width: "100%", marginTop: "10px", padding: "8px" }}
      />

      {/* 3. 자식 컴포넌트 호출: 부모가 리렌더링되면 자식은 아무 이유 없이 다시 그려집니다. */}
      <ChildComponent />
    </div>
  );
}
