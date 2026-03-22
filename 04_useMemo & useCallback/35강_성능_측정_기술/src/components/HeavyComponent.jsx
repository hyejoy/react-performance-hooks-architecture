// 1. [함정 컴포넌트]: 렌더링 시마다 강제로 100ms를 소모합니다.
function HeavyComponent() {
  const start = performance.now();

  // 의도적인 부하: 100ms가 지날 때까지 CPU 메인 스레드를 붙잡아둡니다.
  while (performance.now() - start < 100) {
    // CPU가 열심히 일하는 중...
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ff4757",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>⚠️ 저는 아주 무거운 컴포넌트입니다.</h3>
      <p>
        한 번 그릴 때마다 <b>100ms</b>가 걸려요!
      </p>
    </div>
  );
}

export default React.memo(HeavyComponent);
