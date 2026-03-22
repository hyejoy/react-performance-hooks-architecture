import { createContext, useMemo, useReducer } from "react";

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();

export const TOGGLE_STOCK = "toggleStock";
export const DELETE = "delete";

function productReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_STOCK":
      return state.map((item) =>
        item.id === action.id ? { ...item, isSoldOut: !item.isSoldOut } : item,
      );
    case DELETE:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}

const initialData = Array.from({ length: 50 }, (_, idx) => ({
  id: idx,
  name: "티셔츠" + idx,
  isSoldOut: false,
}));
export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialData);

  const memoizedItems = useMemo(() => state, [state]);

  return (
    <ProductStateContext.Provider value={memoizedItems}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}
