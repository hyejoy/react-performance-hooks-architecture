import React from "react";

/**
 * useCallback은 자식 컴포넌트가 React.memo로 감싸져 있을 때만 진정한 위력을 발휘합니다.
 * 부모가 주소를 고정해줘도 자식이 이를 대조해보지 않으면 소용이 없기 때문입니다.
 *  React.memo → props 비교해서 실행 여부 결정 (자식 역할)
 * 부모에서 useCallback이용해서 함수참조값 동일하게 넘겨줘서, 리랜덜이 안됨
 */
const ExpensiveChild = React.memo(({ onAction }) => {
  console.log(
    "%c 👶 자식 컴포넌트 리렌더링 감지!",
    "color: orange; font-weight: bold;",
  );
  return (
    <div
      style={{
        border: "1px dashed orange",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h4>자식 컴포넌트 (최적화됨)</h4>
      <button onClick={onAction}>액션 실행</button>
    </div>
  );
});

export default ExpensiveChild;
