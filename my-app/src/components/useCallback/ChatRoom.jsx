import React, { useState, useCallback } from "react";

export default function ChatRoom() {
  const [message, setMessage] = useState("");

  // TODO: 아래 함수는 성능을 위해 useCallback으로 박제되었습니다.
  // 하지만 의존성 배열이 비어있어([]) 최신 message 상태를 읽지 못합니다.
  // 버그를 수정하여 전송 버튼 클릭 시 최신 입력값이 alert에 뜨도록 하세요.
  const sendMessage = useCallback(() => {
    if (message === "") {
      alert("⚠️ 버그 발생: 내용을 입력했는데도 빈 값으로 인식합니다!");
      return;
    }

    alert(`🚀 서버로 전송: ${message}`);
    setMessage(""); // 전송 후 입력창 비우기
  }, [message]); // <--- 🔍 이 부분이 버그의 핵심 원인입니다!

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>💬 실시간 고객 지원 채팅</h2>
      <p>성능 최적화를 위해 전송 함수가 '박제'된 상태입니다.</p>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="상담 내용을 입력하세요..."
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "12px 20px",
            marginLeft: "10px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          전송하기
        </button>
      </div>

      <div style={{ marginTop: "30px", color: "#666", fontSize: "0.9rem" }}>
        <strong>현재 입력 중:</strong> {message || "(비어 있음)"}
      </div>
    </div>
  );
}
