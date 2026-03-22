import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  UPDATE_PRIORITY,
} from "./taskTypes";

export const addTask = (title) => ({
  type: ADD_TASK,
  title,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const updatePriority = (id, priority) => ({
  type: UPDATE_PRIORITY,
  id,
  priority,
});
