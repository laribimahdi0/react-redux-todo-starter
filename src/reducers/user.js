import { LOG_IN, LOG_OUT } from "../actions/auth";

const INITIAL_STATE = {
  email: "test@test.com",
  password: "test",
  isLoged: false,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoged: true };
    case LOG_OUT:
      return { ...state, isLoged: false };
    default:
      return { ...state };
  }
}

export default userReducer;
