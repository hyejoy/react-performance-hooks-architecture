import { useState, useLayoutEffect, useRef } from "react";

function ResponsiveTooltip() {
  const targetRef = useRef(null);
  const tooltipRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (targetRef.current && tooltipRef.current) {
        // 버튼의 현재 위치를 정밀 측정
        const targetRect = targetRef.current.getBoundingClientRect();
        // 버튼 중앙 X좌표: left + (width / 2)
        // 버튼 상단 Y좌표: top
        setCoords({
          x: targetRect.left + targetRect.width / 2,
          y: targetRect.top,
        });
      }
    };

    updatePosition(); // 초기 렌더링 시 보정
    window.addEventListener("resize", updatePosition); // 리사이즈 시 실시간 보정

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div style={{ height: "150vh", padding: "100px" }}>
      <button ref={targetRef} style={{ padding: "10px 20px" }}>
        저를 가리켜 보세요
      </button>

      <div
        ref={tooltipRef}
        style={{
          position: "fixed",
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          transform: "translate(-50%, -110%)", // 중앙 정렬 및 위로 올림
          padding: "8px",
          backgroundColor: "#333",
          color: "white",
          borderRadius: "4px",
          whiteSpace: "nowrap",
          pointerEvents: "none", // 마우스 방해 방지
        }}
      >
        창 크기를 조절해도 자석처럼 따라다닙니다!
      </div>
    </div>
  );
}

export default ResponsiveTooltip;
