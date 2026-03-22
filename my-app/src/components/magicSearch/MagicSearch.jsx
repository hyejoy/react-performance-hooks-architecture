import { useRef, useState } from "react";

export default function MagicSearch() {
  const [renderCount, setRenderCount] = useState(0); // 전광판용 상태

  // TODO 1: 검색창을 움켜쥘 '리모컨(Ref)'을 선언하세요. (초기값 null)
  const searchRef = useRef(null);
  // TODO 2: 버튼 클릭 횟수를 저장할 '비밀 수첩(Ref)'을 선언하세요. (초기값 0)
  const secretRef = useRef(0);

  const handleSearchStart = () => {
    // TODO 3: 비밀 수첩의 숫자를 1 올리세요. (화면은 바뀌지 않아야 함)
    secretRef.current += 1;
    if (searchRef.current) {
      // TODO 4: 리모컨을 통해 실제 입력창에 .focus()를 주어 활성화하세요.
      searchRef.current.focus();
      // TODO 5: 입력창의 배경색을 '#fff9db'로 직접 변경하세요.
      searchRef.current.style.backgroundColor = "#fff9db";
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "15px",
      }}
    >
      <h2>🔍 Magic Search System</h2>

      {/* TODO 6: 아래 input 태그와 위에서 만든 리모컨을 연결하세요. */}
      <input
        ref={searchRef}
        type="text"
        placeholder="검색어를 입력하세요..."
        style={{ padding: "10px", width: "250px", transition: "all 0.3s" }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSearchStart}>🚀 검색 시작 (포커스 이동)</button>

        <button
          onClick={() =>
            console.log(`비밀리에 집계된 총 클릭 수: ${secretRef.current}번`)
          }
        >
          📊 클릭 통계 확인 (Console)
        </button>

        <button onClick={() => setRenderCount((prev) => prev + 1)}>
          🔄 화면 새로고침 (전광판: {renderCount})
        </button>
      </div>
    </div>
  );
}
