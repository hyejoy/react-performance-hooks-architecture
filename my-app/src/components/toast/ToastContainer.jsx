import { useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import { remove } from "../../reducer/toast/toastActions";

export default function ToastContainer() {
  const { state, dispatch } = useContext(ToastContext);
  console.log(state);

  if (!state.length) return <div>알람이 없습니다.</div>;

  return (
    <>
      {state.map((toast) => (
        <div className="flex">
          <div>{toast.message}</div>
          <button
            onClick={() => dispatch(remove(toast.id))}
            className="border rounded-3xl"
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}
