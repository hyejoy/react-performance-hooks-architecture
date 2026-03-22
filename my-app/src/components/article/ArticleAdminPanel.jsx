export default function ArticleAdminPanel() {
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#fff3cd",
        border: "1px solid #ffeeba",
        borderRadius: "8px",
      }}
    >
      <h3>🔐 Admin 전용 관리 패널</h3>
      <ul>
        <li>새 기사 승인 대기 목록 (5건)</li>
        <li>서버 상태 점검: 정상</li>
      </ul>
    </div>
  );
}
