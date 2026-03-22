import React, { useState, useCallback, memo } from "react";

// [자식 컴포넌트] 개별 장바구니 아이템
// TODO 1: React.memo를 사용하여 이 컴포넌트의 입구에 파수꾼을 세우세요.
const CartItem = memo(({ item, onDelete }) => {
  console.log(`🛒 [아이템] ${item.name} 컴포넌트가 다시 그려지고 있습니다!`);

  return (
    <li style={itemStyle}>
      <span>
        {item.name} (가격: {item.price}원)
      </span>
      <button onClick={() => onDelete(item.id)} style={buttonStyle}>
        삭제
      </button>
    </li>
  );
});

// [부모 컴포넌트] 장바구니 본체
export default function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: "맥북 프로", price: 2500000 },
    { id: 2, name: "아이폰 15", price: 1500000 },
    { id: 3, name: "매직 키보드", price: 120000 },
  ]);
  const [count, setCount] = useState(0);

  // TODO 2: 이 함수의 주소값이 변하지 않도록 useCallback으로 박제하세요.
  // 힌트: setItems 내부에서 '함수형 업데이트(prev => ...)'를 써야 의존성 배열을 비울 수 있습니다!
  // 2. useCallback: "이 함수의 메모리 주소를 0x111로 박제해서 자식에게 변함없는 열쇠를 줘!"
  const handleDelete = useCallback((id) => {
    // 3. 함수형 업데이트: 외부의 items 변수를 참조하지 않고 내부의 prev 값을 직접 사용함.
    // 이 덕분에 의존성 배열을 []로 비울 수 있고, 함수의 주소값은 영원히 고정됩니다.
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>🛒 스마트 장바구니 (최적화 실습)</h2>
      <div style={testBoxStyle}>
        <span>테스트용 클릭 횟수: {count}</span>
        <button
          onClick={() => setCount(count + 1)}
          style={{ marginLeft: "10px" }}
        >
          부모 상태 변경 (렌더링 유발)
        </button>
      </div>

      <ul style={{ padding: 0 }}>
        {items.map((item) => (
          <CartItem key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

// 스타일 정의
const itemStyle = {
  listStyle: "none",
  padding: "15px",
  borderBottom: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const buttonStyle = {
  padding: "5px 10px",
  backgroundColor: "#ff4d4f",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
const testBoxStyle = {
  marginBottom: "20px",
  background: "#f4f4f4",
  padding: "15px",
  borderRadius: "8px",
};
