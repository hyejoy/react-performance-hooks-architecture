// [비밀 장부] 함수 밖에 선언하여 함수가 종료되어도 데이터가 유지되게 합니다.
const discountCache = {};

/**
 * 복합 할인율을 계산하는 무거운 함수
 * @param {string} userTier - 유저 등급
 */
export function getComplexDiscount(userTier) {
  // TODO 1: 장부(discountCache)를 먼저 확인하세요.
  // 이미 계산된 등급이라면 CPU를 쓰지 않고 즉시 반환합니다.
  if (userTier in discountCache) return discountCache[userTier];

  // --- 무거운 연산 시작 (수정 금지) ---
  console.log(`[CPU 열일 중] ${userTier} 등급의 복합 할인율을 계산합니다...`);
  for (let i = 0; i < 1000000000; i++) {
    // console.log();
  } // 의도적인 부하
  const calculatedResult = userTier === "Gold" ? 30 : 10;
  // --- 무거운 연산 종료 ---

  // TODO 2: 힘들게 계산한 결과를 장부(discountCache)에 기록하세요.

  discountCache[userTier] = calculatedResult;

  return calculatedResult;
}

// 테스트 코드
console.log("--- 1차 호출 (Gold) ---");
console.log("결과:", getComplexDiscount("Gold"));

console.log("--- 2차 호출 (Gold - 장부 확인 기대) ---");
console.log("결과:", getComplexDiscount("Gold"));

console.log("--- 1차 호출 (Premium - 장부 확인 기대) ---");
console.log("결과:", getComplexDiscount("Premium"));
console.log("--- 2차 호출 (Premium - 장부 확인 기대) ---");
console.log("결과:", getComplexDiscount("Premium"));
