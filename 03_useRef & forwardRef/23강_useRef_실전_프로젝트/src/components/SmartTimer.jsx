import { useState, useEffect, useRef } from "react";

export default function SmartTimer() {
  const [count, setCount] = useState(0);

  // 1. [리모컨] 검색창 자동 포커스용
  const inputRef = useRef(null);
  // 2. [금고] setInterval ID 보관용 (렌더링 방지)
  const timerIdRef = useRef(null);
  // 3. [스위치] 첫 렌더링 방어용
  const isFirstRender = useRef(true);
  // 4. [기록장] 이전 카운트 비교용
  const prevCountRef = useRef();

  // 자동 포커스 로직
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // 데이터 추적 및 알림 로직
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(`기록: 현재(${count}초), 이전(${prevCountRef.current}초)`);
    prevCountRef.current = count;
  }, [count]);

  const startTimer = () => {
    if (timerIdRef.current) return; // 중복 실행 방지
    timerIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "15px",
      }}
    >
      <h3>⏱️ 스마트 타이머 시스템</h3>
      <input
        ref={inputRef}
        placeholder="여기에 메모하세요"
        style={{ padding: "8px" }}
      />
      <h1 style={{ fontSize: "3rem" }}>{count}s</h1>
      <button
        onClick={startTimer}
        style={{ backgroundColor: "#4caf50", color: "white" }}
      >
        시작
      </button>
      <button
        onClick={stopTimer}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          marginLeft: "10px",
        }}
      >
        정지
      </button>
    </div>
  );
}
