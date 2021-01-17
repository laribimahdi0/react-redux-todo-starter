import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Buttoon";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editTask } from "../actions/task";
function EditTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [taskComplte, setTaskComplet] = useState(false);
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const saveNewTask = () => {
    if (!taskName) {
      setShowAlert(true);
    } else {
      setShowAlert(false);

      push("/task");

      dispatch(
        editTask({
          id,
          name: taskName,
          description: taskDescription,
          isComplet: taskComplte,
        })
      );
    }
  };
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (tasks) {
      tasks.map((el) => {
        if (el.id === id) {
          setTaskName(el.name);
          setTaskDescription(el.description);
          setTaskComplet(el.isComplet);
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Modifier task </h1>
      <div className="container">
        <div className="row ">
          <div className="col-sm">
            <Input
              value={taskName}
              placeholder="Nom de tâche "
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="col-sm">
            <Input
              value={taskDescription}
              placeholder="Description de la tâches en une linge"
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="col-sm">
            <select
              defaultValue={taskComplte}
              className="mt-4"
              onClick={(e) => {
                setTaskComplet(e.currentTarget.value === "true" ? true : false);
              }}
            >
              <option value={true}> complete </option>
              <option value={false}> non complete </option>
            </select>
          </div>
          <div className="col-sm mt-4">
            <Button text="Modifier la  tâche" onClick={saveNewTask} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditTask;
