import { ADD, REMOVE } from "./toastReducer";

export function add(message) {
  return {
    type: ADD,
    message,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}
