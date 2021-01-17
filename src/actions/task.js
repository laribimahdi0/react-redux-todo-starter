export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
//export const GET_TASK_BY_ID = "GET_TASK_BY_ID";
export const addTask = (data) => (dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: data,
  });
};

export const deleteTask = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TASK,
    payload: id,
  });
};

export const editTask = (data) => (dispatch) => {
  dispatch({
    type: EDIT_TASK,
    payload: data,
  });
};
