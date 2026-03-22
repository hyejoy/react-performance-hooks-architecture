import React from "react";
import { useAuthState } from "../contexts/AuthContext";
import { useTodoDispatch, useTodoState } from "../contexts/TodoContext";

const TodoItem = React.memo(({ id, title, isDone }) => {
  const todoDispatch = useTodoDispatch();
  return (
    <li>
      {title}
      <button onClick={() => todoDispatch({ type: "del", id })}>❌</button>
    </li>
  );
});

export default function TodoList() {
  const { user } = useAuthState();
  const todos = useTodoState();

  if (!user) return <p>로그인이 필요합니다.</p>;
  return (
    <>
      <ul>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
          />
        ))}
      </ul>
    </>
  );
}
