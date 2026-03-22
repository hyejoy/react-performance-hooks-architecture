import React, { memo, useCallback, useMemo, useState } from "react";

// 가상 데이터 생성 유틸
const initialProducts = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Enterprise Model-${i + 1}`,
  price: Math.floor(Math.random() * 100000) + 10000,
}));

// [문제의 컴포넌트] 최적화가 안 되어 리렌더링 폭풍이 일어납니다.
const ProductItem = memo(({ product, onRemove }) => {
  console.log(`❌ [Bad Render] ID: ${product.id}`);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #eee",
      }}
    >
      <span>
        {product.name} | {product.price.toLocaleString()}원
      </span>
      <button onClick={() => onRemove(product.id)}>삭제</button>
    </div>
  );
});

export default function InventoryStarter() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);

  // 문제 1: 매번 다시 연산됨
  const filtered = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [products, search],
  );

  // 문제 2: 매번 주소값이 바뀜
  const handleRemove = useCallback((id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <div
      style={{
        background: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h2>재고 관리 (Starter)</h2>
      <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어를 입력하면 화면이 매우 버벅입니다..."
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <div>
        {filtered.map((p) => (
          <ProductItem key={p.id} product={p} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}
