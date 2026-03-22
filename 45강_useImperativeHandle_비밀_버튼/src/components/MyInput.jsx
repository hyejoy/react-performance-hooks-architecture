import { useImperativeHandle, forwardRef, useRef } from "react";
const MyInput = forwardRef((props, ref) => {
  /**
   * 왜 단순히 ref를 자식의 input에 직접 꽂아서 넘기지 않고 useImperativeHandle을 쓸까요?
   * 보안과 안정성:input 태그의 모든 속성(style, value, type 등)을 부모에게 다 노출하면 부모가 자식을 마음대로 주무르다가 예상치 못한 버그를 만들 수 있습니다.
   * 최소 노출 원칙: 자식은 "나를 제어하려면 딱 이 버튼들만 써!"라고 명확한 가이드라인(API)을 제시하는 것입니다. 이것이 바로 컴포넌트 간의 경계를 지키는 캡슐화의 정석입니다.
   * 명령적 탈출구: 리액트의 선언적 흐름을 깨는 행위이므로, 지도 API나 스크롤 제어 등 꼭 필요한 상황에서만 사용하는 것이 시니어의 안목입니다.
   */
  const inputRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      focus: () => inputRef.current.focus(),
      clear: () => (inputRef.current.value = ""),
    }),
    [],
  );
  return <input ref={inputRef} {...props} />;
});
export default MyInput;
