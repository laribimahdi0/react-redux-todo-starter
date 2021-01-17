import React, { useState } from "react";
import Button from "./Buttoon";
import Input from "./Input";
import { addTask, deleteTask } from "../actions/task";
import { useDispatch, useSelector } from "react-redux";
import Badge from "./Badge";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import withAuth from "../Hoc/withAuth";

const Tasks = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showAlert, setShowAlet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useHistory();

  const { tasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const saveNewTask = () => {
    if (!taskName) {
      setShowAlet(true);
    } else {
      setShowAlet(false);
      dispatch(
        addTask({
          name: taskName,
          description: taskDescription,
          isComplet: false,
          id: uuid(),
        })
      );

      setTaskName("");
      setTaskDescription("");
    }
  };
  console.log(tasks);
  return (
    <div className="  text-start">
      {showAlert && (
        <div class="alert alert-danger" role="alert">
          Name is required
        </div>
      )}

      <h1>Liste des tâches</h1>

      {tasks.map((el) => (
        <div key={el.id} className="container card mb-2 p-2 ">
          <div className="d-flex">
            <div className="font-weight-bold">{el.name}:</div>
            <div className="text-secondary ml-1">{el.description}</div>
            <div
              className="text-primary btn-delete ml-2"
              onClick={() => dispatch(deleteTask(el.id))}
            >
              supprimer
            </div>
            <div
              className="text-primary btn-delete ml-2"
              onClick={() => push(`/task/${el.id}`)}
            >
              Edit
            </div>
            <div className=" ml-auto">
              <Badge isComplet={el.isComplet} />
            </div>
          </div>
        </div>
      ))}

      <h2>Crées une nouvelle tâche</h2>
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
          <div className="col-sm mt-4">
            <Button text="Ajouter une tâche" onClick={saveNewTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Tasks);
