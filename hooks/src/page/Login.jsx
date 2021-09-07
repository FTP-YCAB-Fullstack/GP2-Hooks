import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const history = useHistory();

  const emailHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setInputPassword(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    localStorage.setItem("private", true);
    history.replace("/Home");
  };
  return (
    <div className="login">
      <form onSubmit={SubmitHandler}>
        <div className="control">
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="name"/>
        </div>
        <div className="control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" value={inputEmail} onChange={emailHandler}/>
        </div>

        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"value={inputPassword} onChange={passwordHandler}/>
        </div>

        <div className="actions">
          <button className="button" type="submit">
            Login
          </button>
        </div>

      </form>
    </div>
  );
}

export default Login;
