// Before: import { useContext } from 'react'; import { AuthStateContext... } from '...';
// After: 우리가 만든 전용 훅 하나면 충분합니다.
import { useAuthState, useAuthDispatch } from "../contexts/AuthContext";

export default function UserProfile() {
  // 1. 내부 구현(Context 객체명 등)을 몰라도 직관적으로 사용 가능합니다.
  const { user, isLoading } = useAuthState();
  const dispatch = useAuthDispatch();

  if (isLoading) return <p>로딩 중...</p>;
  if (!user) return <p>로그인이 필요합니다.</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2>👤 {user.name}님의 프로필</h2>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
    </div>
  );
}
