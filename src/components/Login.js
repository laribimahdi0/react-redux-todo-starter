import React, { useState } from "react";
import Input from "./Input";
import Button from "./Buttoon";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { useHistory } from "react-router-dom";
const Login = () => {
  const savedUser = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { push } = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === savedUser.email && savedUser.password === password) {
      localStorage.setItem("isLogin", true);
      dispatch(login());
      push("/task");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          label="Adress e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type={"password"}
          value={password}
          label="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Soumettre" type={"submit"} />
      </form>
    </div>
  );
};

export default Login;
