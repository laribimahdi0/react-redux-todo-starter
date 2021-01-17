import React from "react";
import { Redirect } from "react-router-dom";

const WithAuth = (WarrapedComponent) => (props) => {
  if (!localStorage.getItem("isLogin")) {
    return <Redirect to="/" />;
  }
  return <WarrapedComponent {...props} />;
};

export default WithAuth;
