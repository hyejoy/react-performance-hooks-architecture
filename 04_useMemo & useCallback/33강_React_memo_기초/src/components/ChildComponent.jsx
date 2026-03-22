import { memo } from "react";

//부모가 보낸 onAction의 키 형태가 같은지 확인하고, 같으면 리랜더링을 건너뜀

const ChildComponent = memo(({ onAction }) => {
  console.log(
    "%c 🛡️ 파수꾼: 베일아웃(Bailout) 수행!",
    "color: #10b981; font-weight: bold;",
  );
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px dashed #10b981",
      }}
    >
      <h4>👶 최적화된 자식</h4>
      <button onClick={onAction}>동작</button>
    </div>
  );
});
export default ChildComponent;
