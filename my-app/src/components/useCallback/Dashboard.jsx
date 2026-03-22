import React, { useState, useEffect, useCallback, memo } from "react";

// [자식 컴포넌트] 복잡한 사원 카드
// TODO 1: React.memo를 사용하여 이 컴포넌트가 Props가 변할 때만 그려지도록 보호하세요.
const EmployeeCard = React.memo(({ onRemove }) => {
  console.log("👷 [자식] 사원 카드 컴포넌트가 '유령 렌더링' 되고 있습니다!");

  return (
    <div style={cardStyle}>
      <span>사원명: 홍길동 (개발 1팀)</span>
      <button onClick={onRemove} style={{ marginLeft: "10px" }}>
        정보 삭제
      </button>
    </div>
  );
});

// [부모 컴포넌트] 대시보드
export default function Dashboard() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 1초마다 부모를 리렌더링시키는 시계 로직
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // TODO 2: 이 함수가 리렌더링 때마다 새로 생성되지 않도록 useCallback으로 박제하세요.
  const handleRemove = useCallback(() => {
    alert("사원 정보를 삭제하시겠습니까?");
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>🕒 실시간 관제 시간: {time}</h1>
      <hr />
      <h3>인사 관리 목록</h3>

      {/* 최적화의 대상이 되는 자식 컴포넌트 */}
      <EmployeeCard onRemove={handleRemove} />
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  marginTop: "10px",
  borderRadius: "8px",
  background: "#f9f9f9",
};
