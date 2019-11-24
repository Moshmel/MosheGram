import React, { useState, useEffect } from "react";
import { NavLink,withRouter } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {
  FaInstagram,
  FaUserAlt,
  FaEllipsisH,
  FaPlus,
  FaKey
} from "react-icons/fa";
import { checkIfLoggedOn, logout } from "../store/actions/actionCreators";
import CreatePostModal from "./CreatePostModal";

const Navbar= (props) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user._id);
  const isConnected = useSelector(state => state.isConnected);
  const [toggleCreatePost, setToggleCreatePost] = useState(false);
  //on-mount
  useEffect(() => {
    dispatch(checkIfLoggedOn());
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
    <span onClick={() => dispatch(logout())} className="nav_link scale-in-center" >
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
        <div className="logo-container" onClick={()=>props.history.push("/")}>
          <span className="logo">
            <FaInstagram />
          </span>
          <div className="logo-spacing"></div>
         <span className="logo-title" >MosheGram</span>
        </div>
        <div>
          {isConnected ? (
            <div className="link-container">
              {feedBtn}
              {userProfileBtn} {logoutBtn} {addPostBtn} 
            </div>
          ) : (
            <div className="link-container">
              {feedBtn}
              {loginBtn}
            </div>
          )}

          {toggleCreatePost && (
            <CreatePostModal
              handleClick={() => setToggleCreatePost(!toggleCreatePost)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default withRouter(Navbar);