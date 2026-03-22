import { useState, useLayoutEffect, useRef } from "react";

export default function BasicLayoutEffect() {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (elementRef.current) {
      // 브라우저 레이아웃 엔진에게 실제 수치를 직접 묻습니다.
      const rect = elementRef.current.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, []); // 처음 나타날 때 딱 한 번 측정

  return (
    <div
      ref={elementRef}
      style={{
        width: "50%",
        background: "lightgrey",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      내 실제 너비는 <b>{width}px</b> 입니다.
    </div>
  );
}
