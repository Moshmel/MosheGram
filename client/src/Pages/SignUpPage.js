import React, { useState } from "react";
import userService from "../services/user-service";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { successLogin } from "../store/actions/actionCreators";
import { NavLink } from "react-router-dom";

const SignUpPage = props => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [email, setEmail] = useState("");
  const usernameRegex = "/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/";
  const handleUsernameChange = e => {
    setUsername(e.target.value);
    setIsUsernameValid(usernameRegex.test(e.target.value));
  };

  const onSubmit = async e => {
    e.preventDefault();
    if ((password === confirmPassword) & (username !== "")) {
      try {
        const res = await userService.register({
          username,
          password,
          email,
          userImg:
            "https://res.cloudinary.com/explority/image/upload/c_scale,h_150/v1566313959/user-image_jhgimu.jpg"
        });
        dispatch(successLogin(res.data));
        props.history.push("/");
      } catch (e) {
        console.log("register faild", e);
        setConfirmPassword("");
        setEmail("");
        setPassword("");
        setUsername("");
      }
    }
  };

  return (
    <section className="signup-page fade-in">
      <div className="wrapper">
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/explority/image/upload/v1573925728/instaclone/insta-img_3_ez9cs7.png"
            alt="..."
          />
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
          {!isUsernameValid && <p className="scale-in-center">please insert valid username</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <button type="submit" className="btn-submit">
            Sign-Up
          </button>
          <div className="signup-footer">
            <p>
              Already a member? <NavLink to="/login">Log-in</NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default withRouter(SignUpPage);
