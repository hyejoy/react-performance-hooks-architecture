import React, { useState, useMemo } from "react";

export default function StockAnalyzer() {
  const [stockPrice, setStockPrice] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // [무거운 연산 로직] 10억 번의 루프를 도는 함수입니다.
  const analyzeData = (price) => {
    console.log("📈 [연산 가동] 10억 번의 루프를 돌며 데이터를 분석 중...");
    for (let i = 0; i < 1000000000; i++) {
      //
    } // 의도적인 과부하
    return price * 12.345;
  };

  // TODO: analyzeData의 결과값을 useMemo 금고에 보관하세요.
  // 오직 stockPrice가 변할 때만 이 금고를 새로 고쳐야 합니다.
  // const analyzedResult = analyzeData(stockPrice);

  /**
   * 💡 useMemo의 콜백함수는 지금 당장 계산하라는 명령이 아니고
   * 내가 필요할때 이 함수를 실행해서 결과값을 만들어 달라는 뜻
   */
  const analyzedResult = useMemo(() => {
    return analyzeData(stockPrice);
  }, [stockPrice]); // 랜더링시마다 이전 stockPrice값과 현재 값을 비교하여 변화가 있을때만 다시 실행함

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: isDarkMode ? "#222" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        minHeight: "100vh",
        transition: "all 0.3s",
      }}
    >
      <h2>📊 주식 분석 데이터 분석실</h2>
      <p>현재가: {stockPrice} USD</p>
      <p>
        분석 결과: <b>{analyzedResult}</b>
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => setStockPrice((prev) => prev + 10)}>
          주가 변동 (+10)
        </button>

        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️ 라이트 모드로" : "🌙 다크 모드로"}
        </button>
      </div>

      <p style={{ marginTop: "20px", color: "#888" }}>
        팁: 다크 모드를 바꿀 때 콘솔에 '연산 가동' 로그가 찍히는지 확인하세요!
      </p>
    </div>
  );
}
