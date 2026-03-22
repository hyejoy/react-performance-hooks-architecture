import { useState } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import { forwardRef } from "react";

/**
 * [자식 컴포넌트] ValidatedInput
 * 스스로 에러 상태를 관리하고 부모의 검증 명령에 응답합니다.
 */
const HasErrorInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [hasError, setHasError] = useState(false);

  /**
   * TODO: 부모가 호출할 'check' 메서드를 설계하세요.
   * 1. inputRef를 통해 값이 비어있는지 확인합니다.
   * 2. 비어있다면: setHasError(true)를 하고, 해당 인풋에 focus()를 준 뒤, false를 반환합니다.
   * 3. 채워져있다면: setHasError(false)를 하고, true를 반환합니다.
   */
  useImperativeHandle(
    ref,
    () => ({
      check: () => {
        // 여기에 로직을 작성하세요.
        if (inputRef.current.value.trim() === "") {
          setHasError(true);
          inputRef.current.focus();
          return false;
        }

        setHasError(false);
        return true;
      },
    }),
    [],
  );

  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {props.label}
      </label>
      <input
        ref={inputRef}
        placeholder={props.placeholder}
        style={{
          padding: "10px",
          width: "250px",
          border: `2px solid ${hasError ? "#ff4d4f" : "#ccc"}`,
          borderRadius: "4px",
          outline: "none",
        }}
      />
      {hasError && (
        <p style={{ color: "#ff4d4f", fontSize: "12px", margin: "5px 0 0" }}>
          ⚠️ {props.label} 항목은 필수 입력입니다.
        </p>
      )}
    </div>
  );
});
