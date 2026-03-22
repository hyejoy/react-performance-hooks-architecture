import React, { useContext } from "react";
import { ProductStateContext } from "../../contexts/ProductContext";
import { StockButton } from "./StockButton";

// 💡 memo는 props가 같으면 함수 실행 자체를 건너뜀, 바뀐 값 교체가아닌 함수를 아예 실행안함.
const ProductItem = React.memo(({ id, name, isSoldOut }) => {
  return (
    <li>
      {name} - {isSoldOut ? "품절" : "재고있음"}
      <StockButton id={id} />
    </li>
  );
});

export default function ProductList() {
  const items = useContext(ProductStateContext);
  console.log(items);

  return (
    <ul>
      {items?.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          isSoldOut={item.isSoldOut}
        />
      ))}
    </ul>
  );
}
