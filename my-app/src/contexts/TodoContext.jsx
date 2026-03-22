import { createContext, useContext, useReducer } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

export function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: action.id, title: action.title, isDone: false }];

    case "del":
      return state.filter((todo) => todo.id !== action.id);

    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo,
      );
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
