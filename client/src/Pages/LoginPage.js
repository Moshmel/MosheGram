import React, { useState } from "react";
import userService from "../services/user-service";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { successLogin } from "../store/actions/actionCreators";
import { NavLink } from "react-router-dom";

const LoginPage = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const usernameRegex=/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await userService.login({ username,password});
      if (res.data) {
        dispatch(successLogin(res.data));
        props.history.push("/");
      }
    } catch (e) {
      console.log("error on logging in");
    }
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value);
    setIsUsernameValid(usernameRegex.test(e.target.value));
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    setIsPasswordValid(e.target.value.length > 3);
  };
  return (
    <section className="login-page fade-in">
      <div className="wrapper">
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/explority/image/upload/v1573925728/instaclone/insta-img_3_ez9cs7.png"
            alt="..."
          />
        </div>
        <form onSubmit={onSubmit}>
          <h1>MosheGram</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
          {!isUsernameValid && (
            <p className="scale-in-center">please insert valid username</p>
          )}

          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
          {!isPasswordValid && (
            <p>password must contain at least 4 characters</p>
          )}
          <button type="submit" className="btn-submit">
            Log-in
          </button>

          <div className="login-footer">
            <p>
              Don't have an account?{" "}
              <NavLink to="/signup" className="nav_link">
                Sign-up
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default withRouter(LoginPage);
