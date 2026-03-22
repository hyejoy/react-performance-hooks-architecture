import "./App.css";
import AccordionItem from "./components/useId/AccordionItem";

export default function App() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        border: "1px solid #ddd",
      }}
    >
      <AccordionItem title="리액트 useId란 무엇인가요?">
        접근성을 위한 고유 ID를 생성하는 훅입니다.
      </AccordionItem>
      <AccordionItem title="SSR에서 왜 중요한가요?">
        서버와 클라이언트의 ID를 일치시켜 하이드레이션 에러를 막아줍니다.
      </AccordionItem>
    </div>
  );
}
