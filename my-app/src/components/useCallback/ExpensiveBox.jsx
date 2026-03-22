import { memo } from "react";

// 2. React.memo로 자식 컴포넌트를 감싸줍니다.
// 이제 이 컴포넌트는 부모가 다시 그려져도 자신이 받은 Props(함수 주소 등)가
// 예전과 100% 동일하면 렌더링 작업을 취소합니다.
const ExpensiveBox = memo(({ createBoxStyle }) => {
  console.log(
    "%c 👶 자식: 주소가 똑같네요! 렌더링 작업을 생략합니다.",
    "color: #10b981; font-weight: bold;",
  );

  const style = createBoxStyle();
  return <div style={style}>최적화된 박스</div>;
});

export default ExpensiveBox;
