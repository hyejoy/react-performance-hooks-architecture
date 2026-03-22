import { useImperativeHandle, forwardRef, useRef } from "react";
/**
 * Step 1: 복잡한 폼 제어 (ValidatedInput.jsx)
 *부모가 "가입하기" 버튼을 눌렀을 때, 모든 자식 입력창에게 스스로를 검사하고 에러가 있다면 포커스를 잡으라고 명령하는 구조입니다.

 *[로직 분석: 검증 및 포커스 인터페이스]
 *내부 참조 (useRef): 부모가 보낸 조종기를 받기 전, 자식 스스로 inputRef를 만들어 실제 DOM을 통제합니다.
 
 *비밀 버튼 1 (validate): 부모가 호출하면 자신의 값을 확인해 에러 상태를 바꾸고, 성공 여부(boolean)를 부모에게 보고합니다.
 *비밀 버튼 2 (focus): 검증 실패 시 부모가 사용자의 시선을 해당 입력창으로 즉시 옮길 수 있게 합니다.
 */
const AnimatedBox = forwardRef((props, ref) => {
  const boxRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      startShake: () => {
        boxRef.current.style.animation = "none";
        void boxRef.current.offsetWidth;
        boxRef.current.style.animation = "shake 0.5s";
      },
    }),
    [],
  );
  return (
    <div ref={boxRef} style={{ width: 50, height: 50, background: "coral" }}>
      Box
    </div>
  );
});
export default AnimatedBox;
