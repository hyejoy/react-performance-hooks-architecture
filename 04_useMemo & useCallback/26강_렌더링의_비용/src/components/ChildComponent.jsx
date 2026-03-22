export function ChildComponent() {
  // 부모가 리렌더링될 때마다 이 콘솔이 찍힙니다.
  console.log(
    "%c 💤 자식 컴포넌트(ChildComponent)도 다시 그려짐...",
    "color: #ffa502;",
  );

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px dashed #ffa502",
      }}
    >
      <h4>👶 자식 컴포넌트</h4>
      <p>나는 바뀐 게 없는데 부모님 때문에 다시 불려왔어요.</p>
    </div>
  );
}
