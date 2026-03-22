import { useRef } from "react";

export default function VideoOptimizer() {
  const videoRef = useRef(null);
  // 1. [비밀 주머니] 실시간 재생 시간을 렌더링 없이 저장합니다.
  const lastTimeRef = useRef(0);

  const onTimeUpdate = () => {
    if (videoRef.current) {
      // 2. [성능 핵심] 영상이 재생되는 동안 이 함수는 계속 실행되지만,
      // Ref를 수정하므로 컴포넌트 전체는 절대 리렌더링되지 않습니다. (CPU 절약)
      lastTimeRef.current = videoRef.current.currentTime;
    }
  };

  const saveProgress = () => {
    // 3. 결정적인 순간(버튼 클릭)에만 저장소의 값을 가져옵니다.
    alert(`현재 ${Math.floor(lastTimeRef.current)}초 지점을 저장했습니다.`);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        background: "#333",
        color: "#fff",
        borderRadius: "15px",
      }}
    >
      <h3>🎬 비디오 이어보기 엔진</h3>
      <video
        ref={videoRef}
        onTimeUpdate={onTimeUpdate}
        controls
        width="100%"
        style={{ borderRadius: "10px" }}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <button
        onClick={saveProgress}
        style={{ marginTop: "10px", width: "100%", padding: "10px" }}
      >
        시청 위치 기록하기
      </button>
    </div>
  );
}
