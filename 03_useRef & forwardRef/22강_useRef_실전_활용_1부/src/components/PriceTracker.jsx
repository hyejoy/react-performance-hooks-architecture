import { useState, useEffect, useRef } from "react";

export default function PriceTracker() {
  const [price, setPrice] = useState(1000);

  // 1. 이전 가격을 저장할 금고를 준비합니다.
  const prevPriceRef = useRef();

  useEffect(() => {
    // 2. [핵심 타이밍] 화면 렌더링이 완료된 '후'에 현재 가격을 금고에 넣습니다.
    // 이렇게 하면 다음번 렌더링이 일어날 때, 이 상자에는 '직전 값'이 들어있게 됩니다.
    prevPriceRef.current = price;
  }, [price]);

  // 3. 렌더링 시점에 금고를 열어 지난 기록을 가져옵니다.
  const prevPrice = prevPriceRef.current;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "15px",
        backgroundColor: "#fff",
      }}
    >
      <h3>📈 주식 시세 분석기 (이전 값 추적)</h3>
      <p>
        실시간 현재가: <b style={{ fontSize: "1.2rem" }}>{price}원</b>
      </p>
      <p>
        직전 가격:{" "}
        <b>
          {prevPrice !== undefined ? `${prevPrice}원` : "데이터 수집 중..."}
        </b>
      </p>

      <div
        style={{
          padding: "10px",
          borderRadius: "8px",
          color:
            price > prevPrice ? "red" : price < prevPrice ? "blue" : "black",
          backgroundColor: "#f8f9fa",
        }}
      >
        결과:{" "}
        {price > prevPrice
          ? "▲ 가격 상승"
          : price < prevPrice
            ? "▼ 가격 하락"
            : "변동 없음"}
      </div>

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setPrice((p) => p + 100)}>가격 올리기</button>
        <button
          onClick={() => setPrice((p) => p - 100)}
          style={{ marginLeft: "10px" }}
        >
          가격 내리기
        </button>
      </div>
    </div>
  );
}
