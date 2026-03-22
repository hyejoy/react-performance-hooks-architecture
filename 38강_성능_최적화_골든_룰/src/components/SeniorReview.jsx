import { useState, useCallback } from "react";
import ExpensiveList from "./ExpensiveList";
export default function SeniorReview() {
  const [items, setItems] = useState([
    { id: 1, text: "성능 측정 먼저 하기" },
    { id: 2, text: "구조적 최적화 우선하기" },
  ]);
  const [count, setCount] = useState(0);
  // 1. [정밀 타격] 리스트 아이템은 개수가 많아질 수 있으므로
  // 삭제 함수의 주소값을 useCallback으로 고정하여 자식의 자물쇠(memo)를 보호합니다.
  const handleDelete = useCallback((id) => {
    setUsers((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        border: "2px solid #4f46e5",
        borderRadius: "20px",
      }}
    >
      {/* 2. [구조적 최적화] 자주 변하는 상태는 별도 컴포넌트로 밀어내어 
             부모의 렌더링 폭발 반경을 최소화합니다. */}
      <h3>단순 카운터: {otherState}</h3>
      <button onClick={() => setOtherState((prev) => prev + 1)}>
        부모 리렌더링 유발
      </button>

      <hr />

      {/* 3. [참조 무결성] 진짜 무거운 리스트에만 최적화를 투입합니다. */}
      <ExpensiveList items={items} onItemClick={handleDelete} />
    </div>
  );
}
