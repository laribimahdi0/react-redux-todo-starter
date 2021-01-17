export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const login = () => (dispatch) => {
  dispatch({
    type: LOG_IN,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });

  localStorage.setItem("isLogin", false);
};
