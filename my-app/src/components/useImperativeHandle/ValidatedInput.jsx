import { useState, useImperativeHandle, forwardRef, useRef } from "react";
const ValidatedInput = forwardRef((props, ref) => {
  /**
   * 내부 참조 (useRef): 부모가 보낸 조종기를 받기 전, 자식 스스로 inputRef를 만들어 실제 DOM을 통제합니다.
   * 비밀 버튼 1 (validate): 부모가 호출하면 자신의 값을 확인해 에러 상태를 바꾸고, 성공 여부(boolean)를 부모에게 보고합니다.
   * 비밀 버튼 2 (focus): 검증 실패 시 부모가 사용자의 시선을 해당 입력창으로 즉시 옮길 수 있게 합니다.
   */
  const inputRef = useRef();
  const [error, setError] = useState(false);
  useImperativeHandle(
    ref,
    () => ({
      validate: () => {
        const isValid = !!inputRef.current.value;
        setError(!isValid);
        return isValid;
      },
      focus: () => inputRef.current.focus(),
    }),
    [],
  );
  return (
    <div>
      <input
        ref={inputRef}
        placeholder={props.placeholder}
        style={{ border: error ? "2px solid red" : "1px solid gray" }}
      />
      {error && <p style={{ color: "red", fontSize: "10px" }}>필수입니다.</p>}
    </div>
  );
});
export default ValidatedInput;
