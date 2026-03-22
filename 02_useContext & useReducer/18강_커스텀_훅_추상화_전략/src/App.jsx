import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import UserProfile from "./components/UserProfile";
import { TodoProvider } from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
export default function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <div style={{ padding: "50px" }}>
          <h1>Abstraction Strategy</h1>
          <UserProfile />
          <TodoList />
        </div>
      </TodoProvider>
    </AuthProvider>
  );
}
