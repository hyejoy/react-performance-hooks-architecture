import React, { useContext } from "react";
import { ProductDispatchContext } from "../../contexts/ProductContext";

// React.memo로 감싸서 한 번 더 보호합니다.
export const StockButton = React.memo(({ id }) => {
  // 중요: 오직 dispatch만 가져오므로, 상품 데이터가 바뀌어도 이 버튼은 다시 그려지지 않습니다.
  const dispatch = useContext(ProductDispatchContext);

  console.log(`버튼 ${id} 렌더링됨 (최적화 확인용)`);

  return (
    <button
      className="border border-red-100 bg-red-400 rounded-md"
      onClick={() => dispatch({ type: "TOGGLE_STOCK", id })}
    >
      상태 변경
    </button>
  );
});
