import { useRef } from "react";
import SecureInput from "./SecureInput";

export default function SercureParent() {
  const inputRef = useRef();
  return (
    <>
      <SecureInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>자식 인풋 포커스</button>
      <button onClick={() => inputRef.current.clear()}>자식 인풋 클리어</button>
    </>
  );
}
