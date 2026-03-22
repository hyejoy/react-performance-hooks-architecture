import { createContext, useContext, useReducer } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

export function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.todo];

    case "del":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (context === undefined) throw new Error("TodoProvider 내에서 사용하세요.");
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (context === undefined) throw new Error("TodoProvider 내에서 사용하세요.");
  return context;
};
