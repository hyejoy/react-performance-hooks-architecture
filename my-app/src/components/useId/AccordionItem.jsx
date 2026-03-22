import React, { useState } from "react";
import { useId } from "react";

export default function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const baseId = useId();
  const headerId = baseId + "-header";
  const panelId = baseId + "-pannel";

  return (
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <button
        id={headerId}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        // 이 버튼이 어느 패널을 제어하는지 연결이 필요합니다.
        aria-controls={panelId}
        style={{
          width: "100%",
          padding: "15px",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div
          id={panelId}
          // 이 패널의 제목이 무엇인지 버튼과 연결이 필요합니다.
          role="region" // 스크린 리더에게 독립된 영역임을 알림
          aria-labelledby={headerId} // 이 영역의 이름은 버튼의 텍스트임을 명시
          style={{ padding: "15px", backgroundColor: "#f9f9f9" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
