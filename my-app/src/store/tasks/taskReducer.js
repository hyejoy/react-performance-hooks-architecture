import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  UPDATE_PRIORITY,
} from "./taskTypes";

export const initialState = [
  { id: 1, title: "강의 대본 검토하기", completed: false, priority: "High" },
  {
    id: 2,
    title: "리듀서 최종 미션 설계",
    completed: true,
    priority: "Medium",
  },
];

export function tasksReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      if (action.title.trim() === "") return;
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          isDone: false,
          priority: "Medium",
        },
      ];
    case TOGGLE_TASK:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case DELETE_TASK:
      return state.filter((todo) => todo.id !== action.id);
    case UPDATE_PRIORITY:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, priority: action.priority } : todo,
      );
    default:
      return state;
  }
}
