import React from "react";
import { useId } from "react";

export default function UserInfoForm({ sectionTitle }) {
  // ❌ 문제 지점: 서버와 클라이언트의 숫자가 달라 하이드레이션 오류를 유발합니다.
  const id = useId();

  return (
    <fieldset
      style={{ marginBottom: "20px", padding: "20px", borderRadius: "8px" }}
    >
      <legend>{sectionTitle}</legend>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor={`${id}-firstName`}>성:</label>
        <input
          id={`${id}-firstName`}
          type="text"
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div>
        {/* '이름' 입력창을 위한 ID를 또 random으로 만들어야 할까요? 코드가 지저분해집니다. */}
        <label htmlFor={`${id}-lastName`}>이름:</label>
        <input
          id={`${id}-lastName`}
          type="text"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </fieldset>
  );
}
