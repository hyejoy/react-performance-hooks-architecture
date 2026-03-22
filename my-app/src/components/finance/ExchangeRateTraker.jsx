import React, { useState, useEffect, useRef } from "react";

export default function ExchangeRateTracker() {
  const [rate, setRate] = useState(1300); // 현재 환율 상태

  // TODO 1: 직전 환율을 기억할 '타임머신(Ref)'을 생성하세요.
  const prevRateRef = useRef();
  // TODO 2: 첫 렌더링인지 확인하는 '비밀 스위치(Ref)'를 만드세요. (초기값 true)
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      // TODO 3: 만약 첫 렌더링이라면 스위치만 끄고(false) 함수를 종료하세요.
      firstRenderRef.current = false;
      return;
    }
    // TODO 4: 환율이 변경되었을 때만 alert(`환율이 ${rate}원으로 변동되었습니다.`)를 띄우세요.
    alert(`환율이 ${rate}원으로 변동되었습니다.`);
    // TODO 5: 다음번 비교를 위해 현재 rate를 타임머신(Ref)에 저장하세요.
    prevRateRef.current = rate;
  }, [rate]);

  // TODO 6: 타임머신에서 꺼낸 '직전 환율'을 변수에 담으세요.
  const prevRate = prevRateRef.current;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h3>💹 실시간 환율 추적기</h3>
      <p>
        현재 환율: <b>{rate}원</b>
      </p>
      <p>
        직전 환율:{" "}
        <b>{prevRate !== undefined ? `${prevRate}원` : "데이터 수집 중..."}</b>
      </p>

      <div style={{ fontSize: "24px", margin: "10px 0" }}>
        {/* TODO 7: 현재 환율과 직전 환율을 비교하여 ▲, ▼, - 를 표시하세요. */}
      </div>

      <button onClick={() => setRate((prev) => prev + 10)}>환율 올리기</button>
      <button onClick={() => setRate((prev) => prev - 10)}>환율 내리기</button>
    </div>
  );
}
