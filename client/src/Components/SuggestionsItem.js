import React from "react";
import FollowBtn from './FollowBtn';
export default (props) => {
  const { username, img, handleClick } = props;
  return (
    <div className="suggestions-item"> 
      <div className="left-section">
        <div className="img-container">
          <img src={img}  alt="..."/>
        </div>
        <div className="text-section">
          <h4>{username}</h4>
          <h5>Suggested for you</h5>
        </div>
      </div>
        <FollowBtn/>
    </div>
  );
};
