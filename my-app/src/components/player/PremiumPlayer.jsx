import React, { useState, useRef, useEffect } from "react";

export default function PremiumPlayer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림 상태 (전광판)

  // --- useRef 리모컨 & 비밀장부 세팅 ---
  const videoRef = useRef(null); // 비디오 DOM 연결
  const dropdownRef = useRef(null); // 설정 메뉴 영역 연결
  const lastTimeRef = useRef(0); // 실시간 재생 시간 기록 (리렌더링 X)
  const timerIdRef = useRef(null); // 타이머 ID 보관 금고
  const isFirstLoad = useRef(true); // 첫 렌더링 방어 스위치

  // TODO 1: 0.1초마다 재생 시간을 lastTimeRef에 기록하는 타이머를 시작하세요.
  const startTracking = () => {
    // 이미 가동 중이면 중단(return), 아니면 setInterval 실행 및 ID 저장
    if (timerIdRef.current) return; // 중복 실행 방지 먼저
    if (videoRef.current) {
      timerIdRef.current = setInterval(() => {
        lastTimeRef.current = videoRef.current.currentTime;
        console.log(lastTimeRef.current);
      }, 600);
    }
  };

  // TODO 2: 타이머를 멈추고 금고(timerIdRef.current)를 비우세요.
  const stopTracking = () => {
    // clearInterval 실행 및 ID 초기화
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  // TODO 3: 영역 밖 클릭 감지 로직을 구현하세요.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      // dropdownRef 영역 밖을 클릭했다면 메뉴 닫기
    };
    window.addEventListener("mousedown", handleClickOutside);

    // document에 mousedown 이벤트 등록 및 return에서 제거(Cleanup)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // TODO 4: 첫 렌더링 시에만 알림을 띄우세요. (isFirstLoad 활용)
  useEffect(() => {
    if (isFirstLoad.current) {
      alert("이전에 시청하던 지점부터 재생을 시작할 수 잇씁니다.");
      isFirstLoad.current = false;
    }

    // 알림 후 스위치 끄기
  }, []);

  return (
    <div
      style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h1>🎬 React Flix Premium (Final)</h1>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          background: "#000",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <video
          ref={videoRef}
          width="640"
          controls
          onPlay={startTracking}
          onPause={stopTracking}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            fontSize: "28px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ⚙️
        </button>

        {isMenuOpen && (
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: "55px",
              right: "15px",
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              textAlign: "left",
              minWidth: "200px",
            }}
          >
            <h4 style={{ marginTop: 0 }}>플레이어 설정</h4>
            <p style={{ fontSize: "14px", color: "#666" }}>
              재생 속도: 1.0x (표준)
            </p>
            <button
              onClick={() =>
                alert(`마지막 기록 지점: ${lastTimeRef.current.toFixed(1)}초`)
              }
              style={{
                width: "100%",
                padding: "10px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              실시간 기록 확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
