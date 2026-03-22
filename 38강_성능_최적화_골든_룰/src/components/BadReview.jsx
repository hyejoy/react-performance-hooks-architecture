import { useState, useCallback, useMemo } from "react";

export default function BadReview() {
  const [count, setCount] = useState(0);

  // ❌ 나쁜 사례: 단순 로그 출력에 useCallback을 쓰는 것은
  // 함수 재생성 비용보다 의존성 배열 비교 비용이 더 커질 수 있습니다.
  const log = useCallback(() => console.log(count), [count]);

  // ❌ 나쁜 사례: 1 + 1 같은 단순 산수에 useMemo를 쓰는 것은 메모리 낭비입니다.
  const value = useMemo(() => 1 + 1, []);

  return (
    <div onClick={log} style={{ cursor: "pointer" }}>
      단순 연산 결과: {value}
    </div>
  );
}
