export const ADD = "add";
export const REMOVE = "remove";

export function toastReducer(state, action) {
  switch (action.type) {
    case ADD: {
      return [
        ...state,
        {
          id: Date.now(),
          message: action.message,
        },
      ];
    }
    case REMOVE: {
      return state.filter((toast) => toast.id !== action.id);
    }
    default:
      return state;
  }
}
