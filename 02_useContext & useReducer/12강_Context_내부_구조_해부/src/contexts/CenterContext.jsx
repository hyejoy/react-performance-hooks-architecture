import { createContext, useState } from "react";
export const NoticeContext = createContext("현재 등록된 공지사항이 없습니다."); // 기본값설정으로 provider안감싼상태에서 쓰려하면 기본값 제공
export const CenterContext = createContext();
export function CenterProvider({ children }) {
  const [lostItems, setLostItems] = useState(["지갑", "에어팟"]);
  const reportLost = (item) => setLostItems((prev) => [...prev, item]);
  const claimItem = (item) =>
    setLostItems((prev) => prev.filter((i) => i !== item));

  // [중요] 내려보낼 데이터와 기능을 하나의 객체로 묶음
  const systemValue = { lostItems, reportLost, claimItem };
  return (
    <CenterContext.Provider value={systemValue}>
      {children}
    </CenterContext.Provider>
  );
}
