import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/task";

const INITIAL_STATE = {
  tasks: [],
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };

    case EDIT_TASK:
      const newTasks = state.tasks.map((el) =>
        el.id === action.payload.id ? { ...action.payload } : { ...el }
      );
      return {
        ...state,
        tasks: newTasks,
      };

    default:
      return { ...state };
  }
}

export default userReducer;
