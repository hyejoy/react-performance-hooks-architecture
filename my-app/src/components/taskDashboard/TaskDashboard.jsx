import { useReducer } from "react";
import { initialState, tasksReducer } from "../../store/tasks/taskReducer";

export default function TaskDashboard() {
  const [tasks, reducer] = useReducer(tasksReducer, initialState);
  return <></>;
}
