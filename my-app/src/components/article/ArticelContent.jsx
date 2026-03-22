import { ArticleContext } from "../../contexts/ArticleContext";
import ArticleHeader from "./ArticleHeader";
import ArticleAdminPanel from "./ArticleAdminPanel";
import { useAuthState } from "../../contexts/AuthContext";

export default function ArticleContent() {
  // const { user } = useContext(ArticleContext);
  const { isAdmin } = useAuthState();

  return (
    <div style={{ padding: "20px" }}>
      <ArticleHeader />
      <main style={{ marginTop: "20px" }}>
        <h2>오늘의 실시간 주요 뉴스</h2>
        <p>React Context를 마스터하면 대형 앱도 두렵지 않습니다.</p>

        {/* 권한 관리 핵심: isAdmin이 true일 때만 비밀 창고를 엽니다. */}
        {isAdmin && <ArticleAdminPanel />}
      </main>
    </div>
  );
}
