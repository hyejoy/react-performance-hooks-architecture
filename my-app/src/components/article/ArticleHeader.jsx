import { useAuthDispatch, useAuthState } from "../../contexts/AuthContext";

export default function ArticleHeader() {
  // const { user, login, logout } = useContext(ArticleContext);
  const { isAdmin, name, isLoggedIn } = useAuthState();
  const authDipsatch = useAuthDispatch();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "2px solid #333",
      }}
    >
      <h1>🌐 React Times</h1>
      <div>
        {isLoggedIn ? (
          <>
            <span>
              <strong>{name}</strong>님 ({isAdmin ? "관리자" : "독자"}){" "}
            </span>
            <button onClick={() => authDipsatch({ type: "logout" })}>
              로그아웃
            </button>
          </>
        ) : (
          // 실무적 예시: 로그인 시 관리자 권한을 함께 부여해봅니다.
          <button onClick={() => authDipsatch({ type: "login" })}>
            관리자로 로그인
          </button>
        )}
      </div>
    </header>
  );
}
