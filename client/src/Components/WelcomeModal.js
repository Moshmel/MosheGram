import React from "react";
import { FaKey } from "react-icons/fa";
export default (props) => {
    const {handleClose}=props
  return (
    <section className="welcome-modal">
      <div className="modal-backdrop" onClick={handleClose}></div>
      <div className="modal-content">
        <h1>
          Welcome to <span>Moshegram</span>!{" "}
        </h1>
        <p>Your are now connected as a default user</p>
        <p>
          Press {"  "}
          <span className="key-span"><FaKey /></span> to log-in, or register your own user
        </p>
        <p>Have Fun!</p>
        <div className="btn-container">
        <button onClick={handleClose}>
            close
        </button>
        </div>
       
      </div>
    </section>
  );
};
