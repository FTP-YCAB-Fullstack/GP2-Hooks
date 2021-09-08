import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const data = localStorage.getItem("private");

  return !data ? (
    <Redirect to="./login" />
  ) : (
    <Route {...props}>{props.children}</Route>
  );
};

export default PrivateRoute;
