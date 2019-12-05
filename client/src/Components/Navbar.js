import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FaInstagram,
  FaUserAlt,
  FaEllipsisH,
  FaPlus,
  FaKey
} from "react-icons/fa";
import { checkIfLoggedOn, logout } from "../store/actions/actionCreators";
import userService from "../services/user-service";

import CreatePostModal from "./CreatePostModal";
import WelcomeModal from "./WelcomeModal";

const Navbar = props => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user._id);
  const isConnected = useSelector(state => state.isConnected);
  const [toggleCreatePost, setToggleCreatePost] = useState(false);
  const [toggleWelcomeModal, setToggleWelcomeModal] = useState(false);

  //on-mount
  useEffect(() => {
    dispatch(checkIfLoggedOn());
    setToggleWelcomeModal(userService.shouldWelcomeModalOpen(userId));
  }, []);

  const addPostBtn = (
    <span
      className="nav_link scale-in-center"
      onClick={() => setToggleCreatePost(!toggleCreatePost)}
    >
      <FaPlus />
    </span>
  );
  const feedBtn = (
    <span>
      <NavLink to="/" className="nav_link scale-in-center">
        <FaEllipsisH />
      </NavLink>
    </span>
  );

  const userProfileBtn = (
    <span>
      <NavLink to={`/user/${userId}`} className="nav_link scale-in-center">
        <FaUserAlt />
      </NavLink>
    </span>
  );

  const logoutBtn = (
    <span
      onClick={() => dispatch(logout())}
      className="nav_link scale-in-center"
    >
      <FaKey />
    </span>
  );
  const loginBtn = (
    <span className="nav_link scale-in-center">
      <NavLink className="nav-link" to="/login">
        <FaKey />
      </NavLink>
    </span>
  );

  return (
    <section className="navbar fade-in">
      <div className="navbar-container">
        <div className="logo-container" onClick={() => props.history.push("/")}>
          <span className="logo">
            <FaInstagram />
          </span>
          <div className="logo-spacing"></div>
          <span className="logo-title">MosheGram</span>
        </div>
        <div>
          {isConnected ? (
            <div className="link-container">
              {feedBtn}
              {userProfileBtn} {loginBtn} {addPostBtn}
            </div>
          ) : (
            <div className="link-container">{feedBtn}</div>
          )}

          {toggleCreatePost && (
            <CreatePostModal
              handleClick={() => setToggleCreatePost(!toggleCreatePost)}
            />
          )}
          {toggleWelcomeModal && (
            <WelcomeModal handleClose={() => setToggleWelcomeModal(false)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default withRouter(Navbar);
