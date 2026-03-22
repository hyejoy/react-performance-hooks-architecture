import React, { useState, useRef, useEffect } from "react";
import { useLayoutEffect } from "react";

export default function TooltipStarter() {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  // ❌ 문제 지점: useEffect는 Paint 이후에 실행됩니다.
  // 툴팁이 (0,0)에 생겼다가 아래로 이동하는 '시각적 점프'가 발생합니다.
  // useEffect(() => {
  //   if (show && buttonRef.current && tooltipRef.current) {
  //     const buttonRect = buttonRef.current.getBoundingClientRect();
  //     const tooltipRect = tooltipRef.current.getBoundingClientRect();

  //     // 화면에 이미 그려진 뒤에 좌표를 수정하므로 사용자는 '이동 과정'을 보게 됩니다.
  //     setCoords({
  //       top: buttonRect.bottom + 10,
  //       left: buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2,
  //     });
  //   }
  // }, [show]);

  useLayoutEffect(() => {
    if (show && buttonRef.current && tooltipRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      setCoords({
        top: buttonRect.bottom + 10,
        left: buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2,
      });
    }
  }, [show]);

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h3>미션 #31. 시작 코드 (Flicker 발생)</h3>
      <button
        ref={buttonRef}
        onClick={() => setShow(!show)}
        style={{ padding: "10px 20px" }}
      >
        툴팁 열기
      </button>

      {show && (
        <div
          ref={tooltipRef}
          style={{
            position: "fixed",
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            background: "#333",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
            zIndex: 100,
          }}
        >
          깜빡임이 느껴지시나요? 😢
        </div>
      )}
    </div>
  );
}
