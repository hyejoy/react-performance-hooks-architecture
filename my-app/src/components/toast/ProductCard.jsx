import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import { ADD } from "../../reducer/toast/toastReducer";

export default function ProductCard({ name }) {
  // 4. 리모컨(dispatch)만 가져와서 중앙 엔진에 명령을 보냅니다.
  const { dispatch } = useContext(ToastContext);

  const handleAddCart = () => {
    dispatch({
      type: ADD,
      message: `✅ ${name} 상품이 장바구니에 담겼습니다!`,
    });
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      <h3>{name}</h3>
      <button onClick={handleAddCart}>장바구니 담기</button>
    </div>
  );
}
