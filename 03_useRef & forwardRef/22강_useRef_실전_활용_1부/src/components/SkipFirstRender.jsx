import { useState, useEffect, useRef } from "react";

export default function SkipFirstRender() {
  const [count, setCount] = useState(0);

  // 1. [비밀 스위치] 처음 왔는지 알려주는 플래그입니다.
  // 화면에 보일 필요가 없으므로 useRef가 최적입니다.
  const isFirstRender = useRef(true);

  useEffect(() => {
    // 2. 만약 첫 방문(true)이라면?
    if (isFirstRender.current) {
      // 스위치만 false로 끄고(이제 다음부턴 첫 방문이 아니니까요!)
      isFirstRender.current = false;
      // 아무 일도 하지 않고 조용히 빠져나갑니다.
      return;
    }

    // 3. 여기서부터는 스위치가 꺼진 뒤(두 번째 렌더링부터)에만 실행되는 영역입니다.
    console.log("실제 수량 변경 감지! 알림을 전송합니다.");
    alert(`현재 수량이 ${count}개로 변경되었습니다.`);
  }, [count]);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#eef2ff",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <h3>🛒 장바구니 수량 제어 (초기 실행 방지)</h3>
      <p>
        수량: <b>{count}</b>
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        수량 추가하기
      </button>
      <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "10px" }}>
        * 페이지가 처음 열릴 때는 alert가 뜨지 않습니다.
        <br />* 버튼을 누르는 순간부터 alert가 작동합니다.
      </p>
    </div>
  );
}
