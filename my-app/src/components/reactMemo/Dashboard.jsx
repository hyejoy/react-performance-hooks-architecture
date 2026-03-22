import React, { useState, useEffect, memo } from "react";

// [자식 컴포넌트] 공지사항 배너
// TODO: 이 컴포넌트에 React.memo를 사용하여 Props가 변하지 않으면 렌더링을 건너뛰게 하세요.
const NoticeBanner = memo(({ content }) => {
  console.log("📢 [배너] 공지사항 배너가 '강제로' 다시 그려지고 있습니다.");

  return (
    <div style={bannerStyle}>
      <strong>[중요 공지]</strong> {content}
    </div>
  );
});

// [부모 컴포넌트] 대시보드 본체
export default function Dashboard() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 1초마다 시간을 업데이트하여 부모를 리렌더링시킵니다.
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>🕒 실시간 대시보드: {time}</h1>
      <hr />

      {/* 이 배너는 content가 바뀌지 않는 한 다시 그려질 이유가 없습니다. */}
      <NoticeBanner content="오늘 오후 6시부터 시스템 점검이 예정되어 있습니다." />

      <p style={{ marginTop: "20px", color: "#666" }}>
        팁: 콘솔을 열어 배너 로그가 1초마다 찍히는지 확인해 보세요!
      </p>
    </div>
  );
}

const bannerStyle = {
  background: "#fffae6",
  padding: "15px",
  border: "1px solid #ffe58f",
  borderRadius: "8px",
  color: "#856404",
};
