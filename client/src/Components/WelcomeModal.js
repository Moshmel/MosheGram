import React from "react";
import { FaKey } from "react-icons/fa";
export default (props) => {
    const {handleClose}=props
  return (
    <section className="welcome-modal">
      <div className="modal-backdrop" onClick={handleClose}></div>
     <div className="wrapper">

      <div className="modal-content">

        <div className="img-container">
          <img src="https://res.cloudinary.com/explority/image/upload/v1578825601/welcome_instagram_bxhfwl.png"/>
        </div>
        <h1>
        <span>Moshegram</span>!{" "} Demo
        </h1>
        <div className="bottom-section">

        <p>You are now connected as a default user!</p>
        <p>You can: </p>
        <ul>
         <li>-Add Likes</li>
         <li>-Add Comments</li>
         <li>-Add Posts</li>
        </ul>
        <p>
          Press {"  "}
          <span className="key-span"><FaKey /></span> to log-in, or register your own user.
        </p>
        
        <p className="have-fun">Have Fun!</p>
       
        </div>

       
      </div>
      <div className="btn-container">
        <button onClick={handleClose}>
            close
        </button>
        </div>
     </div>
    </section>
  );
};
